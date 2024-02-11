// Otros usos del operador terniario

// const elMayor = (a,b) => {
//     return ( a > b ) ? a : b;
// }

const elMayor = (a,b) => ( a > b ) ? a : b;

const tieneMembresia = ( miembro ) => ( miembro ) ? '2 Dolares' : '10 Dolares'; 

console.log(elMayor(20,15));
console.log(tieneMembresia(true));

const amigo = false; 
const amigosArr = [ // En el arreglo se puede poner cualquier cosa, incluso una funcion
    'Peter',
    'Tony',
    'Dr Strange',
    amigo ? 'Thor' : 'Loki',
    // (()=> 'Nick Fury')() Esta es una funcion anonima autoinvocada
    elMayor(10,15),
];

console.log(amigosArr);


const nota = 65; // A+ A B+ B
const grado = nota >= 95 ? 'A+' :
    nota >= 90 ? 'A' :
    nota >= 85 ? 'B+' :
    nota >= 80 ? 'B' :
    nota >= 75 ? 'C+' :
    nota >= 70 ? 'C' : 'F';

console.log({ nota, grado})
    