import React from 'react';
import ReactDOM from 'react-dom'; 
import './index.css'

import orderReducer from '../reducers/orderreducers'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AllFundsComponents from './AllFundsComponent'

const store = createStore(orderReducer);

ReactDOM.render(<Provider store={store}><AllFundsComponents /></Provider>, document.getElementById('root'));

