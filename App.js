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
import CompleteSignup from './screens/CompleteSignup';

const Stack = createStackNavigator();

const App = () => {
  return (
    <View style={{flex: 1}}>
      <CompleteSignup />
      {/* 
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      */}
    </View>
  );
};

export default App;
