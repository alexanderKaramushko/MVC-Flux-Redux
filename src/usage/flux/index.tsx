// @ts-nocheck

import React, { useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom';
import { AppDispatcher, singletonStore } from './store';

function Counter() {
  const [count, setCount] = useState(singletonStore.counts.count);

  useEffect(() => {
    singletonStore.bind('changeCount', () => {
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
      <div>
        Count:
        {' '}
        {count}
      </div>
    </>
  );
}

function Square() {
  const [square, setSquare] = useState(singletonStore.squares.square);

  useEffect(() => {
    singletonStore.bind('changeSquare', () => {
      setSquare(singletonStore.squares.square);
    });
  });

  return (
    <div>
      Square:
      {' '}
      {square}
    </div>
  );
}

ReactDOM.render(
  <>
    <Counter />
    <Square />
  </>,
  document.querySelector('#app'),
);
