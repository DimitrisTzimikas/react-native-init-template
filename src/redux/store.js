/* Libraries */
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
/* Local Files */
import {sagas, reducers} from './ducks/index.js';

const config = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['counter'],
  blacklist: [''],
};
const persistedReducer = persistReducer(config, reducers);
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
const persistor = persistStore(store);
sagaMiddleware.run(sagas);

export {store, persistor};
