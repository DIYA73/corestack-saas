import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../config/prisma";

// ================= REGISTER =================
export const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

   const user = await prisma.user.create({
  data: {
    email,
    password: hashedPassword,
    role: "user",   // default
    plan: "free"
  }
});

    res.json({ message: "User created successfully" });

  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};


// ================= LOGIN =================
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid email" });
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // 🔥 IMPORTANT: include role + plan in token
    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
        plan: user.plan
      },
      process.env.JWT_SECRET as string,
      { expiresIn: "7d" }
    );

    res.json({
      id: user.id,
      email: user.email,
      role: user.role,
      plan: user.plan,
      token
    });

  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};