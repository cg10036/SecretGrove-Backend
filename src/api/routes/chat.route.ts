import { Router } from "express";

import chatController from "../controllers/chat.controller";

const router = Router();

router.post("/", chatController.sendChat);
router.delete("/", chatController.deleteChat);

export default router;
