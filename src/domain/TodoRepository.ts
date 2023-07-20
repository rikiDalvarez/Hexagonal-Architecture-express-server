import { Todo } from "./Todo";

export interface TodoRepository {
  create(todo: Todo): Promise<Todo>;
  findAll(): Promise<Todo[]>;
  findById(id: string): Promise<Todo | null>;
  update(todo: Todo): Promise<Todo | null>;
  delete(id: string): Promise<boolean>;
}
