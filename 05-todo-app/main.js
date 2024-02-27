import './style.css'
import {App} from './src/todos/app.js'
import todoStore from './src/store/todo.store.js'

todoStore.initStore();
App('#app'); // Se coloca # para indicar que es un id de un elemento HTML