import "dotenv/config";
import config from "../../config/config";
import { json, urlencoded } from "body-parser";
import cors from "cors";
import express, { Request, Response, NextFunction } from "express";
import helmet from "helmet";
import { connectDatabase } from "../infrastructure/mongoDb";
import router from "../infrastructure/inputPort/routes";

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
    /*
    console.log("entered")
    const checkUserData = (req: Request, res: Response, next: NextFunction) => {
      console.log(req)
      const { username, password } = req.body;
      if (!username || !password) {
        res.status(401).send("Unauthorized");
      }
      next();
    };
    */
    this.app.use("/api", router);
  }

  async listen(): Promise<void> {
    await connectDatabase(config.MONGO_URI, config.DATABASE);
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
