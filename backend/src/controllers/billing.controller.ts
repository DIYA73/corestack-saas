import Stripe from "stripe";
import { prisma } from "../config/prisma";
import { PLAN_LIMITS } from "../utils/planLimits";

const stripe = new Stripe(process.env.STRIPE_SECRET as string);

export const upgradeToPro = async (userId:string)=>{
  await prisma.user.update({
    where:{id:userId},
    data:{
      plan:"pro",
      tokensLimit: PLAN_LIMITS.pro
    }
  });
};
export const createCheckout = async (req:any,res:any)=>{
  try{

    const session = await stripe.checkout.sessions.create({
      payment_method_types:["card"],
      mode:"subscription",
      line_items:[{
        price: process.env.STRIPE_PRICE_ID,
        quantity:1
      }],
      success_url:"http://localhost:5173/success",
      cancel_url:"http://localhost:5173/pricing",
      customer_email:req.user.email
    });

    res.json({url:session.url});

  }catch(err){
    console.log(err);
    res.status(500).json({error:"Stripe error"});
  }
};