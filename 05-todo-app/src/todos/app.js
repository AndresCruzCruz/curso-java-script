import html from './app.html?raw'; // Se coloca el ?raw para que el archivo html se importe como texto plano directamente
import todoStore, { Filters } from '../store/todo.store.js';
import { renderTodos } from './use-cases/reder-todos.js';
import { renderPending } from './use-cases/render-pending.js';

const ElementIds = { // Se crea un objeto con los ids de los elementos del html que vamos a utilizar
    todoList: '.todo-list', // Hace referencia por el . al elemento con la clase todo-list
    newTodoInput: '#new-todo-input', // Hace referencia por el # al elemento con el id new-todo-input
    clearCompleted: '.clear-completed',
    todoFilters: '.filtro',
    pendingCount: '#pending-count'
}

export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() ); 
        renderTodos(ElementIds.todoList, todos);
        updatePendingCount();
    }

    const updatePendingCount = () => {
        renderPending(ElementIds.pendingCount);
    }

    (() => { // Funcion autoejecutable que se ejecuta cuando App() se llama
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

    // Referencias HTML
    const newDescriptionInput = document.querySelector( ElementIds.newTodoInput );
    const todoListUL = document.querySelector( ElementIds.todoList );
    const clearCompletedButton = document.querySelector( ElementIds.clearCompleted );
    const filtersLI = document.querySelectorAll( ElementIds.todoFilters );

    // Listeners
    newDescriptionInput.addEventListener('keyup', (event) => {
        if (event.keyCode !== 13) return; // Si la tecla presionada no es enter, no se hace nada
        if (event.target.value.trim().length === 0) {
            event.target.value = '';
            return;
         } // Si el valor del input esta vacio, no se hace nada
        todoStore.addTodo(event.target.value);
        displayTodos();
        event.target.value = '';
    });

    // todoListUL.addEventListener('click', (event) => {
    //     const element = event.target.closest('[data-id]');
    //     const idElement = element.getAttribute('data-id');
    //     todoStore.toggleTodo(idElement);
    //     displayTodos();
    // });

    todoListUL.addEventListener('click', (event) => {
        const element = event.target.closest('[data-id]');
        const idElement = element.getAttribute('data-id');
        if (event.target.className == 'destroy') {
            todoStore.deleteTodo(idElement);
        } else if (event.target.className == 'toggle') {
            todoStore.toggleTodo(idElement);
        }
        displayTodos();
    });

    clearCompletedButton.addEventListener('click', () => {
        todoStore.deleteTodoCompleted();
        displayTodos();
    });

    filtersLI.forEach( filter => {
        filter.addEventListener('click', (event) => {
            filtersLI.forEach( filter => filter.classList.remove('selected'));
            event.target.classList.add('selected');
            switch (event.target.text) {
                case 'Todos':
                    todoStore.setFilter(Filters.All);
                    break;
                case 'Pendientes':
                    todoStore.setFilter(Filters.Pending);
                    break;
                case 'Completados':
                    todoStore.setFilter(Filters.Completed);
                    break;
            }
            displayTodos();
        });
    });
} 