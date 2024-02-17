
class Rectangulo {
    #area = 0; // # sirve para hacer privada la propiedad y no se pueda modificar desde fuera de la clase
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
        this.#area = base * altura;
    }
    // Actualmente no se pueden hacer metodos privados
    calcularArea() {
        console.log(this.#area * 2);
    }   
}

const rectangulo = new Rectangulo(10, 15);
// rectangulo.#area = 100; esto no se puede hacer
console.log(rectangulo); // Se imprime el objeto rectangulo