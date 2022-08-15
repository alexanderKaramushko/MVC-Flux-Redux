export function createStore(reducer: unknown) {
  const listeners = [];
  let isDispatching = false;

  function dispatch() {}

  function subscribe() {}

  function unsubscribe() {}

  return {
    dispatch,
    subscribe,
    unsubscribe,
  };
}
