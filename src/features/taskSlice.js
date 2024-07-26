import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const taskSlice = createSlice({
    name: 'taskManager',
    initialState,
    reducers: {
        AddTask: (state, action) =>{
            state.push(action.payload)
        },

        RemoveTask: (state, action) =>{
            return state.filter(task=>( task.ID !== action.payload));
        },

        CompletedTask: (state, action) =>{
            return state.map(task => 
                task.ID === action.payload ? { ...task, Completed: !task.Completed} : task
            );
        }
    }
})

export const {AddTask, RemoveTask, CompletedTask} = taskSlice.actions;
export default taskSlice.reducer;