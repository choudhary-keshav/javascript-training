import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counter from './features/counterSlice';

const store = configureStore({
  reducer: combineReducers({
    counter
  })
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
