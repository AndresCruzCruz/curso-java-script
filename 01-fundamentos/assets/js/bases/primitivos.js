// JavaScript es debilmente tipado, por lo que no es necesario declarar el tipo de variable infiere el tipo de variable

// Los tipos de datos primittivos es una informacion que no es un objeto y son inmutables, por ejemplo: los números, los booleanos, los strings, los undefined, los null, los símbolos y los BigInt

let nombre = 'Peter Parker';
console.log(nombre);

nombre = 'Ben Parker';
console.log(nombre);

nombre = "Tia May";
nombre = 'Tia May';

console.log(typeof nombre); // Esto devuelve el tipo de dato de la variable

nombre = 123;

console.log(typeof nombre);

let esMarvel = true;
console.log(typeof esMarvel);

let edad = 33;
console.log(typeof edad);

edad = 33.001;
console.log(typeof edad);

let superPoder;
console.log(typeof superPoder);

let soyNull = null;
console.log(typeof soyNull); // las variables nulas son de tipo objeto

let symbol1 = Symbol('a'); // Los símbolos son valores únicos
let symbol2 = Symbol('a');

console.log(typeof symbol1);

console.log(symbol1 === symbol2)