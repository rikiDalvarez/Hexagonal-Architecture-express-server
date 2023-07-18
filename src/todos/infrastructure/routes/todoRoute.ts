import express from "express";
import { TodoController } from "../controllers/todoController";

const userRouter = express.Router();

const todoController = new TodoController();

userRouter.post("/todos", todoController.addTodo);
userRouter.delete("/todos:id", todoController.deleteTodo);

export { userRouter };
