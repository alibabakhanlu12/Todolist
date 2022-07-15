import React,{ createContext,useEffect, useReducer} from 'react'
import { taskReducer } from '../Reducer/Taskreducer';
export const TodoContext = createContext(); 
function TodoContextProvider(props) {

    const[tasks , dispatch] = useReducer(taskReducer,[],()=>{
        const localdata = localStorage.getItem('tasks')
    return localdata ?JSON.parse(localdata):[]
    })
 


    useEffect(()=>{
            localStorage.setItem('tasks', JSON.stringify(tasks))
    },[tasks])


  return (
     
    

     <TodoContext.Provider value={{tasks, dispatch }}>

        {props.children}
     </TodoContext.Provider>
  )
}

export default TodoContextProvider