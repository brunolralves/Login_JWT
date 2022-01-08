import React from 'react';
import {View, Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from './pages/Home';
import Login from './pages/Login';

const Stack = createNativeStackNavigator();
const src: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
        name="Login"
        component={Login}
        />
        <Stack.Screen 
        name="Home"
        component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default src;
