import React, { useState } from 'react'

const TodoInput = ({addTodos}) => {
    const [currentTodo,setCurrentTodo] =useState("");

    const changeHandler=(e)=>{
        setCurrentTodo(e.target.value);
    }
    const addTodoHandler=()=>{
        const payload={
            title:currentTodo,
            status:false,
        }
        addTodos(payload)
    }
  return (
    <div>
        <input placeholder='Add Something' value={currentTodo} onChange={changeHandler}/>
        <button onClick={addTodoHandler}>Add Todo</button>
    </div>
  )
}

export default TodoInput