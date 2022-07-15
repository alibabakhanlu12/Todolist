import React,{useState , useContext} from 'react'
import { TodoContext } from '../Contexts/TodoContext'
function TaskForm() {
      const  {dispatch} = useContext(TodoContext)



  const [title , setTitle] = useState('');  
  const [describtion , setDescribtion] = useState('');  


  
  const submithandeler =(e) =>{
    e.preventDefault();
    dispatch({type: 'ADD_TASK', task:{ title,describtion}})
    setTitle('')
    setDescribtion('')
  } 
   
    return (
        <form  onSubmit={submithandeler}>

            <input type='text' required onChange={(e) =>(setTitle(e.target.value))} placeholder= 'Title...' value={title}/>
            <input type='text'  required onChange={(e) =>(setDescribtion(e.target.value))} placeholder= 'Describtion...' value={describtion}/>
        <button className='button-40'   value='Add Task'> Add Task</button>
        
        </form>
  )
}

export default TaskForm