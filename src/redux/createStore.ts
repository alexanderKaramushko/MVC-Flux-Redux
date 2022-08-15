export function createStore(reducer: unknown) {
  const currentReducer = reducer;
  const listeners = [];
  const isDispatching = false;

  function dispatch() {}

  function subscribe() {}

  function unsubscribe() {}

  return {
    dispatch,
    subscribe,
    unsubscribe,
  };
}
