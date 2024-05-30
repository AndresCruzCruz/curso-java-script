import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = (element) => {
    const id1 = '5d86371f1efebc31def272e2';
    console.log('Inicio del componente');
    findHero(id1)
        .then( hero => element.innerHTML = hero )
        .catch( error => element.innerHTML = error);
        // .then(({name}) => element.innerHTML = name) // Esto es destruturando la respuesta de la promesa
    console.log('Fin del componente');
    }

/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
 */
//Los Async simpre retornan una respuesta
const findHero = async(id) => { // Automaticamente transforma la funcion en una promesa de la cual se puede hacer uso
    const hero = heroes.find( hero => hero.id === id);
    if (!hero) 
        throw `No se encontro el heroe con el id ${id}`; // Ejectua el catch de la promesa hay que tener cuidado
    return hero?.name; /// El return es una respuesta exitosa en el async hay que tener cuidado
}