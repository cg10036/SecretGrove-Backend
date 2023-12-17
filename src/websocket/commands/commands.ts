import * as uws from "uWebSockets.js";
import pingCommand from "./ping.command";
import authCommand from "./auth.command";
import chatCommand from "./chat.command";

const handlers: ((
  ws: uws.WebSocket<unknown>,
  cmd: any,
  data: any
) => Promise<false | object>)[] = [pingCommand, authCommand, chatCommand];

export default async (ws: uws.WebSocket<unknown>, id, cmd, data) => {
  console.log(ws, id, cmd, data);
  try {
    for (let handler of handlers) {
      let result = await handler(ws, cmd, data);
      if (result === false) continue;
      return ws.send(JSON.stringify({ i: id, ...result }));
    }
  } catch (err) {
    console.log(err);
  }
  return;
};
