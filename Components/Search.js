import React from 'react';
import { View, TextInput, Button, TextInput } from 'react-native'
import FilmItem from '../Screens/Films/FilmItem';

const filmsContainer = (props) => {
    return (
        <View style={styles.mainContainer}>
            <TextInput style={styles.textInput} placeholder="titre de film" />
            <Button style={{height: 50}} title="Rechercher" onPress= {() => {}} />
            <FlatList
                data={films}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <FilmItem  film={item}/>}
                
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 20,
        flex: 1
    },
    textInput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 50,
        paddingLeft: 50,
    }
})


export default filmsContainer