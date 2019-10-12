import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from '../../_reducers'
import { store } from '../../_helpers'
const loggerMiddleware = createLogger();

const reduceReducers = (reducers) => (state, action) =>
  reducers.reduce((result, reducer) => (
    reducer(result, action)
  ), state);

export const storeManager = {
  store: null,
  //reducerMap: { rootReducer },
  reducerMap: {},
  registerReducers(reducerMap) {
    Object.entries(reducerMap).forEach(([name, reducer]) => {
      if (!this.reducerMap[name]) this.reducerMap[name] = [];

      this.reducerMap[name].push(reducer);

    });
  },
  createRootReducer() {
    console.log(Object.getOwnPropertyNames(this.reducerMap)) 
    return (
      combineReducers(Object.keys(this.reducerMap).reduce((result, key) => Object.assign(result, {
        [key]: reduceReducers(this.reducerMap[key]),

      }), {}))
    );

  },
  createStore() {
    this.store = createStore(this.createRootReducer(),store,
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
      ));
    return this.store;
  },
  refreshStore() {
    this.store.replaceReducer(this.createRootReducer());
  },
};

export const withRefreshedStore = (importPromise) => (
  importPromise
    .then((module) => {
      storeManager.refreshStore();
      return module;
    },
      (error) => {
        throw error;
      })
);



export default {
  storeManager: storeManager
};