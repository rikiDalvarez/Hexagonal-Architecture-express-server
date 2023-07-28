import { Request, Response, NextFunction } from "express";

export const basicAuth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Basic")) {
    return res.status(401).send("Unauthorized");
  }

  const encodedCredentials = authHeader.split(" ")[1];
  const [username, password] = encodedCredentials.split(":");

  if (username !== "user" || password !== "1234") {
    return res.status(401).send("Unauthorized");
  }

  next();
};
