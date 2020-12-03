/* Libraries */
import {createStore} from 'redux';
import {createContext} from 'react';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
/* Local Files */
import {reducers} from './ducks/index.js';

const config = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['language'],
  blacklist: [''],
};
const persistedReducer = persistReducer(config, reducers);
const store = createStore(persistedReducer, composeWithDevTools());
const persistor = persistStore(store);

const LocalizationContext = createContext();

export {store, persistor, LocalizationContext};
