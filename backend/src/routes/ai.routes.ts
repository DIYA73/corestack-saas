import { Router } from "express";
import { chatAI } from "../controllers/ai.controller";
import { protect } from "../middleware/auth.middleware";
import { requirePro } from "../middleware/plan.middleware";

const router = Router();

router.post("/chat", protect, requirePro, chatAI);

export default router;