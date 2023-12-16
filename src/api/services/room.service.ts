import { DeleteRoom } from "../../entities/DeleteRoom";
import { Room } from "../../entities/Room";
import { HttpResponse } from "../helpers/response.helper";

const createRoom = async (name, to, from, key) => {
  let room = new Room();
  room.name = name;
  room.to = to;
  room.from = from;
  room.key = key;
  await room.save();
  return new HttpResponse(201, "");
};

const deleteRoom = async (roomId, from, sign) => {
  let deleteRoom = new DeleteRoom();
  deleteRoom.roomId = roomId;
  deleteRoom.from = from;
  deleteRoom.sign = sign;
  await deleteRoom.save();
  return new HttpResponse(204, "");
};

export default { createRoom, deleteRoom };
