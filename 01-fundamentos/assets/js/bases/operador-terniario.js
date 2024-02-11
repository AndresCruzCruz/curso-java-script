/*
* Dias de semana abrimos a las 11,
* pero los fines de semana abrimos a las 9
*/

// Entrar a un sitio web, para consultar si está abierto hoy...

const dia = 0; // 0: domingo, 1: lunes, 2: martes...
const horaActual = 10;

let horaApertura; 
let mensaje; // Está abierto, Está cerrado, hoy abrimos a las XX

// if ( dia === 0 || dia === 6 ) {
// if ( [0,6].includes(dia) ) {
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Dia de la semana');
//     horaApertura = 11;
// }

horaApertura = ( [0,6].includes(dia) ) ? 9 : 11; // Condicionales termiarias nos ayuda a simplificar las condiciones y tener un código más limpio, pero avusar de ellas puede hacer que el código sea menos legible

// if (horaActual >= horaApertura) {
//     mensaje = 'Está abierto';
// } else {
//     mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`; // de esta forma se puede concatenar una variable con el backtick ``
// }

mensaje = ( horaActual >= horaApertura ) ? 'Esta abierto' : `Esta cerrado, hoy abrimos a las $(horaApertura)`;

console.log({horaApertura, horaActual, mensaje});


// Otros usos del operador terniario
