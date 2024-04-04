import { createSlice } from '@reduxjs/toolkit';

const initialState: number = 0;

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementCount: (state) => ++state,
    decrementCount: (state) => --state
  }
});

export const { incrementCount, decrementCount } = counterSlice.actions;
export default counterSlice.reducer;
