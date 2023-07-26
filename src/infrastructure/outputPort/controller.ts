import Todo from "../outputAdapter/mongodbRepository";
import { Request, Response } from "express";

export class TodoController {
  async getAll(_req: Request, res: Response) {
    try {
      const response = await Todo.find();
      res.send(response);
    } catch (error) {}
  }
}
