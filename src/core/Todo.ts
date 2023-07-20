export default interface TodoProps {
  _id?: number;
  title: string;
  description: string;
  completed: boolean;
}

export class Todo {
  private readonly _id?: number;
  public title: string;
  public description: string;
  public completed: boolean;

  constructor(props: TodoProps) {
    this._id = props._id;
    this.title = props.title;
    this.description = props.description;
    this.completed = props.completed;
  }
}
