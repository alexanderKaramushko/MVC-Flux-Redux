/* eslint-disable import/no-named-as-default */
// @ts-nocheck

import React, { useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom';
import CounterController from './CounterController';
import CounterModel from './CounterModel';
import SquareController from './SquareController';
import SquareModel from './SquareModel';

const counterController = new CounterController();
const squareController = new SquareController();

function Counter() {
  const [count, setCount] = useState(CounterModel.count);

  useEffect(() => {
    CounterModel.bind('changeCount', () => {
      setCount(CounterModel.count);
    });
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={counterController.updateCount}
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
  const [square, setSquare] = useState(SquareModel.square);

  useEffect(() => {
    CounterModel.bind('changeCount', () => {
      squareController.updateSquare(CounterModel.count);
    });
    SquareModel.bind('changeSquare', () => {
      setSquare(SquareModel.square);
    });
  }, []);

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
