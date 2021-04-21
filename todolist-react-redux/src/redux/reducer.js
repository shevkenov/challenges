import { ADD_TASK, REMOVE_TASK } from './actionTypes'

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TASK:
            const newTask = {
                id: state.length + 1,
                name: action.payload,
                completed: 0
            }
            return [...state, newTask]
        
        case REMOVE_TASK:
            return state.reduce((acc, cur) => {
                if(cur.id !== action.payload){
                    acc = {
                        ...acc,
                        cur
                    }
                }

                return acc
            }, [])
    
        default:
            break;
    }

    return state
};

export default todoReducer;