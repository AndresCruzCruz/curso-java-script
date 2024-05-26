import { Todo } from '../models/todo.model.js';
/**
 * 
 * @param {Todo} todo Es el todo que se va a renderizar 
 * @returns 
 */
export const createTodoHtml = (todo) => {
    if (!todo) {
        throw new Error('Se requiere un todo para crear el html');
    }
    const {done, description, id} = todo; // Se desestructura el todo para obtener los valores de done, description e id
    const todoHtml = `
        <div class="view">
            <input class="toggle" type="checkbox" ${done? 'checked' : ''}>
            <label>${description}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    `;
    const liEment = document.createElement('li');
    liEment.innerHTML = todoHtml;
    liEment.setAttribute('data-id', id)
    if (done)
        liEment.classList.add('completed');
    return liEment;
}