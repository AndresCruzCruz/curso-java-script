// Los metodos son funciones que estan dentro de un objeto, los objetos son una coleccion de llaves y valores

let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo:', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log({ primero, ultimo});

juegos.forEach( (elemento, indice, arr) => {
    console.log({ elemento, indice, arr });
});

let nuevaLongitud = juegos.push('F-Zero'); // Agrega un elemento al final del arreglo y regresa el numero de elementos que tiene el arreglo
console.log({ nuevaLongitud, juegos})

juegos.unshift('Fire Emblem'); // Agrega un elemento al inicio del arreglo y regresa el numero de elementos que tiene el arreglo
console.log({ juegos });

let juegoBorrado = juegos.pop(); // Elimina el ultimo elemento del arreglo y regresa el elemento eliminado
console.log({ juegoBorrado, juegos });

let pos = 1;

let juegosBorrados = juegos.splice(pos, 2); // Elimina elementos del arreglo y regresa los elementos eliminados
console.log({ juegosBorrados, juegos });

let metroidIndex = juegos.indexOf('Metroid'); // Regresa el indice del elemento que se le pasa como parametro
console.log({ metroidIndex });

//TODO: Pasar 