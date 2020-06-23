/*  Types */
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ASYNC_INCREMENT = 'ASYNC_INCREMENT';
export const ASYNC_DECREMENT = 'ASYNC_DECREMENT';

const initialState = {
  count: 0,
};

/*  Reducers */
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

/*  Actions */
export const increment = () => ({type: INCREMENT});
export const decrement = () => ({type: DECREMENT});
export const asyncIncrement = () => ({type: ASYNC_INCREMENT});
export const asyncDecrement = () => ({type: ASYNC_DECREMENT});

/* Saga */
import {put, takeLatest, delay} from 'redux-saga/effects';

const incrementAsync = function*() {
  yield delay(2000);
  yield put({type: INCREMENT});
};

const decrementAsync = function*() {
  yield delay(2100);
  yield put({type: DECREMENT});
};

export const watchIncrementAsync = function*() {
  yield takeLatest(ASYNC_INCREMENT, incrementAsync);
};

export const watchDecrementAsync = function*() {
  yield takeLatest(ASYNC_DECREMENT, decrementAsync);
};
