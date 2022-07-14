import React,{useContext, useState} from 'react'
import {TodoContext} from '../Contexts/TodoContext'
import {AiFillDelete} from 'react-icons/ai'
import {MdOutlineDownloadDone} from 'react-icons/md'
import styled from 'styled-components'
import EditModal from './EditModal'

function TaskDetails({task , editedtitle,editeddes}) {

 
  const [isEdit , setisEdit] = useState(false)
  const [istick ,issetTick] = useState(false)
    const {dispatch } = useContext(TodoContext)
  const TaskCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:flex-start ;
  gap: 15px;
  font-weight:${ istick? 'bold':'normal'}; 
  text-decoration:${ istick? 'line-through':'none'} ;
`



const DeleteAllTasks = styled.button`
padding: 5px 10px;
background-color: red;
color: #fff;
font-size: 20px;
border-radius: 4px;
cursor: pointer;
border: none;
margin-bottom: 10px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;


`
const onEdit = ()=>{
  setisEdit(!isEdit)
   console.log(editeddes , editedtitle) }
  
  return (
<>  
    <li className='task-card1'> 
 
 <input type='radio' onClick={()=>issetTick(!istick)}></input>

     <TaskCard>
        <div className='title'>{ task.title}</div>
        <div className='describtion'>{ task.describtion}</div>
        </TaskCard>
        <div className='card-icons'>
        <AiFillDelete   onClick={()=> dispatch( {type: 'REMOVE_TASK', id:task.id})}></AiFillDelete>
    
 
      <EditModal onClick ={onEdit}></EditModal>
 
    
    </div>
    </li>
{task.length>=1  ? null : <DeleteAllTasks  onClick={()=>  dispatch({type :'CLEAR'})}>Delete All tasks</DeleteAllTasks> }
 

    </>
    )
}

export default TaskDetails