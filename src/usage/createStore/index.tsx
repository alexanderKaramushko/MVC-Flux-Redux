import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from '../../redux/createStore';

const store = createStore(null);

console.log(store);

ReactDOM.render(
  <div>create store</div>,
  document.querySelector('#app'),
);
