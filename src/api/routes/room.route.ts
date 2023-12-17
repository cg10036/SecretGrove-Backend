import { Router } from "express";

import roomController from "../controllers/room.controller";
import { validateBody } from "../validators/validator";
import {
  CreateRoomValidator,
  DeleteRoomValidator,
} from "../validators/room.validator";

const router = Router();

router.post("/", validateBody(CreateRoomValidator), roomController.createRoom);
router.delete(
  "/",
  validateBody(DeleteRoomValidator),
  roomController.deleteRoom
);

export default router;
