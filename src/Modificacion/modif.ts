/**
 * Interfaz para los algortimos
 */
export interface Strategy {
  execute(dato: number[]): number[];
}

/**
 * @class clase que menja los algoritmos.
 */
export class Solver {
  /**
   * Constructor
   * @param data array de numeros 
   * @param strategy algoritmo
   */
  constructor(private data: number[], private strategy: Strategy) { }

  /**
   * Cambia el algoritmo
   * @param strategy algoritmo
   */
  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  /**
   * Ejecuta el algoritmo
   */
  ordenar(): void {
    this.data = this.strategy.execute(this.data);
  }

  /**
   * Devuelve el array
   * @returns array de numeros
   */
  getData(): number[] {
    return this.data;
  }

  /**
   * Cambia los numeros del array
   * @param data nuevos numeros
   */
  setData(data: number[]): void {
    this.data = data;
  }
}

/**
 * @class Bubblesort
 */
export class BubbleSort implements Strategy {
  /**
   * Ejecuta el algortimo BubbleSort.
   * @param dato array de numeros
   */
  execute(dato: number[]): number[] {
    const l = dato.length;
    for (let i = 0; i < l; i++) {
      for (let j = 0; j < l - 1 - i; j++) {
        if (dato[j] > dato[j + 1]) {
          [dato[j], dato[j + 1]] = [dato[j + 1], dato[j]];
        }
      }
    }
    return dato;
  }
}

/**
* @clas MergeSort
*/
export class MergeSort implements Strategy {
  /**
   * Ejecuta el algoritmo mergesort
   * @param dato array de numeros
   */
  execute(dato: number[]): number[] {
    return this.mergeSort(dato);
  }

  /**
   * Algoritmo mergesort
   * @param dato array de numeros
   * @returns el array ordenado
   */
  mergeSort(dato: number[]): number[] {
    if (dato.length < 2) {
      return dato;
    }

    const medio = Math.floor(dato.length / 2);
    const izquierda = dato.slice(0, medio);
    const derecha = dato.slice(medio, dato.length);

    return this.merge(this.mergeSort(izquierda), this.mergeSort(derecha));
  }

  /**
   * ALgoritmo aux del Mersort
   * @param izq array de numeros
   * @param dere array de numeros
   * @returns el array ordenado
   */
  merge(izq: number[], dere: number[]): number[] {
    const aux: number[] = [];

    while (izq.length && dere.length) {
      if (izq[0] < dere[0]) {
        aux.push(izq.shift() as number);
      } else {
        aux.push(dere.shift() as number);
      }
    }

    while (izq.length) {
      aux.push(izq.shift() as number);
    }
    while (dere.length) {
      aux.push(dere.shift() as number);
    }
    return aux;
  }
}

const a = new MergeSort;
console.log(a.mergeSort([9, 8, 7, 6]));
