import { TodoRepository } from "../src/infrastructure/outputPort/TodoRepository";
import updateTodo from "../src/infrastructure/outputPort/updateTodo";
import { Todo } from "../src/domain/Todo";

describe("UpdateTodo", () => {
  it("should delete a todo", async () => {
    // Arrange
    const todoRepositoryMock: TodoRepository = {
      createTodo: jest.fn(),
      findAll: jest.fn(),
      deleteTodo: jest.fn(),
      updateTodo: jest
        .fn()
        .mockResolvedValue({ _id: "2", text: "test", completed: true }),
    };
    const updateTodoObject = new updateTodo(todoRepositoryMock);
    const id = "2";

    // Act
    const updatedTodo = await updateTodoObject.complete(id);
    console.log(updatedTodo);

    // Assert
    expect(todoRepositoryMock.updateTodo).toHaveBeenCalledTimes(1);
    expect(todoRepositoryMock.updateTodo).toHaveBeenCalledWith(id);
  });
});
