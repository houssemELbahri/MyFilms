import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import FavorisFilms from '../Screens/Favoris/FavorisFilms';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Favoris"
                component={FavorisFilms}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default function HomeNavigator() {
    return <MyStack/>
}