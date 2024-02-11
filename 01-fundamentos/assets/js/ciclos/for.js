const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Flash', 'Acuaman'];

console.warn('For tradicional');

for (let index = 0; index < heroes.length; index++) { // valor iniciar, condicion, incremento, el index es una variable local, solo existe dentro del ciclo
    console.log(heroes[index]);
}

console.warn('For in');

for (let i in heroes) { // Devuelve el indice del arreglo, mientras el objeto tenga elementos
    console.log(heroes[i]);
}   

console.warn('For of');

for (let heroe of heroes) { // Devuelve el valor del arreglo, mientras el objeto tenga elementos
    console.log(heroe);
}