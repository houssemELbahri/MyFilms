import React, { useCallback } from "react";
import {
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  Share
} from "react-native";
import {  Text } from "native-base";
import { getImageFromApi } from "../../API/TMDB";
import Icon from "react-native-vector-icons/FontAwesome";
import { useSelector, useDispatch } from "react-redux";

import { toggleFavorite } from "../../Redux/Actions/favoriteActions";
//import Share from 'react-native-share';

const FilmItem = (props) => {
  const film = props.film;
  const dispatch = useDispatch();

  const isFavorite = useSelector((state) =>
    state.favoriteFilms.favoriteFilms.some((item) => item.id === film.id)
  );


  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'https://image.tmdb.org/t/p/w300'+film.poster_path,
        
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };




  /*const shareHandler = async () => {
      const shareOptions = {
          message: 'taraji ya dawla'
      }
          try {
              const ShareResponse = await Share.open(shareOptions);
          } catch(error) {
              console.log("error")
          } 
  }*/

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(film));
    //console.log(film);
  }, [dispatch, film]);

  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.image}
        source={{ uri: getImageFromApi(film.poster_path) }}
      />
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <View>
            <TouchableOpacity
                style={{paddingRight:5}}
              onPress={() => {
                toggleFavoriteHandler();
              }}
            >
              {!isFavorite ? (
                <Icon name="heart-o" size={25} color="#000000" />
              ) : (
                <Icon name="heart" size={30} color="#FF0000" />
              )}
            </TouchableOpacity>
          </View>
          <Text style={styles.titleText}>{film.title}</Text>
          <Text style={styles.voteText}>{film.vote_average}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText} numberOfLines={6}>
            {film.overview}
          </Text>
        </View>
        <View style={styles.dateContainer}>
          <TouchableOpacity
            onPress={onShare}
          >
            <Icon name="share" size={30} color="#000000" />
          </TouchableOpacity>
          <Text style={styles.dateText}>Sorti le{film.release_date}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 10,
    marginHorizontal: 5,
  },
  image: {
    width: 120,
    height: 200,
    margin: 5,
    backgroundColor: "gray",
  },
  contentContainer: {
    flex: 1,
    margin: 5,
  },
  headerContainer: {
    flex: 3,
    flexDirection: "row",
  },
  titleText: {
    fontWeight: "bold",
    //fontSize: 20,
    flex: 1,
    flexWrap: "wrap",
    paddingRight: 5,
  },
  voteText: {
    fontWeight: "bold",
    //fontSize: 26,
    color: "#000000",
  },
  descriptionContainer: {
    flex: 7,
  },
  descriptionText: {
    color: "#666666",
  },
  dateContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateText: {
    fontWeight: "bold",
    textAlign: "right",
    //fontsize: 14,
  },
  share: {
    width: 50,
    borderWidth: 1,
    borderColor: "#FFFFFF",
  },
});

/**<Image style={styles.image} />
            <View style={styles.contentContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.titleText}>{film.title}</Text>
                    <Text style={styles.voteText}>{film.vote_average}</Text>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionText} numberOfLines={6}>{film.overview}</Text>
                </View>
                <View style={styles.dateContainer}>
                    <Text style={styles.dateText}>Sorti le{film.release_date}</Text>
                </View>
            </View> */

export default FilmItem;
