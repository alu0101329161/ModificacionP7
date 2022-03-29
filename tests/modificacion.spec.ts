import 'mocha';
import {expect} from "chai";
import {PrimeNumber} from "../src/modificacion";

const primos = PrimeNumber.getPrimeNumber();

describe('tests PrimeNumber class', () => {
  it('test addPrimo', () => {
    expect(primos.addPrimo(5)).to.eql(true);
    expect(primos.addPrimo(6)).to.eql(false);
  });
  it('test getPrimeNumber', () => {
    expect(PrimeNumber.getPrimeNumber()).to.eql(primos);
  });
  it('test getPrimoN', () => {
    expect(primos.getPrimoN(10)).to.eql([2, 3, 5, 7]);
  });
  it('test getPrimoNM', () => {
    expect(primos.getPrimoNM(10, 20)).to.eql([11, 13, 17, 19]);
  });
  it('test Iterable', () => {
    let aux: number[] = [];
    [...primos].forEach((primo) => aux.push(primo));
    expect(aux).to.eql([3, 5, 7]);
  });
});
  