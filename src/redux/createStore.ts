import { Action } from './types/action';
import { ListenerFn } from './types/listener';
import { ReducerFunction } from './types/reducer';

export function createStore(reducer: ReducerFunction) {
  let currentState: any;
  let listeners: ListenerFn[] = [];
  let isDispatching = false;

  function dispatch(action: Action) {
    // Флаг isDispatching предотвращает вызов dispatch из редьюсеров,
    // чтобы избежать рекурсивных обновлений и сайд-эффектов
    if (isDispatching) {
      throw new Error('reducer cannot dispatch actions');
    }

    try {
      // Процесс обновления store отмечается через флаг isDispatching
      isDispatching = true;

      currentState = reducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    listeners.forEach((listener) => listener(currentState));
  }

  function subscribe(listener: ListenerFn) {
    if (isDispatching) {
      throw new Error('cannot subscribe while dispatching');
    }

    listeners.push(listener);
  }

  function unsubscribe(listenerToRemove: ListenerFn) {
    if (isDispatching) {
      throw new Error('cannot unsubscribe while dispatching');
    }

    listeners = listeners.filter((listener) => listener !== listenerToRemove);
  }

  // Запуск '@@store/init' позволяет вызвать все редьюсеры,
  // чтобы получить их начальное состояние
  dispatch({ type: '@@store/init' });

  // currentState => { value: 1 }

  return {
    dispatch,
    subscribe,
    unsubscribe,
  };
}
