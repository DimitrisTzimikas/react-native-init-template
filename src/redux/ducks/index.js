/* Libraries */
import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects';
/* Local Files */
import counter from './count.js';
import {watchIncrementAsync, watchDecrementAsync} from './count.js';
import helloSaga from './hello.js';

/* Reducers */
const reducers = combineReducers({
  counter,
});

/* Sagas */
const sagas = function*() {
  yield all([watchIncrementAsync(), watchDecrementAsync(), helloSaga()]);
};

export {reducers, sagas};
