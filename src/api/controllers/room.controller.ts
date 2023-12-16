import { Request, Response, NextFunction } from "express";
import roomService from "../services/room.service";

const createRoom = async (req: Request, res: Response, next: NextFunction) => {
  let { name, to, from, key } = req.body;
  next(await roomService.createRoom(name, to, from, key));
};

const deleteRoom = async (req: Request, res: Response, next: NextFunction) => {
  let { roomId, from, sign } = req.body;
  next(await roomService.deleteRoom(roomId, from, sign));
};

export default { createRoom, deleteRoom };
