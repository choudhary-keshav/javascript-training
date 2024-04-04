import React from 'react';
import { CreateTaskCardWrapper } from './createTaskCardStyles';
import { TaskDetails } from '../../interfaces/tasks';
import { removeWhitespace, getTodayDate } from '../../../../utils/functions';
import { createTaskInvalidWarning } from '../../../../utils/warning';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setCreateTaskDate, setCreateTaskIsValidDate, setCreateTaskIsValidValue, setCreateTaskValue } from '../../features/createTaskSlice';
import { addTodoTask } from '../../features/todoSlice';

const CreateTaskCard: React.FC = () => {
  const today = getTodayDate();
  const createTask = useSelector((state: RootState) => state.createTask);
  const dispatch = useDispatch();

  const handleSubmitTask = (): void => {
    const currentTask = removeWhitespace(createTask.value);
    const currentDate = Date.parse(today);
    if (currentDate > Date.parse(createTask.date)) {
      dispatch(setCreateTaskIsValidDate(false));
    }
    if (currentTask && currentDate <= Date.parse(createTask.date)) {
      dispatch(setCreateTaskIsValidDate(true));
      const newTask: TaskDetails = {
        id: 'task #' + Date.now() + Math.random(),
        value: currentTask,
        isCompleted: false,
        date: createTask.date
      };
      dispatch(addTodoTask(newTask));
      dispatch(setCreateTaskValue(''));
      dispatch(setCreateTaskDate(today));
    }
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleSubmitTask();
    }
  };

  const handleTaskValueChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const editValue = removeWhitespace(e.target.value);
    dispatch(setCreateTaskIsValidValue(editValue));
    dispatch(setCreateTaskValue(editValue));
  };

  const handleTaskDateChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const currentDate = Date.parse(today);
    dispatch(setCreateTaskIsValidDate(currentDate <= Date.parse(e.target.value)));
    dispatch(setCreateTaskDate(e.target.value));
  };

  return (
    <CreateTaskCardWrapper id='newTaskDiv'>
      <div className='flex'>
        <div id='taskWrapper'>
          <input
            id='newTaskInput'
            type='text'
            placeholder='+ Enter a task'
            value={createTask.value}
            onChange={handleTaskValueChange}
            onKeyDown={handleEnter}
          />
          <input id='newTaskDate' type='date' min={today} value={createTask.date} onKeyDown={handleEnter} onChange={handleTaskDateChange} />
        </div>
        <button onClick={handleSubmitTask} disabled={!createTask.isValidValue || !createTask.isValidDate}>
          Add Task
        </button>
      </div>
      {(!createTask.isValidValue || !createTask.isValidDate) && (
        <div className='warning'>
          <p>{createTaskInvalidWarning(!createTask.isValidValue, !createTask.isValidDate)}</p>
        </div>
      )}
    </CreateTaskCardWrapper>
  );
};

export default CreateTaskCard;
