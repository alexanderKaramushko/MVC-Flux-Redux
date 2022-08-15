import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from '../../redux/createStore';

const store = createStore(null);

// store => {dispatch: ƒ, subscribe: ƒ, unsubscribe: ƒ}

ReactDOM.render(
  <div>create store</div>,
  document.querySelector('#app'),
);
