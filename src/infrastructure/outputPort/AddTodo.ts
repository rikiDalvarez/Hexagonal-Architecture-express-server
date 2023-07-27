import { Todo } from "../../domain/Todo";
import { TodoRepository } from "./TodoRepository";

export default class AddTodo {
  private todoRepository: TodoRepository;

  constructor(todoRepository: TodoRepository) {
    this.todoRepository = todoRepository;
  }

  async execute(text: string) {
    const newTodo = new Todo(text);
    await this.todoRepository.createTodo(newTodo);
    return newTodo;
  }
}
