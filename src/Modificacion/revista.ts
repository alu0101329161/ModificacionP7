import {Observer, Observable, EventType} from "./modif"

/**
 * Clase que implementa Observable
 * y esta siendo observada por Subcriptor
 */
export class Revista implements Observable {
    private observers: Observer[] = [];
    private eventType: EventType =EventType["Sin añadidos"];
    constructor(private titulo: string, private fechaPublicacion: number) {
    }
    /**
     * Titulo de la revista
     */
    getTitulo() {
      return this.titulo;
    }
  
    /**
     * Fecha de Publicacion de la Revista
     */
    getFechaPublicacion() {
      return this.fechaPublicacion;
    }

        /**
     * Titulo de la revista
     */
    setTitulo(titulo: string) {
        this.titulo = titulo
      }
    
      /**
       * Fecha de Publicacion de la Revista
       */
    setFechaPublicacion(numero: number) {
        this.fechaPublicacion = numero
      }
  
    /**
     * Sacar la situacon
     */
    getEventType() {
      return this.eventType;
    }
  
    subscribe(observer: Observer) {
        let result = "";
      if (this.observers.includes(observer)) {
        result ='Ya esta subcrito';
      } else {
        this.observers.push(observer);
      }
      return result;
    }
  
    unsubscribe(observer: Observer) {
      let result = "";
      const index = this.observers.indexOf(observer);
      if (index === -1) {
        result ='The observer has not been subscribed';
      } else {
        this.observers.splice(index, 1);
      }
      return result;
    }
  
    /**
     * Notificar al subcriptor
     */
    notify() {
      let result: string[] = [];
      let elemento = "";
      this.observers.forEach((observer) => {
        observer.update(this);
      })
      return result;
    }
  
    /**
     * Cambiar la situacion
     */
    addRevista() {
      this.eventType = EventType["Añadido Titulo"];
      this.notify();
    }
  }