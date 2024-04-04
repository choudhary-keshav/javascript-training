import { createSlice } from '@reduxjs/toolkit';
import { newOrEditTaskState } from '../interfaces/tasks';

const initialState: newOrEditTaskState = {
  value: '',
  date: '',
  isValidValue: true,
  isValidDate: true
};

const popupTaskSlice = createSlice({
  name: 'popupTask',
  initialState,
  reducers: {
    setPopupTaskValue: (state, action) => {
      state.value = action.payload;
    },
    setPopupTaskDate: (state, action) => {
      state.date = action.payload;
    },
    setPopupTaskIsValidValue: (state, action) => {
      state.isValidValue = action.payload;
    },
    setPopupTaskIsValidDate: (state, action) => {
      state.isValidDate = action.payload;
    }
  }
});

export const { setPopupTaskValue, setPopupTaskDate, setPopupTaskIsValidValue, setPopupTaskIsValidDate } = popupTaskSlice.actions;

export default popupTaskSlice.reducer;
