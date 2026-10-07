import Todo from "./Todo.jsx"
import { useEffect,useState } from "react";
function App() {

  const [todos, setTodos] = useState([
    // "Learn React",
    // "Learn DSA",
    //  "Learn MongoDB",
    // "Learn Node.js",
    // "Learn JavaScript"
    // {
    //   id: 1,
    //   title: "Learn java",
    //   completed: false
    // }
  ]);
  const [title, setTitle] = useState("");

  const addTodo = async () => {

    if (!title.trim()) {
      return;
    }

    // const newTodo = {

    //   id: Date.now(),
    //   title: title,
    //   completed: false
    // }
    // setTodos([...todos, newTodo])
    // setTitle("")

    const response=await fetch("http://localhost:5000/todos",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        title:title 
      })
    });

    const data=await response.json()
    setTodos([...todos,data])
    setTitle("")
    


  }

  const toggleTodo=(id)=>{

    setTodos(
      todos.map((todo)=>{
        if(todo._id===id){
          return {
            ...todo,
            completed:!todo.completed
          }
        }
        return todo;
      })
    )
  }

  //fetch

  const getTodos=async()=>{
    const response=await fetch("http://localhost:5000/todos")
    const data=await response.json()
    setTodos(data)
  }

  useEffect(()=>{
    getTodos();
  },[])




  return (

    <div>
      <h1>Todo Application</h1>

      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}

      />

      <button onClick={addTodo}>
        Add Todo
      </button>
      
      {
        
        todos.map((todo, index) => (
          <Todo
            key={todo._id}
            title={todo.title}
            completed={todo.completed}
            onToggle={()=>toggleTodo(todo._id)}
          />
        ))

        // todos.map((todo,index)=>(
        //   <p key={index}>{todo}</p>
        // ))
      }
      {/* <Todo title="Learn Java"/>
      <p>{todos[0]}</p>
      <p>{todos[1]}</p> */}
      {/* <button onClick={()=>setCount(count+1)}>
        Add
      </button> */}
    </div>

  )
}

export default App;