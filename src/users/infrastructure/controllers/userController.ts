import { Request, Response } from "express";

export class UserController {
  constructor() {}
  run(req: Request, res: Response) {
    res.send("Hello World!");
  }
}
