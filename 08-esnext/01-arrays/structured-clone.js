const superHerores = [
    {
        id: 1,
        name: 'Batman'
    },
    {
        id: 2,
        name: 'Superman'
    },
    {
        id: 3,
        name: 'Flash'
    },
    {
        id: 4,
        name: 'Aquaman'
    },
];

// Cuando se hace un spret de un array de objetos, se crea una copia del array, pero los objetos que contiene el array, son los mismos, es decir, si se modifica un objeto en la copia, tambien se modifica en el array original.
// const superHeroresCopye = [...superHerores];
const superHeroresCopye = structuredClone(superHerores);

superHeroresCopye[0].name = 'Ironman';

console.table(superHerores);
console.table(superHeroresCopye);