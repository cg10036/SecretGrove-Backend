import * as express from "express";
import * as cors from "cors";
import { AppDataSource } from "./data-source";
import routes from "./api/routes/routes";
import { errorHandler } from "./api/helpers/response.helper";
import exceptionHelper from "./api/helpers/exception.helper";
exceptionHelper();

import * as uws from "uWebSockets.js";
import cmdHandler from "./websocket/commands/commands";

AppDataSource.initialize().then(() => {
  const app = express();
  app.use(express.json());
  app.use(cors());

  app.use(routes);

  app.use(errorHandler);
  app.listen(3000, () => console.log("API Server started on port 3000"));
});

let textDecoder = new TextDecoder();
uws
  .App()
  .ws("/*", {
    message: (ws, message) => {
      let json: { i: any; c: string; d: any };
      try {
        json = JSON.parse(textDecoder.decode(message));
        if (!json.i || typeof json.c !== "string")
          throw new Error("Invalid command");
      } catch {
        // invalid json or command
        return;
      }
      cmdHandler(ws, json.i, json.c, json.d);
    },
  })
  .listen(3001, (listenSocket) => {
    if (!listenSocket) throw new Error("Failed to listen websocket");
    console.log("Websocket Server started on port 3001");
  });
