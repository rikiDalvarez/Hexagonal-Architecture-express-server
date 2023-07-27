import { TodoRepository } from "../outputPort/TodoRepository";
import TodoModel from "./mongodbModels";
import { Todo } from "../../domain/Todo";

export class MongoDBRepository implements TodoRepository {
  async findAll(): Promise<Todo[]> {
    const todos = await TodoModel.find();
    return todos;
  }
  async createTodo(todo: Todo): Promise<Todo> {
    const newTodo = await TodoModel.create(todo);
    return newTodo;
  }
}
