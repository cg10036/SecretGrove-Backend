import * as uws from "uWebSockets.js";
import chatController from "../controllers/chat.controller";

export default async (
  ws: uws.WebSocket<unknown>,
  cmd,
  data
): Promise<false | object> => {
  switch (cmd) {
    case "read":
      return chatController.read(ws, data);
  }
  return false;
};
