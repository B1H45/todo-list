function createTodoItem(title, description, dueDate, priority) {
    let completed = false;

    const toggleCompleted = () => {
        completed = !completed;
    }

    const getCompleted = () => {
        return completed;
    }

    return { title, description, dueDate, priority, toggleCompleted, getCompleted};
}