import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes";
import stripeRoutes from "./routes/stripe.routes";
import billingRoutes from "./routes/billing.routes";
import aiRoutes from "./routes/ai.routes";
import adminRoutes from "./routes/admin.routes";
import { errorHandler } from "./middleware/error.middleware";
import rateLimit from "express-rate-limit";
import morgan from "morgan";


dotenv.config();

const app = express();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);
app.use(cors());
app.use(express.json());
app.use(errorHandler);
app.use(morgan("dev"));

app.use("/api/auth", authRoutes);
app.use("/api/stripe", stripeRoutes);
app.use("/api/billing", billingRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("🚀 CoreStack SaaS API Running");
});

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log("🔥 Server running on " + PORT);
});