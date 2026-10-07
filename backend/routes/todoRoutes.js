const express=require("express")
const validateTodoId=require("../middleware/validateTodoId")
const {
    getTodo,createTodo,getTodoById,updateTodo,deleteTodo
}= require("../controllers/todoController")
const router=express.Router()

router.get("/",getTodo)
router.post("/",createTodo)
router.get("/:id",validateTodoId,getTodoById)
router.put("/:id",validateTodoId,updateTodo)
router.delete("/:id",validateTodoId,deleteTodo)

module.exports=router;