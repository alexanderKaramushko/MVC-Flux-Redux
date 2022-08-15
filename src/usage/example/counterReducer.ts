/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type

export function counterReducer(state = { value: 0 }, action: any) {
  switch (action.type) {
    case 'counter/increment':
      return { value: state.value + 1 };
    case 'counter/decrement':
      return { value: state.value - 1 };
    default:
      return state;
  }
}
