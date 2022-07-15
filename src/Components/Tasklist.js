
import React, { useContext } from 'react'
import { TodoContext } from '../Contexts/TodoContext'
import TaskDetails from './TaskDetails'

function Tasklist() {

  const { dispatch } = useContext(TodoContext)
  const { tasks } = useContext(TodoContext)
  return tasks.length ? (<div className='alltasksform'><h5 className='alltaskstitle'>   All Tasks: {tasks.length} task</h5>

    <div className='task-list' >
      <ul>
        {tasks.map((task) => {
          return (<TaskDetails task={task} key={task.id}></TaskDetails>)
        })}
      </ul>
    </div>
    <div className='deletealltasks1'>
      <button className='deletealltasks' onClick={() => dispatch({ type: 'CLEAR' })}>Delete All tasks</button>
    </div>
  </div>
  ) : (<div className='empty'>

    <h5>You don't have any tasks registered yet.</h5>
    <h5>Create tasks and organize your to-do items</h5></div>
  )
}
export default Tasklist