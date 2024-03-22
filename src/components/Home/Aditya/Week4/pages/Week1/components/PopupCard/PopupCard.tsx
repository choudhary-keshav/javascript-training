import React, { useState } from 'react';
import { PopupDiv } from './popupCardStyles';
import { TaskDetails } from '../../interfaces/TaskDetailsInterface';
import { getTodayDate, removeWhitespace } from '../../utils/utils';

interface Props {
  heading: string;
  submitAction?: (value?: string, date?: string) => void;
  cancelAction?: () => void;
  taskObj?: TaskDetails;
  buttonValues?: { submit: string; cancel: string };
}

const PopupCard: React.FC<Props> = ({ heading, submitAction, cancelAction, taskObj, buttonValues }) => {
  const [taskValue, setTaskValue] = useState(!taskObj ? '' : taskObj.value);
  const [taskDate, setTaskDate] = useState(!taskObj ? '' : taskObj.date);
  const [isInvalidValue, setIsInvalidValue] = useState(false);
  const [isInvalidDate, setIsInvalidDate] = useState(false);

  const isEdit = !!taskObj;
  const isConfirm = submitAction && cancelAction && buttonValues;

  const handleTaskValueChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const editValue = removeWhitespace(e.target.value);
    setIsInvalidValue(!editValue);
    setTaskValue(editValue);
  };

  const handleTaskDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskDate(e.target.value);
    const currentDate = Date.parse(getTodayDate());
    if (currentDate > Date.parse(e.target.value)) {
      setIsInvalidDate(true);
    } else {
      setIsInvalidDate(false);
    }
  };

  const handleSubmit = () => {
    if (isConfirm) submitAction(taskValue, taskDate);
  };

  const handleCancel = () => {
    if (isConfirm) cancelAction();
  };

  return (
    <PopupDiv>
      <div id='mainDiv'>
        <h1 id='question'>{heading}</h1>
        {isEdit && (
          <>
            <label className='taskDetails' htmlFor='task'>
              Task:
            </label>
            <input className='taskDetails' type='text' name='task' value={taskValue} onChange={handleTaskValueChange} />
            <span className='warning'>{isInvalidValue ? 'Given value is Invalid' : ' '}</span>
            <label className='taskDetails' htmlFor='date'>
              Date:
            </label>
            <input className='taskDetails' type='date' name='date' value={taskDate} min={getTodayDate()} onChange={handleTaskDateChange} />
            <span className='warning'>{isInvalidDate ? 'Given date is Invalid' : ' '}</span>
          </>
        )}
        {isConfirm && (
          <div id='buttonDiv'>
            <button onClick={handleSubmit} disabled={isInvalidValue || isInvalidDate}>
              {buttonValues.submit}
            </button>
            <button onClick={handleCancel}>{buttonValues.cancel}</button>
          </div>
        )}
      </div>
    </PopupDiv>
  );
};

export default PopupCard;
