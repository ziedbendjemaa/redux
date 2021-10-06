import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { handeladd } from '../redux/action';

const AddTask = () => {
    const [newaction, setNewaction] = useState("");
    const dispatch = useDispatch()

    let handelsubmit=(e)=>{
e.preventDefault()
let newActiontoAdd={
    id:Math.random(),
    action:newaction,
    isDone:false
}
dispatch(handeladd(newActiontoAdd))
setNewaction("")

    }
    return (
        <div>
            <form action="" onSubmit={handelsubmit}>
                <input type="text" value={newaction} onChange={e=>setNewaction(e.target.value)} />
            </form>
        </div>
    )
}

export default AddTask
