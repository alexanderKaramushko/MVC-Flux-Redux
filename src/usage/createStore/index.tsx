import React, { useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from '../../redux/createStore';
import { reducer } from './reducer';

const store = createStore(reducer);

// store => {dispatch: ƒ, subscribe: ƒ, unsubscribe: ƒ}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    store.subscribe((state) => {
      setCount(state.count);
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
