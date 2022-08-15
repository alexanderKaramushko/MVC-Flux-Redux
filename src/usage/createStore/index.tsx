import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from '../../redux/createStore';
import { reducer } from './reducer';

const store = createStore(reducer);

console.log(store);

ReactDOM.render(
  <div>create store</div>,
  document.querySelector('#app'),
);
