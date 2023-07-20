import express from "express";
import { TodoController } from "../../controllers/todoController";

const todoRouter = express.Router();

const todoController = new TodoController();

todoRouter.get("/", todoController.getTodos);
todoRouter.post("/todos", todoController.addTodo);
todoRouter.delete("/todos:id", todoController.deleteTodo);

export { todoRouter };
