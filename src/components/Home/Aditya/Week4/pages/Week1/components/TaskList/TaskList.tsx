import React from 'react';
import { TaskDetails } from '../../interfaces/TaskDetailsInterface';
import Task from '../Task/Task';
import { ListContainer } from './taskListStyles';
import Sun from '../../assets/icons/sun.svg';

interface Props {
  tasks: TaskDetails[];
  showTasks: TaskDetails[];
  handleFilterChoice: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  deleteTask: (taskId: string) => void;
  updateTask: (updatedTask: TaskDetails) => void;
}

const TaskList: React.FC<Props> = ({ tasks, showTasks, handleFilterChoice, deleteTask, updateTask }) => {
  const filterChoices: string[] = ['All Tasks', 'Not Completed', 'Completed', 'Due Closest', 'Due Farthest'];

  return (
    <ListContainer id='listContainer'>
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
        <Task key={object.id} deleteTask={deleteTask} updateTask={updateTask} task={object} />
      ))}
    </ListContainer>
  );
};

export default TaskList;
