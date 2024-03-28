import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 0
  },
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementBy: (state, action: PayloadAction<number>) => {
      state.counter += action.payload;
    },
    reset: (state) => {
      state.counter = 0;
    }
  }
});
export const { increment, decrement, incrementBy, reset } = counterSlice.actions;
export default counterSlice.reducer;
