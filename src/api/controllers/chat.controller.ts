import { Request, Response, NextFunction } from "express";
import chatService from "../services/chat.service";

const sendChat = async (req: Request, res: Response, next: NextFunction) => {
  let { roomId, message, from } = req.body;
  next(await chatService.sendChat(roomId, message, from));
};

const deleteChat = async (req: Request, res: Response, next: NextFunction) => {
  let { roomId, chatId, sign } = req.body;
  next(await chatService.deleteChat(roomId, chatId, sign));
};

export default { sendChat, deleteChat };
