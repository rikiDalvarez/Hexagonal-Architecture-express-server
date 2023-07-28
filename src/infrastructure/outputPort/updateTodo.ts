import { TodoRepository } from "./TodoRepository";

export default class UpdateTodo {
  private todoRepository: TodoRepository;

  constructor(taskRepository: TodoRepository) {
    this.todoRepository = taskRepository;
  }

  async complete(_id: string) {
    const complete = await this.todoRepository.updateTodo(_id);
    return complete.text;
  }
}
