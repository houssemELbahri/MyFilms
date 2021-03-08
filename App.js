import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Main from "./Navigators/Main";
import Header from './Shared/Header';


export default function App() {
  
  return (
    <Provider store={store}>
        <NavigationContainer>
          <Header />
          <Main />
        </NavigationContainer>
      </Provider>
  );
}



