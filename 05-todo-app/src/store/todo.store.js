import { Todo } from "../todos/models/todo.model";

export const Filters = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pending'
}
const state = {
    todos: [
        new Todo('Prieda del alma'),
        new Todo('Piedra del espacio'),
        new Todo('Piedra del tiempo'),
        new Todo('Piedra del poder'),
        new Todo('Piedra del campo'),
    ],
    filter: Filters.All,
}

const initStore = () => {
    loadStore();
    console.log('Store initialized');
}

const loadStore = () => {
//    throw new Error('Not implemented'); // Esto se hace para que el método no esté implementado y se pueda ver en la consola
    if (!localStorage.getItem('state')) return;
    const {todos = [], filter = Filters.All} = JSON.parse(localStorage.getItem('state'));
    state.todos = todos;
    state.filter = filter;
}

const saveStateToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(state)); // Convertimos el objeto state a un string y lo guardamos en el local storage
}

/**
 * 
 * @param {string} filter Filtro con el cual se van a filtrar los todos 
 * @returns {Todo[]} Copia de los todos que cumplen con el filtro
 */
const getTodos = ( filter = Filters.All ) => {
    switch (filter) {
        case Filters.All:
            return [...state.todos]; // Se usa el spread operator para crear una copia del arreglo ya que si lo ponemos directo se puede modificar el arreglo original
        case Filters.Completed:
            return state.todos.filter(todo => todo.done); // Se barre el arreglo y se filtran los que estén completados
        case Filters.Pending:
            return state.todos.filter(todo => !todo.done); // Se barre el arreglo y se filtran los que estén pendientes;
        default:
            throw new Error(`Opcion no permitida ${ filter }`);
    }
}

/**
 * 
 * @param {string} description Descripcion con la cual el todo se va a crear 
 */
const addTodo = (description) => {
    if (!description) {
        throw new Error('Description is required');
    }
    state.todos.push(new Todo(description)); // Se agrega un nuevo todo al arreglo
    saveStateToLocalStorage();
}

/**
 * 
 * @param {string} idTodo Es el ID del todo que se va a cambiar de estado 
 */
const toggleTodo = (idTodo) => {
    if (!idTodo) {
        throw new Error('Id is required');
    }
    state.todos = state.todos.map(todo => { // Se usa el método map para recorrer el arreglo y modificar el valor de done
        if (todo.id === idTodo) {
            todo.done = !todo.done;
        }
        return todo;
    });
    saveStateToLocalStorage();
}

/**
 * 
 * @param {string} idTodo Es el ID del todo que se va a eliminar 
 */
const deleteTodo = (idTodo) => {
    if (!idTodo) {
        throw new Error('Id is required');
    }
    state.todos = state.todos.filter(todo => todo.id !== idTodo);
    saveStateToLocalStorage();
}

const deleteTodoCompleted = () => { 
    state.todos = state.todos.filter(todo => !todo.done);
    saveStateToLocalStorage();
}

const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;
    saveStateToLocalStorage();
}

const getCurrentFilter = () => {
    return state.filter;
}

export default {
    initStore,
    loadStore,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteTodoCompleted,
    setFilter,
    getCurrentFilter,
    getTodos,
}