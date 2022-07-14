
 import React,{useContext} from 'react'
import {TodoContext} from '../Contexts/TodoContext'
 import TaskDetails from './TaskDetails' 

function Tasklist() {
 const {tasks} = useContext(TodoContext)
 return  tasks.length ? (<div className='task-list' >
    <ul>
         
        {tasks.map((task) =>{
       return (<TaskDetails task={task} key={task.id}></TaskDetails>)
         })}
            
    </ul>   
   </div>):
       (
        <div className= 'empty'>
         <h5>You don't have any tasks registered yet.</h5> 
          <h5>Create tasks and organize your to-do items</h5></div>

      )
    
    }

export default Tasklist