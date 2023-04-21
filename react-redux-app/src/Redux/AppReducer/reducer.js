import * as types from "./actionTypes";
import { loadData,saveData } from "../../utills/accessLocalStorage";
const initialState={
    counter:loadData("counter")|| 1,
    todos:[],
    isLoading:false,
    iError:false,
};

const reducer = (oldState=initialState,action)=>{
    const {type,payload}=action;
switch(type){
    case types.INCREMENT :
        let newCountIncrement=oldState.counter+payload;
        saveData("counter",newCountIncrement);
        return{
            ...oldState,
            counter:newCountIncrement
        }
        case types.DECREMENT :
            let newCountDecrement=oldState.counter-payload;
            saveData("counter",newCountDecrement);
        return{
            ...oldState,
            counter:newCountDecrement 
        }


        case types.GET_TODOS_REQUEST:
            return{
                ...oldState,isLoading:true,isError:false
            }
            case types.GET_TODOS_SUCCESS:
                return{
                    ...oldState,isLoading:false,isError:false,todos:[...payload]
                }
                case types.GET_TODOS_FAILURE:
                    return{
                        ...oldState,isLoading:false,isError:true
                    }
        default:
            return oldState;
}
};

export {reducer};