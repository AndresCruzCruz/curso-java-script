const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];
let i = 0;
// while ( i < carros.length ) {
//     console.log(carros[i]);
//     // i = i + 1;
//     // i = i + 2;
//     i++;
// }  
// El ciclo se ejecuta mientras la condicion sea verdadera
// Se consideran falsas las siguientes expresiones: 
//undefined, null, 0, false, '', NaN

console.warn('While');

while( carros[i] ) {
    if ( i === 1 ) {
        // break;
        i++;
        continue;
    }
    console.log(carros[i]);
    i++;
}   
 
console.warn('Do-While');
let j = 0;

do {
    console.log( carros[j] )
    j++;
} while ( carros[j] )


// while (carros.length) {
//     let carro = carros.shift();
//     console.log(carro);
// }   // El ciclo se ejecuta mientras el arreglo tenga elementos
