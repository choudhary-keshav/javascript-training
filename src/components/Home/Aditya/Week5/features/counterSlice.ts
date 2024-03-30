import { createSlice } from '@reduxjs/toolkit';

const initialState = 0;

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementCounter: (state) => ++state,
    decrementCounter: (state) => --state
  }
});

export const { incrementCounter, decrementCounter } = counterSlice.actions;

export default counterSlice.reducer;
