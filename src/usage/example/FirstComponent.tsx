/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';

const FirstComponent = (props: any): ReactElement => {
  const { value, increment } = props;

  useEffect(() => {
    increment();
  }, []);

  return (
    <div>
      Second component:
      {' '}
      {value}
    </div>
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
