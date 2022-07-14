import { v4 as uuidv4 } from 'uuid';

export const taskReducer = (state ,action)=>{
    switch(action.type){
        case 'ADD_TASK':
            return [...state ,
            {
                title:action.task.title,
                describtion:action.task.describtion,
                id:uuidv4()
            }]
        case 'REMOVE_TASK':
             return  state.filter(task=> task.id !==action.id     )
        case 'CLEAR':
            return ''; 
        default:
            return state;    
    }
}