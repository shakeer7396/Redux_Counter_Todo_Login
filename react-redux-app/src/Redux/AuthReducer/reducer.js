import * as types from "./actionType";

const initialState={
    isAuthLoading:false,
    isAuth:false,
    token:''
}

const reducer=(oldState=initialState,action)=>{
const {type,payload}=action;
switch(type){
    case types.USER_LOGIN_REQUEST:
        return{
            ...oldState,
            isAuthLoading:true,
        }
        case types.USER_LOGIN_SUCCESS:
        return{
            ...oldState,
            isAuthLoading:false,
            isAuth:true,
            token:payload
        }
        case types.USER_LOGIN_FAILURE:
        return{
            ...oldState,
            isAuthLoading:false,
            isAuth:false,
            token:''

        }
        default:
            return oldState;
}
}

export {reducer};