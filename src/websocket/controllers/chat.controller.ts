import * as uws from "uWebSockets.js";
import chatService from "../services/chat.service";

const read = (ws: uws.WebSocket<unknown>, data) => {
  let { token } = data;
  return chatService.read(ws, token);
};

export default { read };
