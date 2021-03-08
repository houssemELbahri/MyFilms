import React, { useContext } from "react";
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

// Stacks
import HomeNavigator from './HomeNavigator';
import FavorisNavigator from './FavorisNavigator';



const Tab = createBottomTabNavigator();

const Main = () => {


    return (
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          keyboardHidesTabBar: true,
          showLabel: false,
          activeTintColor: "#0C186C",
          inactiveTintColor: "#A6ACAF",
          inactiveBackgroundColor: "#F4F6F6"
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon
                name="home"
                style={{ position: "relative" }}
                color={color}
                size={30}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Favoris"
          component={FavorisNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <View>
                <Icon name="star" color={color} size={30} />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    );
}

export default Main;