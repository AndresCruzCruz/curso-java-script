let a = 1;

if ( a >= 10 ) { // undefined, null, 0, false, NaN, '', una asignacion
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}
console.log('Fin del programa')

const hoy = new Date(); // {}
let dia = hoy.getDay(); // 0: Domingo, 1: Lunes, 2: Martes, ...

console.log({ dia });

if (dia === 0) { // El === compara el valor y el tipo de dato, el == solo compara el valor, el = es para asignar un valor
    // Si por ejemplo pongo solo un == y el valor es "0", me va a dar true porque solo compara el valor
    console.log('Domingo');
} else if (dia === 1) {
    console.log('Lunes');
//     if (dia === 1) {
//         console.log('Lunes');
//     } else {
//         console.log('No es domingo');
//     }
 } else {
    console.log('No es domingo ni lunes');
 }

 dia = 2;

 const diasLetras = {
     0: 'domingo',
     1: 'lunes',
     2: 'martes',
     3: 'miércoles',
     4: 'jueves',
     5: 'viernes',
     6: 'sábado'
 }
console.log(diasLetras[dia] || 'Día no definido'); // Si el valor de la variable dia no está definido, me va a imprimir 'Día no definido'

 const dias = ['', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
console.log(dias[dia] || 'Día no definido'); // Si el valor de la variable diaUno no está definido, me va a imprimir 'Día no definido'