import { Todo } from "../../domain/Todo";

export interface TodoRepository {
  findAll(): Promise<Todo[]>;
  // Add other methods for CRUD operations as needed.
}
