 
import React from 'react';
import { storeManager } from './app/reducers/storeManager'
import App from './App';

import { Provider } from 'react-redux';

export default function RootComponent() {
  return (
    <Provider store={storeManager.createStore()}>
      {<App />}
    </Provider>
  )
}
