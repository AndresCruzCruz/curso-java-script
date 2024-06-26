import { localhostUserToModel } from "../mappers/localhost-user.mapper";

/**
 * 
 * @param {Number} page
 * @returns {Promise<User[]>}
 */
export const loadUsersByPage = async(page = 1) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    return data.data.map( localhostUserToModel );
}