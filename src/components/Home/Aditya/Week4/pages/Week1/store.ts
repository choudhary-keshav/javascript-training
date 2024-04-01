import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createTask from './features/createTaskSlice';
import popupTask from './features/popupCardSlice';
import task from './features/taskSlice';
import todo from './features/todoSlice';

const store = configureStore({
  reducer: combineReducers({
    createTask,
    popupTask,
    task,
    todo
  })
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
