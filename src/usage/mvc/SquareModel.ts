import MicroEvent from 'microevent';

export class SquareModel {

  square = 0;

}

MicroEvent.mixin(SquareModel);

export default new SquareModel();
