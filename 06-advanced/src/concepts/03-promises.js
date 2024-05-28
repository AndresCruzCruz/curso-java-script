import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element) => {
    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    }
    const renderError = (error) => {
        element.innerHTML = `
        <h1>Error:</h1>
        <h3>${error}</h3>
        `;
    }
    const id1 = '5d86371f1efebc31def272e2';
    findHero(id1)
        // .then(superHero => renderHero( superHero ));
        .then(renderHero)// Se puede hacer de esta forma si el argumento que recibe la función es el mismo argumento que recibe el then
        .catch(renderError)
        .finally(() => console.log('Finally'));
}      

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = (id) => {

    return new Promise(( resolve, reject)=> {
        const hero = heroes.find( hero => hero.id === id);

        if (hero) {
            resolve(hero);
            return; // Es para detener la ejecución de la función
        }
        reject(`Hero with id ${ id } not found`);

    });
}