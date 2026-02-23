import { Router } from "express";
import { protect } from "../middleware/auth.middleware";
import { createCheckout } from "../controllers/stripe.controller";

const router = Router();

router.post("/checkout", protect, createCheckout);

export default router;