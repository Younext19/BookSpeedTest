import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Login';
import Signup from './Signup';
import CompleteSignup from './CompleteSignup';

export default function Navigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="CompleteSignup"
        component={CompleteSignup}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
