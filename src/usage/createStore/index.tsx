import React, { useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom';
import { combineReducers } from '../../utils/combineReducers';
import { createStore } from '../../redux/createStore';
import { reducer } from './reducer';

const store = createStore(combineReducers({ reducer }));

// store => {dispatch: ƒ, subscribe: ƒ, unsubscribe: ƒ}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    store.subscribe((state) => {
      setCount(state.reducer.count);
    });
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => store.dispatch({ type: 'increment' })}
      >
        increment
      </button>
      <div>{count}</div>
    </>
  );
}

ReactDOM.render(
  <Counter />,
  document.querySelector('#app'),
);
