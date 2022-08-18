/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-named-as-default */
// @ts-nocheck

import CounterModel from './CounterModel';

export default class CounterController {

  updateCount() {
    CounterModel.count += 1;
    CounterModel.trigger('changeCount');
  }

}
