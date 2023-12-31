import * as uws from "uWebSockets.js";
import pingController from "../controllers/ping.controller";

export default async (
  ws: uws.WebSocket<unknown>,
  cmd,
  data
): Promise<false | object> => {
  switch (cmd) {
    case "ping":
      return pingController.ping(data);
  }
  return false;
};
