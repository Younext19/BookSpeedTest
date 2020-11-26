/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';

import Login from './auth/Login';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Signup from './auth/Signup';
import Navigation from './auth/Navigation';

const Stack = createStackNavigator();

const App = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </View>
  );
};

export default App;
