export function reducer(state = { count: 0 }, action: Record<string, unknown>) {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + 1,
      };
    default:
      return state;
  }
}
