import { configureStore, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const todoSlice = createSlice({
    name: "todos",
    initialState: [
        { id: 1, text: "Faire les courses", done: false },
        { id: 2, text: "Ménage !", done: true },
    ],
    reducers: {
        addTask: (state, action) => {
            state.push({
                id: uuidv4(),
                done: false,
                text: action.payload
            })
        },

        deleteTask: (state, action) => {
            return state.filter(t => t.id !== action.payload)
        },

        toggleTask: (state, action) => {
            const task = state.find(t => t.id === action.payload);
            task.done = !task.done
        },


    }
});

export const { toggleTask, addTask, deleteTask } = todoSlice.actions

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer
    }
})