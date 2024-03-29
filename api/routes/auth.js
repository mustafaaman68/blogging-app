const router=require("express").Router();
const User=require("../models/User");
const bcrypt=require("bcrypt");
// bycrypt is  library to make our password hidden from 
router.post("/register",async(req,res)=>{
    try{
        const salt=await bcrypt.genSalt(10);
        const hashedPass=await bcrypt.hash(req.body.password,salt)
            const newUser=new User({
                username:req.body.username,
                email:req.body.email,
                password:hashedPass,
            })
        
    const user=await newUser.save();
    res.status(200).json(user);
         } catch(err){
        res.status(500).json(err);
    }
})
router.post("/login",async(req,res)=>{
    try{
      
            const user= await User.findOne({
                username:req.body.username,
             
            })
            !user && res.status(400).json("Wrong credentials")
            const {password,...others}=user;  
        
   
    return res.status(200).json(user);
    } catch(err){
        res.status(500).json(err);
    }
})
module.exports=router;
