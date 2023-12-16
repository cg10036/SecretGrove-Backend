import { HttpResponse } from "../helpers/response.helper";
import { Chat } from "../../entities/Chat";
import { DeleteChat } from "../../entities/DeleteChat";
import websocket from "../../websocket";

const sendChat = async (roomId, message, from) => {
  let chat = new Chat();
  chat.roomId = roomId;
  chat.message = message;
  chat.from = from;
  chat = await chat.save();
  await websocket.publishChat(chat);
  return new HttpResponse(200, JSON.stringify(chat));
};

const deleteChat = async (roomId, chatId, sign) => {
  let deleteChat = new DeleteChat();
  deleteChat.roomId = roomId;
  deleteChat.chatId = chatId;
  deleteChat.sign = sign;
  deleteChat = await deleteChat.save();
  await websocket.publishDeleteChat(deleteChat);
  return new HttpResponse(200, JSON.stringify(deleteChat));
};

export default { sendChat, deleteChat };
