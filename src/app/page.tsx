'use client'
import { useState } from "react";
import styles from "./styles/Todo.module.css";
type TodoItem={
  text:string,
  completed:boolean,
}
const Todo=()=>{
    const [todo,setTodo]=useState<TodoItem[]>([]);
    const [newTodo,setNewTodo]=useState('');
    const[editText,setEditText]=useState('');
    const[editIndex,setEditIndex]=useState<number|null>(null);
    const [toggleBtn,setToggleBtn]=useState<string>('');
    const handleToggleDone = (index: number) => {
    const updatedTodos = [...todo]
  updatedTodos[index].completed = !updatedTodos[index].completed
  setTodo(updatedTodos)
}
    const deleteBtn=(index:number)=>{
      const del=todo.filter((_,i)=>i!==index)
      setTodo(del);
    }
    const editBtn=(index:number)=>{
      setEditIndex(index);
      setEditText(todo[index].text)   
    }
   const saveBTn=()=>{
    if(editIndex===null) return
    const updateTodo=[...todo];
    updateTodo[editIndex] = {
      ...updateTodo[editIndex],
      text: editText
    } 
    setTodo(updateTodo);
    setEditIndex(null);
    setEditText('');
   }
    const handleAddTodo=()=>{
        if(newTodo.trim()==="")return
        const newTodoItem:TodoItem={
          text:newTodo,
          completed:false,

        }
       setTodo([...todo,newTodoItem])
       setNewTodo("")
        
    }
return(

    <div className={styles.container}>
        <h1>Todo App</h1>
        <div className={styles.inputGroup}>
        <input 
        onChange={(e)=>setNewTodo(e.target.value)}
        placeholder="add new task"
        type="text"
        value={newTodo}
/>
<button onClick={handleAddTodo}>Add</button>
        </div>
<ul className={styles.list}>
  {todo.map((item,index)=>(
    <li key={index} className={styles.item}>
      {index===editIndex ? (
      <>
      <input 
      type="text"
      value={editText}
      onChange={(e)=>setEditText(e.target.value)}
      />
      <button onClick={saveBTn} style={{backgroundColor:"green"}}>save</button>
      </>
      ):(
<>    
<span style={{
  textDecoration: item.completed?"line-through":"none",
}}
>
      {item.text}
</span>
<span className="Btn">
      <button onClick={()=>deleteBtn(index)} className={styles.deleteBtn}>
        delete
      </button>
      <button onClick={()=>editBtn(index)}>
        edit
        </button>
      <button onClick={()=>handleToggleDone(index)} className={styles.toggleBtn }
      style={{
        backgroundColor:item.completed ? "orange":"green"
      }}
      >

{item.completed ? '↩️ Undo' : '✅ Done'}
        
      </button>
      </span>
        </>
         )
        }
    </li>
  ))}
</ul>
    </div>
  
)
}
export default Todo;