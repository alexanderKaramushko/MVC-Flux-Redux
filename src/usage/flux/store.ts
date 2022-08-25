/* eslint-disable default-case */
// @ts-nocheck

import { Dispatcher } from 'flux';
import MicroEvent from 'microevent';

export const AppDispatcher = new Dispatcher();

class Store {

  counts = {
    count: 0,
  }

  squares = {
    square: 0,
  }

}

MicroEvent.mixin(Store);

export const singletonStore = new Store();

singletonStore.squares.dispatchToken = AppDispatcher.register((payload) => {
  switch (payload.eventName) {
    case 'increment':
      AppDispatcher.waitFor([singletonStore.counts.dispatchToken]);
      singletonStore.squares.square = singletonStore.counts.count ** 2;
      singletonStore.trigger('changeSquare');
      break;
  }

  return true;

});

singletonStore.counts.dispatchToken = AppDispatcher.register((payload) => {
  switch (payload.eventName) {
    case 'increment':
      singletonStore.counts.count += 1;
      singletonStore.trigger('changeCount');
      break;
  }

  return true;
});
