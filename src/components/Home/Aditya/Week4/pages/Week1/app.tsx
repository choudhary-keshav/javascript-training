import React from 'react';
import CreateTaskCard from './components/CreateTaskCard/CreateTaskCard';
import { useEffect } from 'react';
import { TaskDetails } from './interfaces/tasks';
import TaskList from './components/TaskList/TaskList';
import { AppWrapper } from './styles';
import { RootState } from './store';
import { useDispatch, useSelector } from 'react-redux';
import { setTodoShowTasks, setTodoCurrentFilter } from './features/todoSlice';
import { getFilter } from '../../utils/constants';

const App: React.FC = () => {
  const todo = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();
  useEffect(() => {
    switch (todo.currentFilter) {
      case getFilter.DueClosest:
      case getFilter.DueFarthest: {
        const tempTasks = [...todo.tasks];
        const sortedTasks = tempTasks.sort((task1, task2) => {
          const date1 = new Date(task1.date);
          const date2 = new Date(task2.date);
          return date1.getTime() - date2.getTime();
        });
        todo.currentFilter === getFilter.DueFarthest && sortedTasks.reverse();
        dispatch(setTodoShowTasks(sortedTasks));
        break;
      }
      case getFilter.NotCompleted:
        dispatch(setTodoShowTasks(todo.tasks.filter((task: TaskDetails) => !task.isCompleted)));
        break;
      case getFilter.Completed:
        dispatch(setTodoShowTasks(todo.tasks.filter((task: TaskDetails) => task.isCompleted)));
        break;
      default:
        dispatch(setTodoShowTasks(todo.tasks));
    }
  }, [todo.tasks, todo.currentFilter]);

  const handleFilterChoice = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    dispatch(setTodoCurrentFilter(event.target.value));
  };

  return (
    <AppWrapper>
      <div className='centerWrapper'>
        <TaskList tasks={todo.tasks} handleFilterChoice={handleFilterChoice} />
      </div>
      <CreateTaskCard />
    </AppWrapper>
  );
};

export default App;
