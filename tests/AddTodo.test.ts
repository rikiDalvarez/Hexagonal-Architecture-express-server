import { TodoRepository } from "../src/infrastructure/outputPort/TodoRepository";
import AddTodo from "../src/infrastructure/outputPort/addTodo";
import { Todo } from "../src/domain/Todo";

describe("AddTodo", () => {
  it("should add a new todo", async () => {
    // Arrange
    const todoRepositoryMock: TodoRepository = {
      createTodo: jest.fn(),
      findAll: jest.fn(),
      deleteTodo: jest.fn(),
      updateTodo: jest.fn(),
    };
    const addTodo = new AddTodo(todoRepositoryMock);
    const text = "Test todo text";

    // Act
    const newTodo = await addTodo.execute(text);

    // Assert
    expect(todoRepositoryMock.createTodo).toHaveBeenCalledTimes(1);
    expect(todoRepositoryMock.createTodo).toHaveBeenCalledWith(newTodo);
    expect(newTodo).toBeInstanceOf(Todo);
    expect(newTodo.text).toBe(text);
  });
});
