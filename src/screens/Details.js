/* Libraries */
import React from 'react';
import {Text, Button} from 'react-native';
import {details, home} from './screenNames';

const DetailsScreen = ({navigation}) => (
  <>
    <Text>Details!</Text>
    <Button
      title="Go to Details... again"
      onPress={() => navigation.push(details)}
    />
    <Button title="Go to Home" onPress={() => navigation.navigate(home)} />
    <Button title="Go back" onPress={() => navigation.goBack()} />
    <Button
      title="Go back to first screen in stack"
      onPress={() => navigation.popToTop()}
    />
  </>
);

export default DetailsScreen;
