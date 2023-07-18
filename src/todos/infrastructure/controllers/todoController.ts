import { Request, Response } from "express";
import Todo from "../../domain/entities/Todo";

export class TodoController {
  constructor() {}
  async addTodo(req: Request, res: Response) {
    const { id, title, description, completed }: Todo = req.body;
    try {
      res.send(req.body.title + " added");
    } catch (error) {
      console.log(error);
    }
  }
  deleteTodo(req: Request, res: Response) {
    res.send("todoDeleted");
  }
}
