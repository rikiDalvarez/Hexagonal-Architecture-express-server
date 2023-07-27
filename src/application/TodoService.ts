// application/todoService.ts
//this file should have one abstraction more and not communicate directly with mongodb
import { MongoDBRepository } from "../infrastructure/outputAdapter/mogodbRepository";
import { Request, Response } from "express";
import TodoModel from "../infrastructure/outputAdapter/mongodbModels";
import AddTodo from "../infrastructure/outputPort/AddTodo";
import DeleteTodo from "../infrastructure/outputPort/deleteTodo";

const todoRepository = new MongoDBRepository();

export const findAll = async (_req: Request, res: Response) => {
  try {
    const allTasks = await todoRepository.findAll();
    res.status(200).send({
      success: true,
      data: JSON.stringify(allTasks),
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: "Error showing all tasks",
    });
  }
};

export const createTodo = async (req: Request, res: Response) => {
  try {
    const todo = new TodoModel();
    var params = req.body;
    todo.text = params.text;
    const addTodo = new AddTodo(todoRepository);
    const newTodo = await addTodo.execute(todo.text);

    res.status(200).send({
      success: true,
      data: newTodo,
    });
  } catch (error) {
    if (params.title.trim() === "") {
      res.status(404).send({
        success: false,
        error: "Please enter a title.",
      });
    }
    res.status(500).send({
      success: false,
      error: "Error creating a task",
    });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  const id = req.params._id;
  const todoDeleteUseCase = new DeleteTodo(todoRepository);
  const todoDeleted = await todoDeleteUseCase.delete(id);
  res.status(200).send({
    success: true,
    message: "Task deleted successfully",
    data: todoDeleted,
  });
};
