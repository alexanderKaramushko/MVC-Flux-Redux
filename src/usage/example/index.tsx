import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { combineReducers, createStore } from 'redux';
import { counterReducer } from './counterReducer';

import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';

const rootReducer = combineReducers({
  counterReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <FirstComponent />
    <SecondComponent />
  </Provider>,
  document.querySelector('#app'),
);
