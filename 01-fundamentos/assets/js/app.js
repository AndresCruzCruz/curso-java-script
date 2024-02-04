// console.log('Hola mundo');

// let a = 10; // Hace referencia a un lugar en memoria y puede cambiar
// var b = 10; // Hace referencia a un lugar en memoria y puede cambiar
// const c = 10; // Hace referencia a un lugar en memoria pero no van a cambiar


// c = 20; // No se puede hacer porque es una constante

// La diferencia entre let y var es que let tiene un scope de bloque y var tiene un scope de función

// d = 30; // No se puede hacer porque no se ha declarado la variable -- Mala practica


// let a = 10;
// let b = 10;
// let c = 10;
// let d = 10;
// let x = a + b;

// let a = 10, b = 20, c = 30, d = 40, x = a + b;

// console.log(miNuevoNombre + ' Jimenes');

//alert('Hola desde el archivo JS')

let a = 10, 
    b = 20, 
    c = 'Hola', 
    d = 'Spiderman', 
    x = a + b;

const saludo = c + ' ' + d;

// console.log('a ->', a);
// console.log('b ->', b);
// console.log('c ->', c);

// console.log('%c Mis variables', 'color: blue; font-weight: bold');
// console.log({ a });
// console.log({ b });
// console.log({ c });

// Al imprimir muchas variables se puede realizar de esta forma: 
//console.table({ a, b, c, d, x });

c = 'Hola de nuevo'; 


// console.log({ saludo });

// let outerWidth = 1000000; // uno de los principales problemas de var es que se puede reasignar el valor de la variable en el objeto global window

// const outerHeight = 600;

// var miNuevoNombre = 'Fernando Herrera'; // Se puede declarar la variable después de haberla llamado