



alert('Hola mundo'); // Esta instruccion es bloqueante hasta que el usuario contesta

let nombre = prompt('Dime tu nombre'); // Esta instruccion es bloqueante hasta que el usuario contesta y devuelve el valor ingresado
console.log(nombre);
console.log('Hola ' + nombre); // Esta instruccion no es bloqueante

const seleccion = confirm('¿Estas seguro de borrar esto?'); // Esta instruccion es bloqueante hasta que el usuario contesta y devuelve un valor booleano
console.log(seleccion); // Esta instruccion no es bloqueante

// console.log(global); // Esta instruccion no funciona en el navegador, solo en Node.js es parecido a window en el navegador