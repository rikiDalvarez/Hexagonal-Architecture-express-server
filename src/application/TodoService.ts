// application/todoService.ts

import { TodoRepository } from "../outputPorts/todoRepository";
import { Todo } from "../domain/Todo";

export class TodoService {
  private todoRepository: TodoRepository;

  constructor(todoRepository: TodoRepository) {
    this.todoRepository = todoRepository;
  }

  async getAllTodos(): Promise<Todo[]> {
    return this.todoRepository.findAll();
  }

  // Implement other use cases or services related to Todos here.
}
