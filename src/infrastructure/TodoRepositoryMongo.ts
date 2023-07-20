import mongoose, { Schema, Document } from "mongoose";
import { Todo } from "../domain/Todo";
import { TodoRepository } from "../domain/TodoRepository";
import { getDatabase } from "./mongoDb";

interface TodoDocument extends Document {
  id: string;
  text: string;
  completed: boolean;
}

const todoSchema = new Schema<TodoDocument>({
  id: { type: String, required: true },
  text: { type: String, required: true },
  completed: { type: Boolean, required: true },
});

const TodoModel = mongoose.model<TodoDocument>("Todo", todoSchema);

export class TodoRepositoryMongo implements TodoRepository {
  async create(todo: Todo): Promise<Todo> {
    const todoModel = new TodoModel(todo);
    return await todoModel.save();
  }

  async findAll(): Promise<Todo[]> {
    return await TodoModel.find({});
  }

  async findById(id: string): Promise<Todo | null> {
    return await TodoModel.findOne({ id });
  }

  async update(todo: Todo): Promise<Todo | null> {
    const updatedTodo = await TodoModel.findOneAndUpdate(
      { id: todo.id },
      todo,
      { new: true }
    );
    return updatedTodo ? updatedTodo.toObject() : null;
  }

  async delete(id: string): Promise<boolean> {
    const result = await TodoModel.deleteOne({ id });
    return result.deletedCount === 1;
  }
}
