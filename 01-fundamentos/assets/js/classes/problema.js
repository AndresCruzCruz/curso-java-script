// Clase para entender el origen de las clases en javascript

const fher = {
    nombre: 'Fernando',
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`); // this hace referencia al objeto que lo contiene
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 25,
    imprimir() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}

// fher.imprimir();
// problema: si se requiere crear un nuevo objeto con las mismas propiedades y métodos, se debe copiar y pegar el código
// Versiones anteriores a ECMA6 no soportaban clases, por lo que se usaban funciones constructoras
// La unica ventaja esque soporta navegadores antiguos < 8 años
// La desventeja esque al no tener bien documentado el código, se puede omitir el uso de "new", lo que puede causar errores
function Persona(nombre, edad) { // Se usa uppercase para indicar que es una clase
    console.log('Se ejecutó esta línea');
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}

// const maria = Persona('María', 18); // Se ejecuta la función, pero no se crea un nuevo objeto
const maria = new Persona('María', 18); // Se usa new para crear un nuevo objeto, una nueva instancia de la clase
const melissa = new Persona('Melissa', 35);
maria.imprimir(); // Se ejecuta la función imprimir
melissa.imprimir();