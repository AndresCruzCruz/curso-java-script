const heroes = ['Batman', 'Superman', 'Flash', 'Aquaman'];
const sortedHeroes = heroes.toSorted();
const reversedHeroes = heroes.toReversed();
const deletedHero = heroes.toSpliced(0, 1, 'GreenLantern');

// heroes.sort();




console.table(heroes);
console.table(deletedHero);