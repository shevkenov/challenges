import React, {useState} from 'react'
import { useDispatch } from 'react-redux'

import { addTask } from '../redux/actions'
import Todolist from './Todolist';

const Todo = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const handleClick = (e) => {
        //e.preventDefault();
        dispatch(addTask(task));

        setTask('');
    }

    return (
        <div>
            <h1>Todo App</h1>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)}/>
            <button onClick={handleClick}>Add task</button>
            <Todolist />
        </div>
    )
}

export default Todo
