import MicroEvent from 'microevent';

export class CounterModel {

  count = 0;

}

MicroEvent.mixin(CounterModel);

export default new CounterModel();
