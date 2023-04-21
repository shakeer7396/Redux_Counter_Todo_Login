import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { handleIncrement,handleDecrement } from '../Redux/AppReducer/action';
const Counter = () => {
    //acess some data from the redux store, we can use useSelector [this hook getting data]
    const counter = useSelector((store) =>store.AppReducer.counter)
    //whenever you want to change/modify/update any value in redux store,we can use the dispatch method from useDispatch [this hook updating data]
    const dispatch=useDispatch();
  return (
    <div>
    <h1>Counter : {counter}</h1>
    <button onClick={()=>dispatch(handleIncrement())}>INC</button>
    <button onClick={()=>dispatch(handleDecrement())}>DEC</button>

    </div>
  )
}

export default Counter