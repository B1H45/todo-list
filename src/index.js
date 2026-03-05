import "./styles.css";
import { compareAsc, format } from "date-fns";

import createTodoItem from "./todoItem.js";
import createTodoApp from "./todoApp.js";

let app = createTodoApp();

console.log(app.getTodo(0));

console.log("TEST");