function crearPersona( nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido
    }
}

function crearPersona2( nombre, apellido) {
    return {
        nombre,
        apellido
    }
}

const crearPersona3 = (nombre, apellido) => ({ nombre, apellido });
    


const persona = crearPersona('Andres', 'Garcia');
console.log(persona);

const persona2 = crearPersona2('Andres', 'Cruz');
console.log(persona2);

const persona3 = crearPersona3('Andres', 'Perez');
console.log(persona3);


function imprimeArgumentos() {
    console.log(arguments);
}
imprimeArgumentos(10, true, false, 'Andres', 'Hola');

const imprimeArgumentos2 = () => { // Las funciones de flecha no tienen la variable arguments
    console.log(arguments);
}
//imprimeArgumentos2(10, true, false, 'Andres', 'Hola');

const imprimeArgumentos3 = (...arguments) => { // Esto funciona para imprimir los argumentos de una funcion de flecha
    console.log(arguments);
}
imprimeArgumentos3(10, true, false, 'Andres', 'Hola');

const imprimeArgumentos4 = (edad, ...arguments) => { // Esto funciona para imprimir los argumentos de una funcion de flecha
    console.log({edad, arguments});
}
imprimeArgumentos4(10, true, false, 'Andres', 'Hola');

const imprimeArgumentos5 = (edad, ...arguments) => { // Esto funciona para imprimir los argumentos de una funcion de flecha
    return arguments;
}
const [casado, vivo, nombre, saludo] = imprimeArgumentos5(10, true, false, 'Andres', 'Hola');
console.log({casado, vivo, nombre, saludo});

const { apellido: nuevoApellido } = crearPersona('Andres', 'Garcia');
console.log({nuevoApellido});


const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
}

// const imprimePropiedades = (personaje) => {
//     console.log(personaje.nombre);
//     console.log(personaje.codeName);
//     console.log(personaje.vivo);
//     console.log(personaje.edad);
//     console.log(personaje.trajes);
// }
// imprimePropiedades(tony);

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 0, trajes}) => {

    //edad = edad || 0; // Si no se le pasa la edad, se le asigna 0

    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({edad});
    console.log({ trajes });
}
imprimePropiedades(tony);