const Todo=require("../models/todo")
const mongoose=require("mongoose")
const getTodo=async(req,res)=>{
    const todos=await Todo.find();
    res.json(todos)
}

const createTodo=async(req,res)=>{
    try {
    const todo=await Todo.create({
    title:req.body.title,
    completed:false
   })
   res.status(201).json(todo);
   } catch (error) {
        res.status(400).json({
            message:error.message
        })
   }
}

const getTodoById=async(req,res)=>{
    // if(!mongoose.isValidObjectId(req.params.id)){
    //     return res.status(400).json({
    //         message:"Invalid Todo Id"
    //     })
    // }

    const todo=await Todo.findById(req.params.id);

    if(!todo){
        return res.status(404).json({
            message:"Todo not found"
        })
    }
    res.json(todo)
}

const updateTodo=async(req,res)=>{
    // if(!mongoose.isValidObjectId(req.params.id)){
    //     return res.status(400).json({
    //         message:"Invalid Todo Id"
    //     })
    // }

    const todo=await Todo.findByIdAndUpdate(
        req.params.id,
        {
            title:req.body.title,
            completed:req.body.completed
        },
        {
            // new:true
            returnDocument:"after",
            runValidators:true
        }
    )
    if(!todo){
        return res.status(404).json({
            message:"Todo not found"
        })
    }
    res.json(todo)
}

const deleteTodo=async(req,res)=>{
    // if(!mongoose.isValidObjectId(req.params.id)){
    //     return res.status(400).json({
    //         message:"Invalid Todo Id"
    //     })
    // }

    const todo=await Todo.findByIdAndDelete(req.params.id)
    // console.log("hi")
    if(!todo){
        return res.status(404).json({
            message:"Todo not found"
        })
    }
    res.json({
        message:"Todo successfully deleted"
    })
}

module.exports={
    getTodo,
    createTodo,
    getTodoById,
    updateTodo,
    deleteTodo
}