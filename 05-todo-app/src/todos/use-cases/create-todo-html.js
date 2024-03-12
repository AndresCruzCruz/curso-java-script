export const createTodoHtml = (todo) => {
    if (!todo) {
        throw new Error('Se requiere un todo para crear el html');
    }
    const todoHtml = document.createElement('div');
    todoHtml.innerHTML = `
        <div class="todo">
            <input type="checkbox" ${todo.completed ? 'checked' : ''} />
            <span>${todo.text}</span>
            <button>Eliminar</button>
        </div>
    `;
    return todoHtml;
}
