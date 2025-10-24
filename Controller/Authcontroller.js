const authmodel = require("../Model/Authmodel")
const bcrypt = require('bcrypt')

const register = async ( req,res)=>{
try{
const {name,email,phone,password}= req.body;

const existing = await authmodel.findOne({email})
if(existing){
 return res.json({message:"user already exist"})
}
const hashedpassword = await bcrypt.hash(password,10);

const user = await authmodel.create({name,email,phone,password:hashedpassword})
return res.json({message:"user register successfully"})
}catch(error){
return res.json(error)
}
}



const login = async(req,res)=>{
    try{
      const {email,password}= req.body;
const user = await authmodel.findOne({email})
if(!user){
    return res.json({message:"user not found"})
}
const ismatch = await bcrypt.compare(password,user.password)
if(!ismatch){
    return res.json({message:"invalid password"})
}
res.json({message:"login sucessful"})

    }catch(error){
     console.log(error);  
    }
}
module.exports={
    register , login
}