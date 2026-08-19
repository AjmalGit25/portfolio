import express from "express";
import {setVisitor, getVisitor} from "../controllers/visitor.controller.js";

const router = express.Router();

router.post("/", setVisitor);
router.get("/", getVisitor);

export default router;