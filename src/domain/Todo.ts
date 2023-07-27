export class Todo {
  _id: string | undefined;
  text: string;
  completed: boolean;

  constructor(text: string) {
    this.text = text;
    this.completed = false;
  }
}
