import * as express from "express";
import * as cors from "cors";
import { AppDataSource } from "./data-source";
import routes from "./api/routes/routes";
import { errorHandler } from "./api/helpers/response.helper";
import exceptionHelper from "./api/helpers/exception.helper";
exceptionHelper();

AppDataSource.initialize().then(() => {
  const app = express();
  app.use(express.json());
  app.use(cors());

  app.use(routes);

  app.use(errorHandler);
  app.listen(3000, () => console.log("Server started on port 3000"));
});
