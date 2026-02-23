import { Router } from "express";
import { prisma } from "../config/prisma";
import { protect } from "../middleware/auth.middleware";
import { isAdmin } from "../middleware/admin.middleware";

const router = Router();


// 🔥 ADMIN USERS LIST (already you have probably)
router.get("/users", protect, isAdmin, async (req, res) => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      role: true,
      plan: true
    }
  });

  res.json(users);
});


// 🔥 ADMIN ANALYTICS (NEW ELITE ENDPOINT)
router.get("/analytics", protect, isAdmin, async (req, res) => {
  try {
    const usersCount = await prisma.user.count();

    const proCount = await prisma.user.count({
      where: { plan: "pro" }
    });

    const totalUsage = await prisma.user.aggregate({
      _sum: { tokensUsed: true }
    });

    res.json({
      totalUsers: usersCount,
      proUsers: proCount,
      totalTokensUsed: totalUsage._sum.tokensUsed || 0
    });

  } catch (err) {
    res.status(500).json({ error: "Analytics error" });
  }
});

export default router;