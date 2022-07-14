import React,{useState , useContext} from 'react'
import { TodoContext } from '../Contexts/TodoContext'
function TaskForm() {
  const [title , setTitle] = useState('');  
 
  const [describtion , setDescribtion] = useState('');  

    const {dispatch}  = useContext(TodoContext)
  
  const submithandeler =(e) =>{
    e.preventDefault();
    dispatch({type: 'ADD_TASK', task:{
      title,describtion
    }})
    setTitle('')
 
    setDescribtion('')
  } 
   
    return (
<>
        <form  onSubmit={submithandeler}>

            <input type='text' required onChange={(e) =>(setTitle(e.target.value))} placeholder= 'Title...' value={title}/>
            <input type='text'  required onChange={(e) =>(setDescribtion(e.target.value))} placeholder= 'Describtion...' value={describtion}/>
        <input className='button-40' type='submit' value='Add Task' />
        
        </form>
          </>
  )
}

export default TaskForm