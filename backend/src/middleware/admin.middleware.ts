export const isAdmin = (req:any,res:any,next:any)=>{
  if(req.user.role !== "admin"){
    return res.status(403).json({error:"Admin only"});
  }
  next();
};