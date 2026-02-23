import { Request, Response, NextFunction } from "express";

export const requirePro = (req: any, res: Response, next: NextFunction) => {
  if (req.user.plan !== "pro") {
    return res.status(403).json({
      success: false,
      message: "Pro plan required"
    });
  }

  next();
};