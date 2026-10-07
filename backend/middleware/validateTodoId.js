const mongoose=require("mongoose")
const validateTodoId=(req,res,next)=>{
    if(!mongoose.isValidObjectId(req.params.id)){
        return res.status(400).json({
            message:"Invalid Todo ID"
        })
    }
    next();
}
module.exports=validateTodoId;