import { TodoRepository } from "../src/infrastructure/outputPort/TodoRepository";
import DeleteTodo from "../src/infrastructure/outputPort/DeleteTodo";
import { Todo } from "../src/domain/Todo";

describe("DeleteTodo", () => {
  it("should delete a todo", async () => {
    // Arrange
    const todoRepositoryMock: TodoRepository = {
      createTodo: jest.fn(),
      findAll: jest.fn(),
      deleteTodo: jest.fn(),
      updateTodo: jest.fn(),
    };
    const deleteTodoObject = new DeleteTodo(todoRepositoryMock);
    const id = "2";

    // Act
    const deleteTodo = await deleteTodoObject.delete(id);

    // Assert
    expect(todoRepositoryMock.deleteTodo).toHaveBeenCalledTimes(1);
    expect(todoRepositoryMock.deleteTodo).toHaveBeenCalledWith(id);
    expect(deleteTodo).toEqual(undefined);
  });
});
