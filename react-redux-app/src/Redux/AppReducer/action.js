
import * as types from "./actionTypes";

 const handleIncrement=()=>{
   return {type:types.INCREMENT,payload:1} 
 }
 const handleDecrement=()=>{
    return {type:types.DECREMENT,payload:1} 
  }

  const todosRequest=()=>{
    return {type:types.GET_TODOS_REQUEST}
  }
  const todosSuccess=(payload)=>{
    return {type:types.GET_TODOS_SUCCESS,payload}
  }
  const todosFailure=()=>{
    return {type:types.GET_TODOS_FAILURE}
  }


  const addTodoRequest=()=>{
    return {type:types.ADD_TODOS_REQUEST}
  }
  const addTodoSuccess=()=>{
    return {type:types.ADD_TODOS_SUCCESS}
  }
  const addTodoFailure=()=>{
    return {type:types.ADD_TODOS_FAILURE}
  }

  export {handleDecrement,handleIncrement,todosRequest,todosSuccess,todosFailure,addTodoRequest,addTodoSuccess,addTodoFailure};