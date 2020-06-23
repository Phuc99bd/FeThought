import thunk from "redux-thunk";
import {applyMiddleware,createStore} from "redux";
import allReducers from "./reducers";


const store = createStore(
    allReducers,
    applyMiddleware(thunk)
)


export default store