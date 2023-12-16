import { HttpResponse } from "../helpers/response.helper";
import { Chat } from "../../entities/Chat";
import { DeleteChat } from "../../entities/DeleteChat";

const sendChat = async (roomId, message, from) => {
  let chat = new Chat();
  chat.roomId = roomId;
  chat.message = message;
  chat.from = from;
  await chat.save();
  return new HttpResponse(201, "");
};

const deleteChat = async (roomId, chatId, sign) => {
  let deleteChat = new DeleteChat();
  deleteChat.roomId = roomId;
  deleteChat.chatId = chatId;
  deleteChat.sign = sign;
  await deleteChat.save();
  return new HttpResponse(204, "");
};

export default { sendChat, deleteChat };
