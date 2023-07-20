import express from "express";
import { UserController } from "../../controllers/userController";

const userRouter = express.Router();

const userController = new UserController();

userRouter.post("/register", userController.register);
userRouter.get("/login", userController.login);

export { userRouter };
