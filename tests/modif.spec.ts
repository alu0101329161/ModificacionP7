import 'mocha';
import {expect} from "chai";
import {Subcriptor} from "../src/Modificacion/persona";
import {Revista} from "../src/Modificacion/revista";

/* const revista = new Revista('myButton', 1920);
const firstsubcriptor = new Subcriptor('Manolo', 20);
revista.subscribe(firstsubcriptor);
revista.addRevista(); */

const revista = new Revista('Marca', 1920);
describe('tests Revista', () => {
  it('Tiene una instancia', () => {
    expect(revista).not.to.be.equal(null);
  });
  it('Tiene un Titulo', () => {
    expect(revista.getTitulo()).eql('Marca');
  });
  it('Tiene una Fecha de Publicacion', () => {
    expect(revista.getFechaPublicacion()).eql(1920);
  });
  it('Cambiar Titulo', () => {
    revista.setTitulo("Prueba")
    expect(revista.getTitulo()).eql('Prueba');
  });
  it('Cambiar fecha publicacion', () => {
    revista.setFechaPublicacion(2000);
    expect(revista.getFechaPublicacion()).eql(2000);
  });
});

const firstsubcriptor = new Subcriptor('Manolo', 20);
const secondsubcriptor = new Subcriptor('Pepe', 15);
describe('tests Subcriiptor', () => {
  it('Tiene una instancia', () => {
    expect(firstsubcriptor).not.to.be.equal(null);
  });
  it('Tiene un Nombre', () => {
    firstsubcriptor.setNombre("PEPE")
    expect(firstsubcriptor.getNombre()).eql('PEPE');
  });
  it('Tiene una Fecha de Publicacion', () => {
    firstsubcriptor.setEdad(21);
    expect(firstsubcriptor.getEdad()).eql(21);
  });
});

describe('tests Subcripciones', () => {
  it('Se puede subcribir', () => {
    revista.subscribe(firstsubcriptor);
    revista.subscribe(secondsubcriptor);
    revista.addRevista();
    let observers = []
    let result: string[] = [];
    observers.push(firstsubcriptor)
    observers.push(secondsubcriptor)
    observers.forEach((observer) => {
      result.push(observer.update(revista));
    })
    expect(result).eql(["Se ha añadido una nueva revista Prueba", "Se ha añadido una nueva revista Prueba"])
  });
  it('No se puede subcribir si ya lo esta', () => { 
    expect(revista.subscribe(firstsubcriptor)).eql("Ya esta subcrito");
  })
  it('Se puede desuscirbir', () => { 
    expect(revista.unsubscribe(firstsubcriptor)).eql("");
  })
});