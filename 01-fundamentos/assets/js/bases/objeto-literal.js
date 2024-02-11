let personaje = {
    // Son objetos literales, es una coleccion de llaves y valores
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima Pelicula': 'Infinity War' /* Se puede poner espacios en las llaves de los objetos, pero no es recomendable */
}

console.log(personaje);
console.log('Nombre: ', personaje.nombre);
console.log('Nombre: ', personaje['nombre']);
console.log('Edad: ', personaje.edad);
console.log('Coodenadas', personaje.coords);
console.log('Latitud', personaje.coords.lat);

console.log('Numero de trajes: ', personaje.trajes.length);

const trajes = personaje.trajes;
let numeroTrajes = 0
trajes.forEach(element => {
    numeroTrajes++;
});
console.log('Numero de trajes: ', numeroTrajes);

console.log('Ultimo traje: ', personaje.trajes[personaje.trajes.length - 1 ]);

const x = 'vivo';
console.log('Vivo: ', personaje[x]);

console.log('Ultima pelicula ', personaje['ultima Pelicula']);

// Mas detalles sobre los objetos literales

delete personaje.edad; // Elimina la propiedad del objeto
console.log(personaje);

personaje.casado = true; // Agrega una propiedad al objeto

const entriesPares = Object.entries(personaje); // Regresa un arreglo con las propiedades del objeto
console.log(entriesPares);

// Al volver contante el objeto, no se puede cambiar el objeto, pero si se pueden cambiar las propiedades del objeto
// persona = true; // No se puede hacer esto

Object.freeze(personaje); // Congela el objeto, no se pueden agregar, eliminar o modificar propiedades, pero no congela las propiedades del objeto

personaje.dinero = 1000000000;

console.log(personaje);

personaje.direccion.ubicacion = 'Costa Rica'; // No congela las propiedades del objeto

console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje); // Regresa un arreglo con las propiedades del objeto
console.log(propiedades);

const valores = Object.values(personaje); // Regresa un arreglo con los valores del objeto
console.log(valores);