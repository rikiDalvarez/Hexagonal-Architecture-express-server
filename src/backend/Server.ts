import { json, urlencoded } from "body-parser";
import cors from "cors";
import express, { Request, Response, NextFunction } from "express";
import helmet from "helmet";
import { userRouter } from "../users/infrastructure/routes/userRoute";
import { todoRouter } from "../todos/infrastructure/routes/todoRoute";

export class Server {
  private readonly app: express.Express;
  private readonly port: string;

  constructor(port: string) {
    this.port = port;
    this.app = express();
    this.setUpMiddlewares();
    this.setUpRoutes();
  }

  private setUpMiddlewares(): void {
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));

    this.app.use((req: Request, res: Response, next: NextFunction) => {
      res.setHeader("Cache-Control", "no-cache");
      next();
    });
  }

  private setUpRoutes(): void {
    const checkUserData = (req: Request, res: Response, next: NextFunction) => {
      const { username, password } = req.body;
      if (!username || !password) {
        res.status(401).send("Unauthorized");
      }
      next();
    };
    this.app.use(todoRouter);
    this.app.use(userRouter);
    // this.app.use(/* todoRouter */);
  }

  async listen(): Promise<void> {
    await new Promise<void>((resolve) => {
      this.app.listen(this.port, () => {
        // eslint-disable-next-line no-console
        console.log(
          `✅ Backend App is running at http://localhost:${
            this.port
          } in ${this.app.get("env")} mode`
        );
        // eslint-disable-next-line no-console
        console.log("✋ Press CTRL-C to stop\n");

        resolve();
      });
    });
  }
}
