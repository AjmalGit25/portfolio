import express from "express";
import { userMessage } from "../controllers/aiController.js";

const router = express.Router();

router.post("/chat", userMessage);

export default router;