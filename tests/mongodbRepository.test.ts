import e from "express";
import { MongoDBRepository } from "../src/infrastructure/outputAdapter/mogodbRepository";
import mongodbModels from "../src/infrastructure/outputAdapter/mongodbModels";
// Mock TodoModel

describe("MongoDBRepository", () => {
  const mockTodo = { text: "test", completed: false };

  it("should create a new Todo", async () => {
    MongoDBRepository.prototype.createTodo = jest
      .fn()
      .mockResolvedValue(mockTodo);

    const mongoDBRepository = new MongoDBRepository();
    const todo = await mongoDBRepository.createTodo({
      _id: "1",
      text: "test",
      completed: false,
    });

    expect(todo).toEqual(mockTodo);
  });

  it("should find all todos", async () => {
    MongoDBRepository.prototype.findAll = jest.fn().mockResolvedValue(mockTodo);

    const mongoDBRepository = new MongoDBRepository();
    const todo = await mongoDBRepository.findAll();

    expect(todo).toEqual(mockTodo);
  });

  it("should delete a todo", async () => {
    MongoDBRepository.prototype.deleteTodo = jest
      .fn()
      .mockResolvedValue(mockTodo);

    const mongoDBRepository = new MongoDBRepository();
    const todo = await mongoDBRepository.deleteTodo("1");

    expect(todo).toEqual(mockTodo);
  });
});
