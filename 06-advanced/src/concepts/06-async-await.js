import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = async (element) => {
    const id1 = '5d86371f1efebc31def272e2s';
    const id2 = '5d86371f1efebc31def272e2';

    try {
        const {name: name1} = await findHero(id1); // Desestructurar la respuesta
        const hero2 = await findHero(id2);
        element.innerHTML = `${name1} - ${hero2.name}`;
    }catch(error) {
        element.innerHTML = error;
    }
}

const findHero = async(id) => {
    const hero = heroes.find( hero => hero.id === id);
    if (!hero) 
        throw `No se encontro el heroe con el id ${id}`;
    return hero;
}