import { Request, Response } from "express";
import { TodoService } from "../../application/todoSerivce";
import { TodoRepositoryMongo } from "../TodoRepositoryMongo";

const todoRepository = new TodoRepositoryMongo();
const todoService = new TodoService(todoRepository);

//todo controller implmentes todoController interface

export class TodoController {
  constructor() {}
  async getTodos(req: Request, res: Response) {
    try {
      const todos = await todoService.getAllTodos();
      res.json(todos);
    } catch (error) {
      res.status(500).json({ error: "Failed to get todos" });
    }
  }
  async addTodo(req: Request, res: Response) {
    try {
      const todoDTO = req.body;
      const createdTodo = await todoService.create(todoDTO);
      res.json(createdTodo);
    } catch (error) {
      res.status(500).json({ error: "Failed to create todo" });
    }
  }

  async deleteTodo(req: Request, res: Response) {
    try {
    } catch (error) {}
  }
}
