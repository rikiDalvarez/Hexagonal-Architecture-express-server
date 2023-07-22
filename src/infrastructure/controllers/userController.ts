import { Request, Response } from "express";
import User from "../../domain/User";

export class UserController {
  constructor() {}
  async register(req: Request, res: Response) {
    const { id, username, name, email, password, role }: User = req.body;
    try {
      const user = {}; /* define model and database prob mongo */
      res.send(req.body.username + " registered");
    } catch (error) {
      console.log(error);
    }
  }
  async login(req: Request, res: Response) {
    res.send("user logged in");
  }
}
