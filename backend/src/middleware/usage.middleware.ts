import { prisma } from "../config/prisma";

export const checkUsage = async (req:any,res:any,next:any)=>{
  const user = await prisma.user.findUnique({
    where:{id:req.user.id}
  });

  if(!user) return res.status(404).json({error:"User not found"});

  if(user.tokensUsed >= user.tokensLimit){
    return res.status(403).json({
      error:"Usage limit reached. Upgrade plan."
    });
  }

  next();
};