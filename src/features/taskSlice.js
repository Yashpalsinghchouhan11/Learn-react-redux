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
        },

        UpdateTask: (state, action) => {
            const { id, task } = action.payload;
            return state.map(t => (t.ID === id ? { ...t, Task: task } : t));
          },

        UpdateDate: (state, action) => {
            const { id, date } = action.payload;
            return state.map(t => (t.ID === id ? { ...t, Date: date } : t));
          }
        
    }
})

export const {AddTask, RemoveTask, CompletedTask, UpdateTask, UpdateDate} = taskSlice.actions;
export default taskSlice.reducer;