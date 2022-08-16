import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from '../../redux/createStore';
import { reducer } from './reducer';

const store = createStore(reducer);

// store => {dispatch: ƒ, subscribe: ƒ, unsubscribe: ƒ}

store.subscribe((state) => {
  // state => { value: 1 }
});

store.dispatch({ type: 'some type' });

ReactDOM.render(
  <div>create store</div>,
  document.querySelector('#app'),
);
