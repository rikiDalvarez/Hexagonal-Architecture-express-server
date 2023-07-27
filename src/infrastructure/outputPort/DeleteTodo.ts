import { TodoRepository } from "./TodoRepository";

export default class DeleteTodo {
  private todoRepository: TodoRepository;

  constructor(todoRepository: TodoRepository) {
    this.todoRepository = todoRepository;
  }

  async delete(_id: string) {
    const deletedTodo = await this.todoRepository.deleteTodo(_id);
    return deletedTodo;
  }
}
