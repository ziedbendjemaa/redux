import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK, FILTER_TASK } from "./actionType";


const init={
    todos:[
        {id:Math.random(),action:"n9oum sbeh",isDone:true},
        {id:Math.random(),action:"nemchi lel go my code",isDone:false}
    ]
}


export const reducerOFtask=(state=init,{type,payload})=>{
switch (type) {
    case DELETE_TASK:
        
        return{
...state,todos:state.todos.filter(el=>el.id!==payload)
        }
case ADD_TASK:
    return{
        ...state,todos:[...state.todos,payload]
    }
    case COMPLETE_TASK:
        return{
            ...state,todos:state.todos.map((el)=>el.id===payload?{...el,isDone:!el.isDone}:el)
        }
        case EDIT_TASK:
            return{
                ...state,todos:state.todos.map((el)=>el.id===payload.id?({...el,action:payload.action}):el)
            }
            case FILTER_TASK:
        return {
          ...state,todos : state.todos.filter((e)=> e.isDone===false)
        }
    default:
       return state
}
}