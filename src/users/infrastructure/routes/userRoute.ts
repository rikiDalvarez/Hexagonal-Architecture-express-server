import express from "express";
import { UserController } from "../controllers/userController";

const userRouter = express.Router();

const userController = new UserController();

userRouter.get("/register", userController.register);

export { userRouter };
