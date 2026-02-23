import { Request, Response } from "express";
import { prisma } from "../config/prisma";

export const chatAI = async (req: any, res: Response) => {
  try {
    const userId = req.user.id;
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message required" });
    }

    // fake AI response (no OpenAI needed)
    const reply = `🤖 AI Response to: "${message}" 
This is a demo AI system for SaaS portfolio.`;

    // add fake token usage
    await prisma.user.update({
      where: { id: userId },
      data: {
        tokensUsed: {
          increment: 10
        }
      }
    });

    res.json({
      success: true,
      reply,
      tokensUsed: 10
    });

  } catch (err) {
    res.status(500).json({ error: "AI error" });
  }
};