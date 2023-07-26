import mongoose from "mongoose";
import { Todo } from "../../domain/Todo";

const Schema = mongoose.Schema;

const todoSchema = new Schema<Todo>({
  id: String,
  text: String,
  completed: String,
});

export default mongoose.model<Todo>("Todo", todoSchema);
