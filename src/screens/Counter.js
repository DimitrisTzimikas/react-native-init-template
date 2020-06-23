import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  Button,
  View,
  StyleSheet,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  increment,
  decrement,
  asyncIncrement,
  asyncDecrement,
} from '../redux/ducks/count.js';

const CounterScreen = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  const add = () => dispatch(increment());
  const sub = () => dispatch(decrement());
  const asyncIn = () => dispatch(asyncIncrement());
  const asyncDe = () => dispatch(asyncDecrement());

  useEffect(() => {});

  return (
    <>
      <StatusBar backgroundColor="coral" barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <Button title={'+'} onPress={add} />
        <Text>{count}</Text>
        <Button title={'-'} onPress={sub} />
        <View style={styles.view}>
          <Button title={'+ async'} onPress={asyncIn} />
        </View>
        <View style={styles.view}>
          <Button title={'- async'} onPress={asyncDe} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, borderColor: 'red', borderWidth: 3},
  view: {padding: 20},
  text: {fontSize: 30, color: 'red', textAlign: 'center'},
  flatList: {flex: 1, borderColor: 'green', borderWidth: 3},
});

export default CounterScreen;
