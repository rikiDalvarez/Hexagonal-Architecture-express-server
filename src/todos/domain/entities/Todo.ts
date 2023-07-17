export default interface Todo {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  completed: boolean;
}
