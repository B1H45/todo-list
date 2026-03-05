import createProject from "./project.js";
import createTodoItem from "./todoItem.js";

function createTodoApp() {
    let projects = new Array();
    let activeProject;

    function setup() {
        projects.push(createProject("Default"));

        for (let i = 0; i < 5; i++) {
            projects[0].addTodo(createTodoItem("Thing", "IDK", new Date(), 1));
        }
        activeProject = projects[0];
    }

    setup();

    function getTodo(i) {
        return activeProject.getTodo(i);
    }

    return { getTodo }

}

export default createTodoApp;