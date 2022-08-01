/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement } from 'react';
import { connect } from 'react-redux';

const FirstComponent = (props: any): ReactElement => {
  const { value, decrement, increment } = props;

  return (
    <>
      <button type="button" onClick={increment}>increment</button>
      <button type="button" onClick={decrement}>decrement</button>
      {value}
    </>
  );
};

const mapStateToProps = (state: any) => ({
  value: state.counterReducer.value,
});

const mapDispatchToProps = (dispatch: any) => ({
  decrement: () => dispatch({ type: 'counter/decrement' }),
  increment: () => dispatch({ type: 'counter/increment' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(FirstComponent);
