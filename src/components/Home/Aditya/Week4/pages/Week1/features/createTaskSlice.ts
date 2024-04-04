import { createSlice } from '@reduxjs/toolkit';
import { getTodayDate } from '../../../utils/functions';
import { newOrEditTaskState } from '../interfaces/tasks';

const initialState: newOrEditTaskState = {
  value: '',
  date: getTodayDate(),
  isValidValue: true,
  isValidDate: true
};

const createTaskSlice = createSlice({
  name: 'createTask',
  initialState,
  reducers: {
    setCreateTaskValue: (state, action) => {
      state.value = action.payload;
    },
    setCreateTaskDate: (state, action) => {
      state.date = action.payload;
    },
    setCreateTaskIsValidValue: (state, action) => {
      state.isValidValue = action.payload;
    },
    setCreateTaskIsValidDate: (state, action) => {
      state.isValidDate = action.payload;
    }
  }
});

export const { setCreateTaskValue, setCreateTaskDate, setCreateTaskIsValidValue, setCreateTaskIsValidDate } = createTaskSlice.actions;

export default createTaskSlice.reducer;
