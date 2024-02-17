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
// Ahora vamos a crear una subclase

class Heroe extends Persona { // Se crea una subclase que hereda de la clase Persona
   clan = 'Sin clan'; // Se establece una nueva propiedad 
   constructor(nombre, codigo, frase) { // Se crea un nuevo constructor
       super(nombre, codigo, frase); // Se llama al constructor de la clase padre
       this.clan = 'Los Avengers'; // Se establece el valor de la propiedad clan
   }
   quienSoy() { // Se sobreescribe el metodo quienSoy
         console.log(`Soy ${this.nombre}, ${this.clan}`); // Se imprime un nuevo mensaje
         super.quienSoy(); // Se llama al metodo quienSoy de la clase padre
    }
}

const spiderman = new Heroe('Peter parker', 'SpiderMan', 'Soy tu amigo el hombre araña'); // Se crea una nueva instancia de la clase Persona
// const spiderman = Heroe(); 
console.log(spiderman); // Se imprime el objeto spiderman con todas las propiedades de la clase Persona
spiderman.quienSoy(); // Se llama al metodo quienSoy