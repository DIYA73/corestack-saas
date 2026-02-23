import Stripe from "stripe";
import { prisma } from "../config/prisma";

const stripe = new Stripe(process.env.STRIPE_SECRET as string);

export const createCheckout = async (req: any, res: any) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user.id },
  });

  if (!user) return res.status(404).json({ message: "User not found" });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "subscription",
    line_items: [
      {
        price: "YOUR_STRIPE_PRICE_ID",
        quantity: 1,
      },
    ],
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/cancel",
  });

  res.json({ url: session.url });
};