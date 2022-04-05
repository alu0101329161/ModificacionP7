import 'mocha';
import {expect} from "chai";
import {Solver, MergeSort, BubbleSort} from "../src/Modificacion/modif"

const bubble = new BubbleSort;
const merge = new MergeSort;
const ordenar = new Solver([9,7,32,2,8,1], bubble);

describe('tests Solve class', () => {
  it('test getData', () => {
    expect(ordenar.getData()).to.eql([9,7,32,2,8,1]);
  });
  it('test ordenar', () => {
    ordenar.ordenar();
    expect(ordenar.getData()).to.eql([1, 2, 7, 8, 9, 32]);
  });
  it('test setStrategy', () => {
    ordenar.setStrategy(merge);
    ordenar.setData([9,7,32,2,8,1]);
    ordenar.ordenar();
    expect(ordenar.getData()).to.eql([1, 2, 7, 8, 9, 32]);
  });
});