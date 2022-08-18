// @ts-nocheck

import React, { useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom';
import { AppDispatcher, singletonStore } from './store';

function Counter() {
  const [count, setCount] = useState(singletonStore.counts.count);

  useEffect(() => {
    singletonStore.bind('change', () => {
      setCount(singletonStore.counts.count);
    });
  });

  return (
    <>
      <button
        type="button"
        onClick={() => {
          AppDispatcher.dispatch({
            eventName: 'increment',
          });
        }}
      >
        increment
      </button>
      {count}
    </>
  );
}

ReactDOM.render(
  <Counter />,
  document.querySelector('#app'),
);
