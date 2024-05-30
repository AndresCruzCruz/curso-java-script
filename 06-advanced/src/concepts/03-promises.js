import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element) => {
    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    }
    const renderHero2 = (hero1, hero2) => {
        element.innerHTML = `${hero1.name} vs ${hero2.name}`;
    }
    const renderError = (error) => {
        element.innerHTML = `
        <h1>Error:</h1>
        <h3>${error}</h3>
        `;
    }

    let hero1, hero2

    const id1 = '5d86371f1efebc31def272e2';
    const id2 = '5d86371f1efebc31def272e2';

    // Promise hell
    // findHero(id1)
    //     .then(superHero => renderHero( superHero ));
    //     .then((hero) => {
    //         findHero(id2)
    //             .then((hero2) => renderHero2(hero, hero2))
    //             .catch(renderError);
    //     })// Se puede hacer de esta forma si el argumento que recibe la función es el mismo argumento que recibe el then
    //     .catch(renderError)
    //     .finally(() => console.log('Finally'));

    // Promise chaining - Promesas en cadena
    // findHero(id1)
    //     .then((hero) => {
    //         hero1 = hero;
    //         return findHero(id2);
    //     }).then((hero) => {
    //         hero2 = hero;
    //         renderHero2(hero1, hero2);
    //     }).catch(renderError)

    // Promise.all con que una de error ya no se ejecuta s
    Promise.all([
        findHero(id1), 
        findHero(id2)
        ]).then(([hero1, hero2]) => {
            renderHero2(hero1, hero2);
        }).catch(renderError);
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