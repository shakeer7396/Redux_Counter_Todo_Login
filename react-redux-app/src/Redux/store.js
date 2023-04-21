import {legacy_createStore,combineReducers,applyMiddleware,compose} from 'redux';
import { reducer as AppReducer } from '../Redux/AppReducer/reducer';
import { reducer as AuthReducer } from '../Redux/AuthReducer/reducer';


const rootReducer=(combineReducers({AppReducer,AuthReducer}))
//store --next-->go to the next middleware if available, else go tothe reducer function 
//action -->action object we get from the dispatch method 

//kep track on api calls made
const logger1 =(store)=>(next)=>(action)=>{
    return next(action);
}

//compose -->to bring together 
//devtools one Enhancer & middleware on hancer so more there so we use compose enhancers

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store=legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(logger1))
    
);

export{store};