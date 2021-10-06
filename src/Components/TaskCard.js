import React from 'react'
import { useDispatch } from 'react-redux'
import { handelcomplete, handeldelete } from '../redux/action'
import EditTask from './EditTask'


const TaskCard = ({el}) => {
    const dispatch = useDispatch()
    return (
        <div style={{display:"flex" }} >
            <h1 id={el.isDone?"comp":null}>{el.action}</h1>
            <div style={{display:"flex" ,marginTop:"20px",marginLeft:"20px"}} >
            <button className="boton1" onClick={()=>dispatch(handeldelete(el.id))}>Delete</button>
            <button className="boton2" onClick={()=>dispatch(handelcomplete(el.id))}>Complete</button>
            <EditTask el={el}/></div>
            
        </div>
       
    )
}

export default TaskCard
