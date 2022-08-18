/* eslint-disable default-case */
// @ts-nocheck

import { Dispatcher } from 'flux';
import MicroEvent from 'microevent';

export const AppDispatcher = new Dispatcher();

class Store {

  counts = {
    count: 0,
  }

}

MicroEvent.mixin(Store);

export const singletonStore = new Store();

AppDispatcher.register((payload) => {
  switch (payload.eventName) {
    case 'increment':
      singletonStore.counts.count += 1;
      singletonStore.trigger('change');
      break;
  }

  return true;

});
