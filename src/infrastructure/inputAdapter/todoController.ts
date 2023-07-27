// inputAdapter/todoController.ts

import { Request, Response } from "express";
import { TodoService } from "../../application/TodoService";
import TodoModel from "../outputAdapter/mongodbModels";
import { Todo } from "../../domain/Todo";

export class TodoController {
  private todoService: TodoService;

  constructor(todoService: TodoService) {
    this.todoService = todoService;
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

  // async getAll(req: Request, res: Response) {
  //   try {
  //     const todos = await TodoModel.find();
  //     res.send(todos);
  //   } catch (error) {
  //     console.log(error);
  //     res.json(error);
  //   }
  // }
}
