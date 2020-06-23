/* Libraries */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
/* Local Files */
import StackNavigator from './Stack.js';

const Navigations = () => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);

export default Navigations;
