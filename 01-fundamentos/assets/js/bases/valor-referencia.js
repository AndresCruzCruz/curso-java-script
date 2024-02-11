let a = 10;
let b = a;
a = 30

console.log({ a, b });

let juan = { nombre: 'Juan' }; // En java script los objetos son pasados por referencia
let ana = { ...juan }; // Todos los primitivos de pasan por valor y los objetos por referencia
// El operador Rest (...) nos permite clonar un objeto y no hacer referencia al mismo
// el operador spread (...) nos permite clonar un objeto y no hacer referencia al mismo
// La diferencia entre rest y spread es que rest se utiliza en la declaración de una función y spread se utiliza en la invocación de una función
// let ana = { ...juan };
ana.nombre = 'Ana';

console.log({ juan, ana });

const cambiaNombre = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter'};
let tony = cambiaNombre(peter);
console.log({peter, tony});

// let ana = { ...juan }; // spread: separa los elementos de un objeto apunta a un nuevo espacio de memoria
// const cambiaNombre = ({ ...persona }) => { // rest

// Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];
// const otrasFrutas = [...frutas]; 
console.time('slice'); // con esto puedo medir el tiempo que tarda en ejecutarse una función
const otrasFrutas = frutas.slice(); // Otra forma de clonar un arreglo, pero no es la mejor forma
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas]; 
console.timeEnd('spread');

otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });