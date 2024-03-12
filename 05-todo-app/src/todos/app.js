import html from './app.html?raw'; // Se coloca el ?raw para que el archivo html se importe como texto plano directamente
import todoStore from '../store/todo.store.js';
import { renderTodos } from './use-cases/reder-todos.js';

const ElementIds = {
    todoInput: 'todoInput',
    todoList: 'todoList',
    todoFilter: 'todoFilter'
}

export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() ); 
        renderTodos(ElementIds.todoList, todos);
    }

    (() => { // Funcion autoejecutable que se ejecuta cuando App() se llama
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();
}