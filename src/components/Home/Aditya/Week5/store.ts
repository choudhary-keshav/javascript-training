import { configureStore } from '@reduxjs/toolkit';
import counter from './features/counterSlice';

const store = configureStore({
  reducer: counter
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
