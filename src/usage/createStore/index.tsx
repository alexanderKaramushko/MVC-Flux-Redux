import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from '../../redux/createStore';
import { reducer } from './reducer';

const store = createStore(reducer);

// store => {dispatch: ƒ, subscribe: ƒ, unsubscribe: ƒ}

ReactDOM.render(
  <div>create store</div>,
  document.querySelector('#app'),
);
