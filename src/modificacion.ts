/**
 * @class clas PrimeNumber para numeros primos
 */
export class PrimeNumber implements Iterable<number> {
  /**
   * Instancia de la clase PrimeNumber para respetar el patrón
   * de diseño Singelton
   */
  private static primeNumber: PrimeNumber;
  /**
   * Almacen de numeros primos.
   */
  private primos100: Map<string, number>;

  /**
   * Constructor de la clase privado
   */
  private constructor() {
    this.primos100 = new Map<string, number>();
    this.addPrimo(1);
    this.addPrimo(3);
    this.addPrimo(5);
    this.addPrimo(7);
  }

  /**
   * Método que añade numneros primos en nuestro alamcen.
   * @param numero numero a añadir
   * @returns true si el numero se añadió
   */
  addPrimo(numero: number) : boolean {
    if (this.esPrimo(numero)) {
      this.primos100.set(`${numero}`, numero);
      return true;
    }
    return false;
  }

  /**
   * Método que sigue el patrón Singelton
   * @returns Una instancia de la clase
   */
  public static getPrimeNumber(): PrimeNumber {
    if (!PrimeNumber.primeNumber) {
      PrimeNumber.primeNumber = new PrimeNumber();
    }
    return PrimeNumber.primeNumber;
  }

  /**
   * Método que mira si un número es primo
   * @param numero numero a analizar
   * @returns Verdadedro si el numero es primo
   */
  private esPrimo(numero: number): boolean {
    for (let i = 2, raiz = Math.sqrt(numero); i <= raiz; i++) {
      if (numero % i === 0) {
        return false;
      } 
    }
    return numero > 1;
  }

  /**
   * Método que devuelve numeros primos
   * @param n tope de número primos
   * @returns numeros primos
   */
  getPrimoN(n: number): number[] {
    const aux: number[] = [];
    for (let x = 0; x <= n; x++) {
      if (this.esPrimo(x)) {
        aux.push(x);
      }
    }
    return aux;
  }

  /**
   * Método que devuelve numeros primos
   * @param n tope inferior
   * @param m tope superior
   * @returns numeros primos
   */
  getPrimoNM(n: number, m: number): number[] {
    const aux: number[] = [];
    for (let x = n; x <= m; x++) {
      if (this.esPrimo(x)) {
        aux.push(x);
      }
    }
    return aux;
  }

  /**
   * Método que hace la clase Iterable
   * @returns El valor de los valores del MAP
   */
  [Symbol.iterator](): Iterator<number> {
    return this.primos100.values();
  }
}

