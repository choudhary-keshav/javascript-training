import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';
const store = configureStore({
  reducer: combineReducers({
    counter: counterReducer
  })
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
