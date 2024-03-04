import bodyParser from "body-parser";
import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import { handler as defaultErrorHandler } from "./middleware/error/defaultErrorHandler";
import { ApiError, HttpStatusCode } from "./middleware/error/ApiError";
import { ManagerRoutes } from "./routes/manager/manager.routes";
import { TaskRoutes } from "./routes/tasks/tasks.routes";
import { ProjectRoutes } from "./routes/projects/projects.routes";

// Creating the app
const app: Application = express();

app.use(cors());
// Configuration ( Basic app settings ) / Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);
app.use(bodyParser.json());
app.use(
  morgan(
    "'Address => :remote-addr User => :remote-user Date/Time => :date[web] Method => :method URL => :url HTTP_Ver => :http-version Status_Code => :status Response_Time => :response-time[digits] Total_Time => :total-time[digits] User_Agent => :user-agent'"
  )
);

app.use("/test", (req, res) => {
  res.json({ message: "Server is healthy!" });
});

app.use("/api/manager", ManagerRoutes);
app.use("/api/tasks", TaskRoutes);
app.use("/api/project", ProjectRoutes);

// seedDatabase

// send back a 404 error for any unknown api request
app.use((req: Request, res: Response, next: NextFunction) => {
  throw new ApiError(HttpStatusCode.NOT_FOUND, "Not found");
});

// Error Handler
app.use(defaultErrorHandler);

export default app;
