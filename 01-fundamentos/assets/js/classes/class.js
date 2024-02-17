class Persona { 
    // La sentencia 'use stict' viene activada por defecto en las clases

    static _conteo = 0 // Las propiedades privadas no existen en JS, pero se pueden simular con el guion bajo
    static get conteo() { // El static es un metodo que se puede llamar sin necesidad de instanciar la clase
        return Persona._conteo + ' instancias';
    }
    static mensaje() {
        console.log(this.nombre); // No se puede acceder a las propiedades de la clase con this, ya que no se ha instanciado la clase
        console.log('Hola a todos, soy un metodo estatico');
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') { // El constructor es un método especial que se ejecuta al crear una nueva instancia de la clase, es el unico que retorna un valor sin necesidad de usar return
        if (!nombre) { // Esto es un error controlado, para evitar que al implementar la clase, se olvide pasar el argumento, Tambien puedes poner datos por defecto en el constructor
            throw new Error('El nombre es necesario');
        }
        console.log('Hola!');
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        Persona._conteo++; // Se incrementa el valor de la propiedad _conteo
    }

    // Set y Get
    // Antes de establecer el valor de una propiedad o de obtener el dato se  quiere controlar como se establece
    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase(); // Se establece el valor de la propiedad comida, convirtiendola a mayusculas
    }
    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`; // Se obtiene el valor de la propiedad comida
    }

    // los metodos en las clases no necesitan la palabra function
    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }
    miFrase() {
        this.quienSoy(); // Hago referencia a un metodo dentro de la misma clase
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}
// Si no le pasas argumentos en el return de la clase, te regresa un objeto vacío
const spiderman = new Persona('Peter parker', 'SpiderMan', 'Soy tu amigo el hombre araña'); // Se crea una nueva instancia de la clase Persona
const ironman = new Persona('Tony Stark', 'IronMan', 'Soy Ironman'); // Se crea una nueva instancia de la clase Persona
// Persona._conteo = 2; // Se establece el valor de la propiedad _conteo
console.log({spiderman, ironman}); // Se imprime el objeto persona
// spiderman.quienSoy(); // Se llama al metodo quienSoy
// ironman.quienSoy(); // Se llama al metodo quienSoy

spiderman.miFrase(); // Se llama al metodo miFrase
spiderman.setComidaFavorita = 'El pie de cereza de la tía May'; // Se establece el valor de la propiedad comida
console.log(spiderman); 
console.log(spiderman.getComidaFavorita); // Se llama al metodo getComidaFavorita

console.log('Conteo estatico', Persona._conteo); // Se imprime el valor de la propiedad _conteo
console.log(Persona.conteo); // Se imprime el valor de la propiedad _conteo

Persona.mensaje()