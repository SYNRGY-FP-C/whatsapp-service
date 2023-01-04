import express from "express";

import messageController from "../controllers/message.controller";
import { isAuthenticated } from "../middlewares/auth.middleware";

const router = express.Router();

router.post("/messages", isAuthenticated, messageController.sendMessage);

export default router;
