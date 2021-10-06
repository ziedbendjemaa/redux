import { createStore } from "redux";
import { reducerOFtask } from "./reducer";





const store=createStore(reducerOFtask,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store 