import React, { useState } from 'react';
import { NewTask } from './createTaskCardStyles';
import { TaskDetails } from '../../interfaces/TaskDetailsInterface';
import { removeWhitespace } from '../../utils/utils';
import { getTodayDate } from '../../utils/utils';

interface Props {
  addTask: (newTask: TaskDetails) => void;
}

const CreateTaskCard: React.FC<Props> = ({ addTask }) => {
  const today = getTodayDate();
  const [date, setDate] = useState(today);
  const [task, setTask] = useState('');
  const [isInvalidValue, setIsInvalidValue] = useState(false);
  const [isInvalidDate, setIsInvalidDate] = useState(false);

  const warning =
    'Invalid' +
    (isInvalidValue ? ' Task ' : '') +
    (isInvalidDate ? (isInvalidValue ? 'and' : '') : '') +
    (isInvalidDate ? ' Date ' : '') +
    'Value';

  const handleSubmitTask = (): void => {
    const currentTask = removeWhitespace(task);
    const currentDate = Date.parse(getTodayDate());
    if (currentDate > Date.parse(date)) {
      setIsInvalidDate(true);
    }
    if (!!currentTask && currentDate <= Date.parse(date)) {
      setIsInvalidDate(false);
      const newTask: TaskDetails = {
        id: 'task #' + Date.now() + Math.random(),
        value: currentTask,
        isCompleted: false,
        date: date
      };

      addTask(newTask);
      setTask('');
      setDate(today);
    }
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleSubmitTask();
    }
  };

  const handleTaskValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const editValue = removeWhitespace(e.target.value);
    setIsInvalidValue(!editValue ? true : false);
    setTask(editValue);
  };

  const handleTaskDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
    const currentDate = Date.parse(getTodayDate());
    setIsInvalidDate(currentDate > Date.parse(e.target.value));
  };

  return (
    <NewTask id='newTaskDiv'>
      <div className='flex'>
        <div id='taskWrapper'>
          <input
            id='newTaskInput'
            type='text'
            placeholder='+ Enter a task'
            value={task}
            onChange={handleTaskValueChange}
            onKeyDown={handleEnter}
          />
          <input id='newTaskDate' type='date' min={today} value={date} onKeyDown={handleEnter} onChange={handleTaskDateChange} />
        </div>
        <button onClick={handleSubmitTask} disabled={isInvalidValue || isInvalidDate}>
          Add Task
        </button>
      </div>
      {(isInvalidValue || isInvalidDate) && (
        <div className='warning'>
          <p>{warning}</p>
        </div>
      )}
    </NewTask>
  );
};

export default CreateTaskCard;
