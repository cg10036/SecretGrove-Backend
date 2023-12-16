import * as uws from "uWebSockets.js";
import authController from "../controllers/auth.controller";

export default async (
  ws: uws.WebSocket<unknown>,
  cmd,
  data
): Promise<false | object> => {
  switch (cmd) {
    case "login":
      return authController.login(ws, data);
  }
  return false;
};
