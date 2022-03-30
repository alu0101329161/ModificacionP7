import 'mocha';
import {expect,assert} from "chai";
import {RandomNumber,RandomNumberSetCollection, RandomNumberSetCollectionNumber} from "../src/modificacion";

const random1 = RandomNumber.getRandomNumber()
const random2 = RandomNumber.getRandomNumber()
const random3 = RandomNumber.getRandomNumber()


describe('tests RandomNumber class', () => {
  it('test Number entre 0 y 1', () => {
    expect(random1.ran01()).not.to.be.equal(null);
  });
  it('test Number entre 2 rangos N y M', () => {
    expect(random2.ranNM(2,2)).eql(2);
    assert.isAtLeast(random2.ranNM(2,2),1)
  });
  it('test Number entre 2 rangos N y M', () => {
    expect(random2.ranNM(2,2)).eql(2);
    assert.isAtLeast(random2.ranNM(2,2),1)
  });
  it('test Number entre dos rangos en flotante', () => {
    expect(random3.intRanNM(2,2)).eql(2);
    assert.isAtLeast(random3.ranNM(2,2),1)
  });
});

var collectionrandomnumber = new RandomNumberSetCollectionNumber([random1.ran01(),random2.ran01(),random3.ran01()]);

describe('tests RandomNumberSetCollection class', () => {
  it('Existe una instancia de la clase', () => {
    expect(collectionrandomnumber).not.to.be.equal(null);
  });
  it('Devuelve el numero de elementos', () => {
    expect(collectionrandomnumber.getCantidadDeElementos()).eql(3);
  });
  it('Test iterable en la collecion', () => {
    let aux: number[] = [];
    [...collectionrandomnumber].forEach((random) => aux.push(random));
    expect(aux).not.to.be.equal(null);
    assert.isDefined(aux)
  });
});


var collectionrandom = new RandomNumberSetCollection([random1,random2,random2]);

describe('tests RandomNumberSetCollection class', () => {
  it('Existe una instancia de la clase', () => {
    expect(collectionrandom).not.to.be.equal(null);
  });
  it('Devuelve el numero de elementos', () => {
    expect(collectionrandom.getCantidadDeElementos()).eql(1);
  });
  it('Test iterable en la collecion', () => {
    let aux: number[] = [];
    [...collectionrandom].forEach((random) => aux.push(random.ran01()));
    expect(aux).to.eql(aux);
  });
});