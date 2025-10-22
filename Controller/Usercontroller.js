const usermodel = require("../Model/Usermodel")
const adduser = async(req,res)=>{
    try{
        let user = new usermodel({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone
        })

        await user.save();
            res.json({
                message:"user created successfully"
            })

    }catch(error){
       res.json({
        message:"error occured"
       })
    }
}
const getuser = async(req,res)=>{
    try{
     const userdata = await usermodel.find();
     console.log(userdata);
     res.json({userdata})
    }catch(error){
     res.json({error})
    }
}
const updateuser = async(req,res)=>{
    try{
     const id =req.params.id;
     await usermodel.updateOne({_id: id}, req.body);
     res.json(
        {
            message:"Updated Successfully"
        }
     )
    }catch(error){
     res.json({error})
    }
}
const deleteuser = async(req,res)=>{
    try{
     const deleted = await usermodel.findByIdAndDelete(req.params.id)
     res.json(
        {
            message:"Deleted Successfully"
        }
     )
    }catch(error){
     res.json({error})
    }
}
const getbyid = async(req,res)=>{
    try{
     const getuser = await usermodel.findById(req.params.id)
     res.json(getuser)
    }catch(error){
     res.json({error})
    }
}

module.exports={
    adduser,
    getuser,
    updateuser,
    deleteuser,
    getbyid
}