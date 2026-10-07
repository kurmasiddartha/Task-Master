require("dotenv").config()
const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const todoRoutes=require("./routes/todoRoutes")

const app=express()
app.use(cors())
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB connected")
})
.catch((error)=>{
    console.log("MongoDB connection failed",error)
})
app.use(express.json())
// const todos=[]
//get todos-local
// app.get("/todos",(req,res)=>{
//     res.json(todos)
// })
//get todos-mongodb
// app.get("/todos",async(req,res)=>{
//     const todos=await Todo.find();
//     res.json(todos)
// })

// //post todos-local
// // app.post("/todos",(req,res)=>{
// //     const todo={
// //         id:todos.length+1,
// //         title:req.body.title,
// //         completed:false
// //     }
// //     todos.push(todo)
// //     res.status(201).json(todo);
// // })

// //post todos-mongodb
// app.post("/todos",async(req,res)=>{
//    try {
//     const todo=await Todo.create({
//     title:req.body.title,
//     completed:false
//    })
//    res.status(201).json(todo);
//    } catch (error) {
//         res.status(400).json({
//             message:error.message
//         })
//    }
// })

// //get todos by id-local
// // app.get("/todos/:id",(req,res)=>{
// //     const todo=todos.find((todo)=>todo.id===Number(req.params.id))
// //     if(!todo){
// //         return res.status(404).json({
// //             message:"Todo not found"
// //         });
// //     }
// //     res.json(todo)
// // })

// //get todos by id-mongodb
// app.get("/todos/:id",async(req,res)=>{

//     if(!mongoose.isValidObjectId(req.params.id)){
//         return res.status(400).json({
//             message:"Invalid Todo Id"
//         })
//     }

//     const todo=await Todo.findById(req.params.id);

//     if(!todo){
//         return res.status(404).json({
//             message:"Todo not found"
//         })
//     }
//     res.json(todo)
// })

// // update todo by id-local
// // app.put("/todos/:id",(req,res)=>{
// //     const id=Number(req.params.id)
// //     const todo=todos.find((todo)=>todo.id===id)
// //     if(!todo){
// //         return res.status(404).json({
// //             message:"Todo not found"
// //         })
// //     }
// //     todo.title=req.body.title;
// //     todo.completed=req.body.completed
// //     res.json(todo);
// // })
// //update todo by id-mongodb
// app.put("/todos/:id",async(req,res)=>{

//     if(!mongoose.isValidObjectId(req.params.id)){
//         return res.status(400).json({
//             message:"Invalid Todo Id"
//         })
//     }

//     const todo=await Todo.findByIdAndUpdate(
//         req.params.id,
//         {
//             title:req.body.title,
//             completed:req.body.completed
//         },
//         {
//             // new:true
//             returnDocument:"after",
//             runValidators:true
//         }
//     )
//     if(!todo){
//         return res.status(404).json({
//             message:"Todo not found"
//         })
//     }
//     res.json(todo)
// })

// //delete todo-local
// // app.delete("/todos/:id",(req,res)=>{
// //     const id=Number(req.params.id)
// //     const index=todos.findIndex((todo)=>todo.id===id)
// //     if(index==-1){
// //         return res.status(404).json({
// //             message:"Todo not found"
// //         })
// //     }
// //     todos.splice(index,1)
// //     res.json({
// //         message:"Todo successfully deleted"
// //     })
// // })

// //delete todo-mongodb
// app.delete("/todos/:id",async(req,res)=>{

//     if(!mongoose.isValidObjectId(req.params.id)){
//         return res.status(400).json({
//             message:"Invalid Todo Id"
//         })
//     }

//     const todo=await Todo.findByIdAndDelete(req.params.id)
//     // console.log("hi")
//     if(!todo){
//         return res.status(404).json({
//             message:"Todo not found"
//         })
//     }
//     res.json({
//         message:"Todo successfully deleted"
//     })
// })


app.use("/todos",todoRoutes)

app.get("/",(req,res)=>{
    // res.send("Todo API is running");
    res.json({
        message:"Todo API is running"
    })
})



app.listen(5000,()=>{
    console.log("server started running on 5000 port");
})