import { ADD_TASK, REMOVE_TASK } from './actionTypes'

export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task
})

export const removTask = (id) => ({
    type: REMOVE_TASK,
    payload: id
})