import { DeleteRoom } from "../../entities/DeleteRoom";
import { Room } from "../../entities/Room";
import websocket from "../../websocket";
import { HttpResponse } from "../helpers/response.helper";

const createRoom = async (name, to, from, key) => {
  let room = new Room();
  room.name = name;
  room.to = to;
  room.from = from;
  room.key = key;
  room = await room.save();
  await websocket.publishRoom(room);
  console.log(room);
  return new HttpResponse(200, JSON.stringify(room));
};

const deleteRoom = async (roomId, from, sign) => {
  let deleteRoom = new DeleteRoom();
  deleteRoom.roomId = roomId;
  deleteRoom.from = from;
  deleteRoom.sign = sign;
  deleteRoom = await deleteRoom.save();
  await websocket.publishDeleteRoom(deleteRoom);
  return new HttpResponse(200, deleteRoom);
};

export default { createRoom, deleteRoom };
