import { Request, Response } from "express";

export class UserController {
  constructor() {}
  register(req: Request, res: Response) {
    res.send("user registered");
  }
}
