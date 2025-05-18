'use client'
import { useState } from "react";
import styles from '../styles/Todo.module.css';
export const Todo=()=>{
    const [todo,setTodo]=useState<string[]>([]);
    const [newTodo,setNewTodo]=useState('');
    const handleAddTodo=()=>{
        if(newTodo.trim()==="")return
            setTodo([...todo,newTodo])
            setNewTodo("")
        
    }
return(
    <div className={styles.container}>
        <h1>Todo App</h1>
        <input 
        onChange={(e)=>setNewTodo(e.target.value)}
        placeholder="add new task"
        type="text"
        value={newTodo}
/>
<button onClick={handleAddTodo}>Add</button>
    </div>
)
}