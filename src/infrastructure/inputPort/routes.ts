//TodoApiAdapter
import express from "express";

import {
  createTodo,
  findAll,
  deleteTodo,
  updateTodo,
} from "../../application/TodoService";
import { basicAuth } from "../../backend/auth";

const router = express.Router();
router.use(basicAuth);
router.post("/new", createTodo);
router.delete("/delete/:_id", deleteTodo);
router.put("/complete/:_id", updateTodo);
router.get("/", findAll);

export default router;
