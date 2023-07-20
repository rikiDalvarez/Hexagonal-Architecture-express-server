import { v4 as uuidv4 } from "uuid";

import { TodoDTO } from "./todoDTO";
import { TodoRepository } from "../domain/TodoRepository";
import { Todo } from "../domain/Todo";

export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  async createTodo(todoDTO: TodoDTO): Promise<Todo> {
    const todo: Todo = {
      id: uuidv4(),
      text: todoDTO.text,
      completed: todoDTO.completed,
    };
    return this.todoRepository.create(todo);
  }

  async getAllTodos(): Promise<Todo[]> {
    return this.todoRepository.findAll();
  }

  async getTodoById(id: string): Promise<Todo | null> {
    return this.todoRepository.findById(id);
  }

  async updateTodo(id: string, todoDTO: TodoDTO): Promise<Todo | null> {
    const existingTodo = await this.todoRepository.findById(id);
    if (!existingTodo) return null;

    const updatedTodo: Todo = {
      id: existingTodo.id,
      text: todoDTO.text || existingTodo.text,
      completed: todoDTO.completed || existingTodo.completed,
    };

    return this.todoRepository.update(updatedTodo);
  }

  async deleteTodo(id: string): Promise<boolean> {
    return this.todoRepository.delete(id);
  }
}
