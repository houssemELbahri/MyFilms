import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import FilmsContainer from '../Screens/Films/FilmsContainer';
import FilmDetail from '../Screens/Films/FilmDetail';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={FilmsContainer}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Film Detail"
                component={FilmDetail}
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