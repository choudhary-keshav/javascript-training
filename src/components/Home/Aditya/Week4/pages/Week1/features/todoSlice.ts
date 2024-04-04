import { createSlice } from '@reduxjs/toolkit';
import { TaskDetails } from '../interfaces/tasks';

const getLocalTasks = (): TaskDetails[] => {
  return JSON.parse(localStorage.getItem('tasks') ?? '[]');
};
const setLocalTasks = (tasks: TaskDetails[]): void => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const initialState = {
  tasks: getLocalTasks(),
  showTasks: getLocalTasks(),
  currentFilter: 'All Tasks'
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodoTask: (state, action) => {
      state.tasks.unshift(action.payload);
      setLocalTasks(state.tasks);
    },
    deleteTodoTask: (state, action) => {
      state.tasks = state.tasks.filter((user) => user.id !== action.payload);
      setLocalTasks(state.tasks);
    },
    updateTodoTask: (state, action) => {
      state.tasks = [...state.tasks].map((task: TaskDetails) => (task.id === action.payload.id ? action.payload : task));
      setLocalTasks(state.tasks);
    },
    setTodoShowTasks: (state, action) => {
      state.showTasks = action.payload;
    },
    setTodoCurrentFilter: (state, action) => {
      state.currentFilter = action.payload;
    }
  }
});

export const { addTodoTask, deleteTodoTask, updateTodoTask, setTodoShowTasks, setTodoCurrentFilter } = todoSlice.actions;

export default todoSlice.reducer;
