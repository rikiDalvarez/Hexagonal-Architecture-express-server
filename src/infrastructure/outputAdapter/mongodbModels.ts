import mongoose from "mongoose";
import { Todo } from "../../domain/Todo";

const Schema = mongoose.Schema;

const todoSchema = new Schema<Todo>({
  text: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

export default mongoose.model<Todo>("Todo", todoSchema);
