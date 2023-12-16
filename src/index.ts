import * as express from "express";
import * as cors from "cors";
import { AppDataSource } from "./data-source";
import routes from "./api/routes/routes";
import websocket from "./websocket";
import {
  errorHandler,
  addCustomAsyncErrorHandler,
} from "./api/helpers/exception.helper";
addCustomAsyncErrorHandler();

AppDataSource.initialize().then(() => {
  const app = express();
  app.use(express.json());
  app.use(cors());

  app.use(routes);

  app.use(errorHandler);
  app.listen(3000, () => console.log("API Server started on port 3000"));
  websocket.listen();
});
