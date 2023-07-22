export default interface User {
  id: string;
  username: string;
  name: string;
  email: string;
  password: string;
  role: "user" | "admin" | undefined;
}
