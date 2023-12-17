import { Router } from "express";

import chatController from "../controllers/chat.controller";
import { validateBody } from "../validators/validator";
import {
  DeleteChatValidator,
  SendChatValidator,
} from "../validators/chat.validator";

const router = Router();

router.post("/", validateBody(SendChatValidator), chatController.sendChat);
router.delete(
  "/",
  validateBody(DeleteChatValidator),
  chatController.deleteChat
);

export default router;
