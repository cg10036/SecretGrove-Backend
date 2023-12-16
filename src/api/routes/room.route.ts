import { Router } from "express";

import roomController from "../controllers/room.controller";

const router = Router();

router.post("/", roomController.createRoom);
router.delete("/", roomController.deleteRoom);

export default router;
