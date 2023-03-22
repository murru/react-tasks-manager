import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    list: [],
    selectedTask: null
}

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: uuidv4(),
                ...action.payload,
                completed: false
            }
            state.list.push(newTask)
        },
        updateTask: (state, action) => {
            const foundTask = state.list.find(task => task.id === action.payload.id)
            if (foundTask) {
                const updatedTask = {
                    ...foundTask,
                    title: action.payload.title,
                    description: action.payload.description
                }
                state.list.splice(state.list.indexOf(foundTask), 1, updatedTask)
                state.selectedTask = null
            }
        },
        editTask: (state, action) => {
            const foundTask = state.list.find(task => task.id === action.payload)
            if (foundTask) {
                state.selectedTask = { ...foundTask }
            } else {
                state.selectedTask = null
            }
        },
        deleteTask: (state, action) => {
            const foundTask = state.list.find(task => task.id === action.payload)
            if (foundTask) {
                state.list.splice(state.list.indexOf(foundTask), 1)
            }
        }
    }
})

export const { addTask, updateTask, editTask, deleteTask } = taskSlice.actions

export default taskSlice.reducer