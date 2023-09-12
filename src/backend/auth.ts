
import { Request, Response, NextFunction } from "express";

export const basicAuth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Basic ")) {
    console.log("no usr pass");
    return res.status(401).send("Unauthorized");
  }

  const encodedCredentials = authHeader.substring(6);
 
  const decodedCredentials = Buffer.from(encodedCredentials, "base64").toString("utf-8");
 
  const [username, password] = decodedCredentials.split(":");


  if (username !== "user" || password !== "1234") {
    console.log("no correct credentials");
    return res.status(401).send("Unauthorized");
  }

  next();
};
