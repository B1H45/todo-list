function createProject(title) {
    let todos = new Array();

    function addTodo(todoItem) {
        todos.push(todoItem);
    }

    function getTodo(i) {
        return todos[i];
    }

    return { title, addTodo, getTodo };
}

export default createProject;