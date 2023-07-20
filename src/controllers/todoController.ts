import { Request, Response } from "express";
import Todo from "../todos/domain/entities/Todo";

export class TodoController {
  constructor() {}
  async getTodos(req: Request, res: Response) {
    try {
      res.send("todos");
    } catch (error) {
      console.log(error);
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
