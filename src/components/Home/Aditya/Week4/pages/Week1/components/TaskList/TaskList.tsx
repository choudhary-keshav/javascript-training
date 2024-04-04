import React from 'react';
import { TaskDetails } from '../../interfaces/tasks';
import Task from '../Task/Task';
import { TaskListWrapper } from './taskListStyles';
import Sun from '../../assets/icons/sun.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

interface Props {
  tasks: TaskDetails[];
  handleFilterChoice: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const TaskList: React.FC<Props> = ({ tasks, handleFilterChoice }) => {
  const showTasks = useSelector((state: RootState) => state.todo.showTasks);
  const filterChoices: string[] = ['All Tasks', 'Not Completed', 'Completed', 'Due Closest', 'Due Farthest'];

  return (
    <TaskListWrapper id='listContainer'>
      <div id='heading'>
        <h1>ToDo App</h1>
        <img src={Sun} alt='Sun' width={'100px'} />
      </div>
      <select name='sort' onChange={handleFilterChoice}>
        {filterChoices.map((choice) => (
          <option key={choice} value={choice}>
            {choice}
          </option>
        ))}
      </select>
      <h4>
        Total Tasks: {tasks.length} | Completed Tasks: {tasks.filter((task) => task.isCompleted).length} | Not Completed Tasks:{' '}
        {tasks.filter((task) => !task.isCompleted).length}
      </h4>
      {showTasks.map((object: TaskDetails) => (
        <Task key={object.id} task={object} />
      ))}
    </TaskListWrapper>
  );
};

export default TaskList;
