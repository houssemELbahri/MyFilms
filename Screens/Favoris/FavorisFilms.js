import React from 'react'
import { View, StyleSheet, FlatList, Dimensions } from 'react-native'
import {useSelector} from 'react-redux';
import FilmItem from '../Films/FilmItem';
import { Left, Right, Container, Text, H1 } from 'native-base';

var { height } = Dimensions.get('window')

const FavorisFilms =() => {
    const favoriteFilms = useSelector(state => state.favoriteFilms.favoriteFilms)
    //console.log(favoriteFilms.length)
    return (
        <View style={styles.mainContainer}>
            {favoriteFilms.length > 0 ? (
          <FlatList
            data={favoriteFilms}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <FilmItem film={item} />}
          />
          ) : (
            <View style={[styles.center, { height: height / 2}]}>
            <H1 style={styles.contentHeader}>No favorite films</H1>
        </View>
          )}
        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        marginTop:10
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: "bold",
    },
    contentHeader: {
        fontWeight: 'bold',
        marginBottom: 20,
    },
});
export default FavorisFilms;