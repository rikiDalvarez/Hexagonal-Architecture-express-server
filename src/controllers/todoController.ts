import { Request, Response } from "express";
import Todo from "../core/Todo";
import { TodoService } from "../application/todoSerivce";
import { TodoRepositoryMongo } from "../infrastructure/TodoRepositoryMongo";

const todoRepository = new TodoRepositoryMongo();
const todoService = new TodoService(todoRepository);

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
  async postTodos(req: Request, res: Response) {
    try {
      const todoDTO = req.body;
      const createdTodo = await todoService.create(todoDTO);
      res.json(createdTodo);
    } catch (error) {
      res.status(500).json({ error: "Failed to create todo" });
    }
  }
  async addTodo(req: Request, res: Response) {
    const { _id, title, description, completed }: Todo = req.body;
    try {
      res.send(req.body.title + " added");
    } catch (error) {
      console.log(error);
    }
  }
  async deleteTodo(req: Request, res: Response) {
    res.send("todoDeleted");
  }
}
