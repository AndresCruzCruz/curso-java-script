import { createTodoHtml } from "./";

let element;

/**
 * 
 * @param {String} elementId El id del elemento donde se va a renderizar la lista de todos
 * @param {Todo} todos E llistado de todos que se va a renderizar
 */
export const renderTodos = ( elementId, todos = [] ) => {
    if (!element) {
        element = document.querySelector(elementId);
    }   
    if (!element) {
        throw new Error(`Elemento con id ${elementId} no encontrado`);
    }
    element.innerHTML = '';
    todos.forEach ( todo => {
        element.append(createTodoHtml(todo));
    });
}