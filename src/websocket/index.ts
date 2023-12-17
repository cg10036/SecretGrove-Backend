import * as uws from "uWebSockets.js";
import * as jwt from "jsonwebtoken";
import cmdHandler from "./commands/commands";
import { Chat } from "../entities/Chat";
import { DeleteChat } from "../entities/DeleteChat";
import { Room } from "../entities/Room";
import { DeleteRoom } from "../entities/DeleteRoom";

import jwtConfig from "./config/jwt.config";

let textDecoder = new TextDecoder();
const app = uws.App().ws("/*", {
  message: (ws, message) => {
    let json: { i: any; c: string; d: any };
    try {
      json = JSON.parse(textDecoder.decode(message));
      if (!json.i || typeof json.c !== "string")
        throw new Error("Invalid command");
    } catch {
      // invalid json or command
      console.log("Invalid command");
      return;
    }
    cmdHandler(ws, json.i, json.c, json.d);
  },
});

const publishChat = async (chat: Chat) => {
  let room = await Room.findOneBy({ id: chat.roomId });
  console.log(chat);
  console.log(room);
  if (!room) return;
  let token = jwt.sign({ id: chat.id }, jwtConfig.Key, { expiresIn: "1m" });
  [room.from, room.to]
    .filter((pubkey) => pubkey !== chat.from)
    .forEach((pubkey) => {
      console.log(pubkey);
      app.publish(pubkey, JSON.stringify({ c: "chat", d: { chat, token } }));
    });
};

const publishDeleteChat = async (delChat: DeleteChat) => {
  let room = await Room.findOneBy({ id: delChat.roomId });
  if (!room) return;
  [room.from, room.to].forEach((pubkey) => {
    app.publish(pubkey, JSON.stringify({ c: "del-chat", d: delChat }));
  });
};

const publishRoom = async (room: Room) => {
  app.publish(room.to, JSON.stringify({ c: "room", d: room }));
};

const publishDeleteRoom = async (delRoom: DeleteRoom) => {
  let room = await Room.findOneBy({ id: delRoom.roomId });
  [room.to, room.from].forEach((pubkey) => {
    app.publish(pubkey, JSON.stringify({ c: "del-room", d: delRoom }));
  });
};

const listen = () => {
  app.listen(3001, (listenSocket) => {
    if (!listenSocket) throw new Error("Failed to listen websocket");
    console.log("Websocket Server started on port 3001");
  });
};

export default {
  listen,
  publishChat,
  publishDeleteChat,
  publishRoom,
  publishDeleteRoom,
};
