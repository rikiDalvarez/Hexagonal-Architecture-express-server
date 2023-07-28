import { Todo } from "../src/domain/Todo";

describe("Todo constructor", () => {
  it("should create a new Todo", () => {
    const todo = new Todo("test");

    expect(todo.text).toBe("test");
    expect(todo.completed).toBe(false);
  });
});
