import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import{createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

export default function App() {
  return (
    <AppContainer/>
  );
}

const AppStackNavigator = createStackNavigator(
  {
    HomeScreen : {
      screen : HomeScreen,
      navigationOptions : {
        headerShown : false
      }
    },
    DetailScreen : {
      screen : DetailScreen,
    }
  },
  {
    initialRouteName : "HomeScreen"
  }
);

const AppContainer = createAppContainer(AppStackNavigator)

