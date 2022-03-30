/**
 * Clase RandomNumber siguiendo patron
 * Singleton Permite obtener numeros 
 * aleatorios
 */
export class RandomNumber {
  private static randomNumber: RandomNumber;
  /**
   * Constructor de la clase privado vacio ya que 
   * esta clase solo genera numeros aleatorios
   */
  private constructor() {}
  /**
   * Método que sigue el patrón Singelton
   * @returns Una instancia de la clase
   */
  public static getRandomNumber(): RandomNumber {
    if (!RandomNumber.randomNumber) {
      RandomNumber.randomNumber = new RandomNumber();
    }
    return RandomNumber.randomNumber;
  }
  /**
   * Funcion ran01
   * @returns Un número aleatorio en punto flotante generado en el rango [0, 1].
   */
   public ran01(){
      return Math.random()
  }
  /**
   * Funcion ranNM
   * @returns Un número aleatorio en punto flotante generado en el rango [n, m], donde n y m son parámetros del método correspondiente.
   */
   public ranNM(n :number, m :number){
      return Math.random() * (m-n) + n;
  }
  /**
   * Funcion intRanNM
   * @returns Un número aleatorio entero generado en el rango [n, m], donde n y m son parámetros del método correspondiente.
   */
   public intRanNM(n :number, m :number){
      return Math.floor(Math.random() * (m-n)) + n;
  }
}

/**
 * Clase iterable que devuelve una coleccion e
 * implementa una interfaz iterable de RandomNumber
 */
export class RandomNumberSetCollection implements Iterable<RandomNumber> {

  private numeros: Set<RandomNumber>;

  /**
   * Constructor
   * @param numeros conjunto de numeros aleatorios
   */
  constructor(numeros: RandomNumber[]) {
    this.numeros = new Set(numeros);
  }
  /**
   * Funcion addNumero.
   * Añade un numero al conjunto
   * @param numero numero a añadir
   */
  addNumero(numero :RandomNumber) {
      this.numeros.add(numero);
  }
  
  /**
   * Funcion getCantidadDeElementos.
   * @returns tamaño del conjunto
   */
  getCantidadDeElementos() {
      return this.numeros.size;
  }
  
  /**
   * Iterador.
   * Recorre el conjunto
   * @returns valores del conjunto
   */
  [Symbol.iterator](): Iterator<RandomNumber> {
      return this.numeros.values();
  }
}
