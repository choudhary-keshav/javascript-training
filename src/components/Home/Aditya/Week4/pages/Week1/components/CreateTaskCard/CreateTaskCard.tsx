import React, { useState } from 'react';
import { CreateTaskCardWrapper } from './createTaskCardStyles';
import { TaskDetails } from '../../interfaces/TaskDetailsInterface';
import { removeWhitespace, getTodayDate } from '../../../../utils/functions';
import { createTaskInvalidWarning } from '../../../../utils/warning';

interface Props {
  addTask: (newTask: TaskDetails) => void;
}

const CreateTaskCard: React.FC<Props> = ({ addTask }) => {
  const today = getTodayDate();
  const [date, setDate] = useState<string>(today);
  const [task, setTask] = useState<string>('');
  const [isInvalidValue, setIsInvalidValue] = useState<boolean>(false);
  const [isInvalidDate, setIsInvalidDate] = useState<boolean>(false);

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

  const handleTaskValueChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const editValue = removeWhitespace(e.target.value);
    setIsInvalidValue(!editValue);
    setTask(editValue);
  };

  const handleTaskDateChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setDate(e.target.value);
    const currentDate = Date.parse(getTodayDate());
    setIsInvalidDate(currentDate > Date.parse(e.target.value));
  };

  return (
    <CreateTaskCardWrapper id='newTaskDiv'>
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
          <p>{createTaskInvalidWarning(isInvalidValue, isInvalidDate)}</p>
        </div>
      )}
    </CreateTaskCardWrapper>
  );
};

export default CreateTaskCard;
