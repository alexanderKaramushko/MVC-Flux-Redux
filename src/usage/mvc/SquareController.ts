/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-named-as-default */
// @ts-nocheck

import SquareModel from './SquareModel';

export default class SquareController {

  updateSquare(count) {
    SquareModel.square = count ** 2;
    SquareModel.trigger('changeSquare');
  }

}
