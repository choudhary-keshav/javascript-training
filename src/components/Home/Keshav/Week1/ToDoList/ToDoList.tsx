import React, { useEffect } from 'react';
import { ToDoIcon } from './../assets';
import { ToDoListWrapper } from './Style';
import TaskInput from './TaskInput/TaskInput';
import ToDoGrid from './TodoGrid/ToDoGrid';
import { useToDoContext } from '../context/ToDoContext';
import TaskSummary from './TaskSummary/TaskSummary';
import FilterTask from './FilterTask/FilterTask';

const ToDoList: React.FC = () => {
  const { tasks } = useToDoContext();

  useEffect(() => {
    sessionStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <ToDoListWrapper>
      <div className='ToDoListContainer'>
        <div className='ToDoTitle'>
          <h1>To Do List</h1>
          <img src={ToDoIcon} alt='' className='ToDoIcon' />
        </div>

        <TaskInput />

        <FilterTask />

        <ToDoGrid />

        <TaskSummary />
      </div>
    </ToDoListWrapper>
  );
};

export default ToDoList;
