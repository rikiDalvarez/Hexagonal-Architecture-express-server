import { Todo } from "../../domain/Todo";

export interface TodoRepository {
  findAll(): Promise<Todo[]>;
}
