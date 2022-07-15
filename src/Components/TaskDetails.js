import React,{useContext, useState} from 'react'
import {TodoContext} from '../Contexts/TodoContext'
import {AiFillDelete} from 'react-icons/ai'
import styled from 'styled-components'
import EditModal from './EditModal'

function TaskDetails({task}) {

 
  const [istick ,issetTick] = useState(true)


  const {dispatch } = useContext(TodoContext)
  const TaskCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight:${ istick?'normal' :'900'}; 
  text-decoration:${ istick? 'none':'line-through'} ;
`
 
 
  return (
<>  
    <li className='task-card1'> 
      <div className='inputss'>
      <input  type='checkbox' onClick={()=>issetTick(!istick)} />
          <TaskCard>  
            <div className='title'>{ task.title}</div>
        <div className='describtion'>{ task.describtion}</div>
        </TaskCard></div>
        <div className='card-icons'>
        <AiFillDelete   onClick={()=> dispatch( {type: 'REMOVE_TASK', id:task.id})}></AiFillDelete>
      <EditModal  ></EditModal>
    </div>
    </li>
    </>
    )
}

export default TaskDetails