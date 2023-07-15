class User {
  private readonly id: string;
  private readonly name: string;
  private readonly email: string;
  private readonly password: string;

  constructor(name: string, id: string, email: string, password: string) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.password = password;
  }

  sayHello(): string {
    return `Hello, I am ${this.name}`;
  }

  toPrimitive(): { name: string } {
    return { name: this.name };
  }
}

export default User;
