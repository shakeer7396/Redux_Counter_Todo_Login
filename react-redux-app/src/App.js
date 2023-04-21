import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import Todos from './Components/Todos';
import { useState } from 'react';
import axios from 'axios';
import { loginFailure, loginRequest, loginSuccess } from './Redux/AuthReducer/action';
import {useDispatch,useSelector} from 'react-redux';

function App() {
  const dispatch=useDispatch();
  const [useremail,setUserEmail] =useState("");
  const [password,setPassword]=useState("");
  const isAuth=useSelector((store)=>store.AuthReducer.isAuth)

  const handleLogin=()=>{
    if(useremail && password){
      const payload={
        email:useremail,
        password,
      }
      dispatch(loginRequest())
      axios
      .post("https://reqres.in/api/login",payload)
      .then((r)=>{
        return dispatch(loginSuccess(r.data))})
      .catch((e)=>dispatch(loginFailure(e)))

    }
  }
  return (
    <div className="App">
      <h1>React-redux</h1>
      <Counter />
      <br></br>
      <input placeholder='email' type='email' value={useremail} onChange={(e)=>setUserEmail(e.target.value)} />
      <input placeholder='password' type='password' value={password} onChange={(e)=>setPassword(e.target.value)} />

      <button onClick={handleLogin}>Login</button>
      {isAuth && <Todos />}
    </div>
  );
}

export default App;
