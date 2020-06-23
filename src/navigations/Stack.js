/* Libraries */
import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
/* Local Files */
import {HomeScreen, DetailsScreen, CounterScreen} from '../screens/index.js';
import {home, details, counter} from '../screens/screenNames.js';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator initialRouteName={home}>
    <Stack.Screen
      name={home}
      component={HomeScreen}
      options={{title: 'Overview'}}
    />
    <Stack.Screen name={details} component={DetailsScreen} />
    <Stack.Screen name={counter} component={CounterScreen} />
  </Stack.Navigator>
);

export default StackNavigator;
