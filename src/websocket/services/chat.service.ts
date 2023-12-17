import * as uws from "uWebSockets.js";
import * as jwt from "jsonwebtoken";
import jwtConfig from "../config/jwt.config";
import { Chat } from "../../entities/Chat";

const read = async (ws: uws.WebSocket<unknown>, token: string) => {
  try {
    let data = jwt.verify(token, jwtConfig.Key);
    if (typeof data === "string" || !data.id) {
      return { result: false };
    }
    let { id } = data;
    Chat.delete({ id })
      .then(() => {
        console.log(`Deleted chat ${id}`);
      })
      .catch(() => {});
    return { result: true };
  } catch (err) {
    return { result: false };
  }
};

export default { read };
