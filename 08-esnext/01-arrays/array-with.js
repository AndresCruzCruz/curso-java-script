const state = [
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


const index = 1;
const newName = 'GreenLantern';

// const newState = state.map((hero, i) => {
//     if (i === index) {
//        hero.name = newName;
//     }
//     return hero;
// });

const newState = state.with(index, {
    ...state.at(index),
    name: newName
});

state[0].name = 'Ironman';
console.table(newState);


console.log('El ultimo: ', state[state.length - 1]);
console.log('El ultimo: ', state.at(-1));