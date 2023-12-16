import { Router } from "express";

import pingRoute from "./ping.route";
import chatRoute from "./chat.route";
import roomRoute from "./room.route";

const router = Router();

router.use("/ping", pingRoute);
router.use("/chat", chatRoute);
router.use("/room", roomRoute);

export default router;
