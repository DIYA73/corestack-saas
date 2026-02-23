import { Router } from "express";
import { createCheckout } from "../controllers/billing.controller";
import { protect } from "../middleware/auth.middleware";

const router = Router();

router.post("/checkout", protect, createCheckout);

export default router;