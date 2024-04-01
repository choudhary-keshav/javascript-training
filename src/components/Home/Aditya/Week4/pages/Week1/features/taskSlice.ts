import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  details: {
    id: '',
    value: '',
    isCompleted: false,
    date: ''
  },
  isBeingEdited: false,
  isBeingDeleted: false
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    toggleTaskStatus: (state) => {
      state.details.isCompleted = !state.details.isCompleted;
    },
    setTaskDetails: (state, action) => {
      state.details = action.payload;
    },
    setTaskIsBeingEdited: (state, action) => {
      state.isBeingEdited = action.payload;
    },
    setTaskIsBeingDeleted: (state, action) => {
      state.isBeingDeleted = action.payload;
    }
  }
});

export const { toggleTaskStatus, setTaskDetails, setTaskIsBeingEdited, setTaskIsBeingDeleted } = taskSlice.actions;

export default taskSlice.reducer;
