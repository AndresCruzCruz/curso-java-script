function saludar(nombre) { // La diferencia entre una funcion y un metodo es que el metodo esta dentro de un objeto
    console.log(arguments); // Esta es una variable que tienen todas las funciones que es un arreglo con los argumentos que se le pasan a la funcion
    console.log('Hola ' + nombre);
    return 10;
    console.log('Soy un codigo que esta despues del return')
}

//let saludar = 123; // Esto no es una buena practica

const saludar2 = function(nombre) { // Esta es una funcion anonima, no hay forma de reutilizarla
    console.log('Hola ' + nombre);
}

// Lamda function

const saludarFlecha = () => {
    console.log('Hola Flecha');
}

const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre);
}



const retornoSaludar = saludar('Andres', 40, true, 'Costa Rica'); // Llamada a la funcion
console.log({ retornoSaludar })
console.log( retornoSaludar )
saludar2('Fernando'); // Llamada a la funcion
saludar(); // Llamada a la funcion 
saludarFlecha(); // Llamada a la funcion
saludarFlecha2('Melissa'); // Llamada a la funcion

// Ejerciciso con funciones

function sumar(a, b) {
    return a + b;
}

const sumar3 = (a, b) => {
    return a + b;
}

const sumar4 = (a, b) => a + b; // Si la funcion solo tiene una linea de codigo, se puede omitir el return y las llaves

const sumar2 = function(a, b) {
    return a + b;
}


console.log(sumar(1, 2));
console.log(sumar2(1, 2));

function getAleatorio() {
    return Math.random();
}

const getAletarioFlecha = () => Math.random();

console.log(getAleatorio());
console.log(getAletarioFlecha());