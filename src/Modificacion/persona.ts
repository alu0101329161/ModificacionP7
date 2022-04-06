import {Observer, Observable, EventType} from "./modif"
import {Revista} from "./revista"

/**
 * Clase Subcritor que almacena infpormacio y muestra 
 * el titulo de la revista que se ha cambiado
 */
export class Subcriptor implements Observer {
    constructor(private nombre: string, private edad: number) {
    }
    /**
     * Nombre de la persona
     */
    getNombre() {
      return this.nombre;
    }
    /**
     * Edad de la persona
     */
    getEdad() {
      return this.edad;
    }
        /**
     * Nombre de la persona
     */
    setNombre(nombre: string) {
        this.nombre = nombre
    }
      /**
       * Edad de la persona
       */
    setEdad(edad: number) {
        this.edad = edad; 
      }
    /**
     * Muestra la informacion de 
     * @param observable 
     */
    update(observable: Observable): string {
      let result = ""
      if (observable instanceof Revista) {
        switch(observable.getEventType()) {
          case EventType["Añadido Titulo"]:
            result = `Se ha añadido una nueva revista`+" "+ observable.getTitulo()
            console.log(result);
            break;
        }
      }
      return result;
    }
  }

/* const revista = new Revista('Marca', 1920);
const firstsubcriptor = new Subcriptor('Manolo', 20);
revista.subscribe(firstsubcriptor); // Añadimos Subcriptor
revista.addRevista();
// revista.subscribe(firstsubcriptor); // No podemos pq ya esta añaddido
const secondsubcriptor = new Subcriptor('Manolo', 20);
revista.subscribe(secondsubcriptor);
revista.addRevista(); */