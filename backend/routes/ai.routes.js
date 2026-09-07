import express from "express";
import { userMessage } from "../controllers/ai.controller.js";

const router = express.Router();

router.post("/chat", userMessage);

export default router;