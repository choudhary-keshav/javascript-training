import React, { useState } from 'react';
import { PopupCardWrapper } from './popupCardStyles';
import { TaskDetails } from '../../interfaces/TaskDetailsInterface';
import { getTodayDate, removeWhitespace } from '../../../../utils/functions';
import { popupInvalidDateWarning, popupInvalidValueWarning } from '../../../../utils/warning';

interface Props {
  heading: string;
  submitAction?: (value?: string, date?: string) => void;
  cancelAction?: () => void;
  taskObj?: TaskDetails;
  buttonValues?: { submit: string; cancel: string };
}

const PopupCard: React.FC<Props> = ({ heading, submitAction, cancelAction, taskObj, buttonValues }) => {
  const [taskValue, setTaskValue] = useState<string>(!taskObj ? '' : taskObj.value);
  const [taskDate, setTaskDate] = useState<string>(!taskObj ? '' : taskObj.date);
  const [isInvalidValue, setIsInvalidValue] = useState<boolean>(false);
  const [isInvalidDate, setIsInvalidDate] = useState<boolean>(false);

  const isConfirm = submitAction && cancelAction && buttonValues;

  const handleTaskValueChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const editValue = removeWhitespace(e.target.value);
    setIsInvalidValue(!editValue);
    setTaskValue(editValue);
  };

  const handleTaskDateChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTaskDate(e.target.value);
    const currentDate = Date.parse(getTodayDate());
    setIsInvalidDate(currentDate > Date.parse(e.target.value));
  };

  const handleSubmit = (): void => {
    submitAction?.(taskValue, taskDate);
  };

  const handleCancel = (): void => {
    cancelAction?.();
  };

  return (
    <PopupCardWrapper>
      <div id='mainDiv'>
        <h1 id='question'>{heading}</h1>
        {!!taskObj && (
          <>
            <label className='taskDetails' htmlFor='task'>
              Task:
            </label>
            <input className='taskDetails' type='text' name='task' value={taskValue} onChange={handleTaskValueChange} />
            <span className='warning'>{isInvalidValue ? popupInvalidValueWarning : ' '}</span>
            <label className='taskDetails' htmlFor='date'>
              Date:
            </label>
            <input className='taskDetails' type='date' name='date' value={taskDate} min={getTodayDate()} onChange={handleTaskDateChange} />
            <span className='warning'>{isInvalidDate ? popupInvalidDateWarning : ' '}</span>
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
    </PopupCardWrapper>
  );
};

export default PopupCard;
