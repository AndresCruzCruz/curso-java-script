import { Todo } from "../todos/models/todo.model";

const Filters = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pending'
}
const state = {
    todos: [
        new Todo('Prieda del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo'),
        new Todo('Piedra del poder'),
        new Todo('Piedra del campo'),
    ],
    filter: Filters.All,
}

const initStore = () => {
    console.log(state);
    console.log('Store initialized');
}

const loadStore = () => {
   throw new Error('Not implemented');
}

const getTodos = ( filter = Filters.All ) => {
    switch (filter) {
        case Filters.All:
            return [...state.todos]; // Se usa el spread operator para crear una copia del arreglo
        case Filters.Completed:
            return state.todos.filter(todo => todo.done); // Se barre el arreglo y se filtran los que estén completados
        case Filters.Pending:
            return state.todos.filter(todo => !todo.done); // Se barre el arreglo y se filtran los que estén pendientes;
    }

}

const addTodo = (description) => {
    if (!description) {
        throw new Error('Description is required');
    }
    state.todos.push(new Todo (description));
}

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
}

const deleteTodo = (idTodo) => {
    if (!idTodo) {
        throw new Error('Id is required');
    }
    state.todos = state.todos.filter(todo => todo.id !== idTodo);
}

const deleteTodoCompleted = () => { 
    state.todos = state.todos.filter(todo => !todo.done);
}

const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;
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