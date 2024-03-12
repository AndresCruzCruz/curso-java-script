/**
 * 
 * @param {String} elementId 
 * @param {Todo} todos 
 */
export const renderTodos = ( elementId, todos = [] ) => {
    const todoList = document.getElementById(elementId);
    todoList.innerHTML = '';
    todos.forEach( todo => {
        const li = document.createElement('li');
        li.innerHTML = todo.text;
        todoList.appendChild(li);
    });
}