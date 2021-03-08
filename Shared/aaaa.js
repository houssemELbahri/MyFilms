import React, { useState,useEffect, useCallback } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import FilmItem from "./FilmItem";
import { getFilmsFromApi } from "../../API/TMDB";
import { useFocusEffect } from "@react-navigation/native";
import { baseURL } from "../../API/TMDB";
import axios from "axios";
import { Container, Header, Icon, Item, Input, Text, H1 } from "native-base";

var { height } = Dimensions.get("window");

const filmsContainer = (props) => {
  const [films, setFilms] = useState([]);
  const [searchedText, setSearchedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [firstFilms, setFirstFilms] = useState([]);
  const [focus, setFocus] = useState();
  const [initialState, setInitialState] = useState([]);

  console.log(loading);
  console.log(firstFilms);

  /*useFocusEffect(
    useCallback(() => {
      setFocus(false);
      // top Rated
      //https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1
      axios
        .get(baseURL)
        .then((res) => {
          setFirstFilms(res.data.results);
          setInitialState(res.data);

          setLoading(false);
        })
        .catch((error) => {
          console.log("Api call error");
        });

      return () => {
        setFirstFilms([]);
      };
    }, [])
  );*/

  const openList = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  const loadsFilms = () => {
    setLoading(true);
    if (searchedText.length > 0) {
      getFilmsFromApi(searchedText, page + 1).then((data) => {
        console.log(data.results);
        setPage(data.page);
        setTotalPage(data.total_pages);
        setFilms([...films, ...data.results]);
        setLoading(false);
      });
    }
  };

  const searchFilms = () => {
    setPage(0);
    setTotalPage(0);
    setFilms([]);
    console.log(
      "page:" + page,
      "total page:" + totalPage,
      "nombre de films:" + films.length
    );
    loadsFilms();
  };

  return (
    <>
      {loading == false ? (
        <Container >
          <Header searchBar rounded>
            <Item>
              <Icon name="ios-search" />
              <Input
                placeholder="Search"
                onFocus={openList}
                onChangeText={(text) => setSearchedText(text)}
                onSubmitEditing={() => {
                  searchFilms();
                }}
              />
              {focus == true ? (
                <Icon onPress={onBlur} name="ios-close" />
              ) : null}
            </Item>
          </Header>
          {/*<TextInput
            style={styles.input}
            placeholder="Searhch"
            onSubmitEditing={() => {
              searchFilms();
            }}
            onChangeText={(text) => setSearchedText(text)}
          />*/}
          {/*<Button
          style={{ height: 50 }}
          title="Rechercher"
          onPress={() => {
            searchFilms();
          }}
        />*/}

          {films.length > 0 ? (
            <FlatList
              data={films}
              keyExtractor={(item) => item.id.toString()}
              onEndReachedThreshold={0.5}
              onEndReached={() => {
                if (films.length > 0 && page < totalPage) {
                  console.log("finished");
                  loadsFilms();
                }
              }}
              renderItem={({ item }) => <FilmItem film={item} />}
            />
          ) : (
            <View style={[styles.center, { height: height / 2 }]}>
              <H1 style={styles.contentHeader}>No films found</H1>
            </View>
          )}
        </Container>
      ) : (
        <Container style={[styles.center, { backgroundColor: "#f2f2f2" }]}>
          <ActivityIndicator size="large" color="red" />
        </Container>
      )}
    </>
  );
};

/*const mapStateToProps = (state) => {
    return {
        favoriteFilms: state.favoriteFilms
    }
  };*/

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 20,
    flex: 1,
  },
  textInput: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: "#000000",
    borderWidth: 1,
    paddingLeft: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 60,
    height: 50,
    //marginTop: 8,
    marginBottom: 10,
    marginHorizontal: 5,
    paddingHorizontal: 16,
    fontSize: 18,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentHeader: {
    fontWeight: 'bold',
    marginBottom: 20,
},
});

export default filmsContainer;
//export default connect(mapStateToProps)(filmsContainer);
