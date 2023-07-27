// application/todoService.ts
import { TodoRepository } from "../infrastructure/outputPort/TodoRepository";
import { Todo } from "../domain/Todo";

export class TodoService {
  private todoRepository: TodoRepository;

  constructor(todoRepository: TodoRepository) {
    this.todoRepository = todoRepository;
    console.log({ todoRepository });
  }

  public async findAll(): Promise<Todo[]> {
    const todos = await this.todoRepository.findAll();
    return todos;
  }

  // Implement other use cases or services related to Todos here.
}
