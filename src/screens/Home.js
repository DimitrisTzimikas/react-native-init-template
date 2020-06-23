/* Libraries */
import React from 'react';
import {Text, Button} from 'react-native';
import {details, counter} from './screenNames';

const HomeScreen = ({navigation}) => (
  <>
    <Text>Hello World!</Text>
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate(details)}
    />
    <Button
      title="Go to Counter"
      onPress={() => navigation.navigate(counter)}
    />
  </>
);

export default HomeScreen;
