import { User } from "../models/user";
import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state= {
    currentPage:0,
    users: [],
}

const loadNextPage = async() => {
    const users = await loadUsersByPage(state.currentPage + 1);
    if (users.length === 0) return; 
    state.currentPage += 1
    state.users = users
}

const loadPreviousPage = async() => {
    if (state.currentPage === 1) return;
    const users = await loadUsersByPage(state.currentPage - 1);
    if (users.length === 0) return; 
    state.currentPage -= 1
    state.users = users
}

const onUserChange = () => {
    throw new Error('Not implemented');
}

const reloadPage = async() => {
    throw new Error('Not implemented');
}

export default {
    state,
    loadNextPage,
    loadPreviousPage,
    onUserChange,
    reloadPage,
    /**
     * 
     * @returns {User[]}
     */
    getUsers: () => [...state.users], // Los objetos pasan por referencia, por lo que no se puede devolver el objeto directamente
    /**
     * 
     * @returns {Int}
     */
    getCurrentPage: () => state.currentPage, // Los primitivos se pasan por valor, por lo que no hay problema en devolverlo directamente
}