// inputAdapter/todoController.ts

import { Request, Response } from "express";
import { TodoService } from "../../application/TodoService";

export class TodoController {
  private todoService: TodoService;

  constructor(todoService: TodoService) {
    this.todoService = todoService;
    console.log(this);
  }

  async getAll(_req: Request, res: Response) {
    try {
      const todos = await this.todoService.findAll();
      console.log({ todos });
      res.json(todos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
