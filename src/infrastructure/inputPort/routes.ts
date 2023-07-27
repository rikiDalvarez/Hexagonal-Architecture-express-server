import express from "express";
import { createTodo, findAll } from "../../application/TodoService";
// import { basicAuth } from "./auth";

const router = express.Router();

// router.use(basicAuth);

router.post("/new", createTodo);
// router.delete("/delete/:_id", deleteTask);
// router.put("/complete/:_id", completeTask);
router.get("/", findAll);
// router.get("/:_id", findById);

export default router;
