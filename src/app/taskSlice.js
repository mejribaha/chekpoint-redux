import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const taskReducer = createSlice({
  name: "taskStore",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        description: action.payload.description,
        isDone: false,
      };

      state.tasks.push(newTask);
    },

    toggleTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      task.isDone = !task.isDone;
    },

    removeTask: (state,action) =>{
       state.tasks = state.tasks.filter((item) => item.id !== action.payload
         
      );
    }
  }, 

});

export const { addTask, toggleTask, removeTask } = taskReducer.actions;
export default taskReducer.reducer;
