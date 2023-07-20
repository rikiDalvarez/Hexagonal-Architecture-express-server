import { Todo } from "../../core/Todo";
import { ITodoRepository } from "./interfaces/ITodoRepository";

export class TodoRepository implements ITodoRepository {
  private todos: Todo[];

  private nextId: number;

  constructor(filePath: string) {
    this.todos = [];

    this.nextId = 1;
    this.getTodos();
  }

  private getTodos(): void {}

  private saveTodos(): void {}

  private updateNextId(): void {}

  public getAllTodos(): Todo[] {
    return this.todos;
  }

  public getTodoById(id: number): Todo | undefined {
    return this.todos.find((todo) => todo._id === id);
  }

  public getNextId(): number {
    return this.nextId;
  }

  public saveTodo(todo: Todo): void {}

  public deleteTodoById(id: number): void {}
}
