import React, { useEffect } from 'react';
import { PopupCardWrapper } from './popupCardStyles';
import { TaskDetails } from '../../interfaces/TaskDetailsInterface';
import { getTodayDate, removeWhitespace } from '../../../../utils/functions';
import { popupInvalidDateWarning, popupInvalidValueWarning } from '../../../../utils/warning';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setPopupTaskDate, setPopupTaskIsValidDate, setPopupTaskIsValidValue, setPopupTaskValue } from '../../features/popupCardSlice';

interface Props {
  heading: string;
  submitAction?: (value?: string, date?: string) => void;
  cancelAction?: () => void;
  taskObj?: TaskDetails;
  buttonValues?: { submit: string; cancel: string };
}

const PopupCard: React.FC<Props> = ({ heading, submitAction, cancelAction, taskObj, buttonValues }) => {
  const popupTask = useSelector((state: RootState) => state.popupTask);
  const dispatch = useDispatch();

  useEffect(() => {
    if (taskObj) {
      dispatch(setPopupTaskValue(taskObj.value));
      dispatch(setPopupTaskDate(taskObj.date));
    }
  }, []);

  const isConfirm = submitAction && cancelAction && buttonValues;

  const handleTaskValueChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const editValue = removeWhitespace(e.target.value);
    dispatch(setPopupTaskIsValidValue(editValue));
    dispatch(setPopupTaskValue(editValue));
  };

  const handleTaskDateChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const currentDate = Date.parse(getTodayDate());
    dispatch(setPopupTaskIsValidDate(currentDate <= Date.parse(e.target.value)));
    dispatch(setPopupTaskDate(e.target.value));
  };

  const handleSubmit = (): void => {
    submitAction?.(popupTask.value, popupTask.date);
  };

  const handleCancel = (): void => {
    cancelAction?.();
  };

  return (
    <PopupCardWrapper>
      <div id='mainDiv'>
        <h1 id='question'>{heading}</h1>
        {taskObj && (
          <>
            <label className='taskDetails' htmlFor='task'>
              Task:
            </label>
            <input className='taskDetails' type='text' name='task' value={popupTask.value} onChange={handleTaskValueChange} />
            <span className='warning'>{!popupTask.isValidValue ? popupInvalidValueWarning : ' '}</span>
            <label className='taskDetails' htmlFor='date'>
              Date:
            </label>
            <input
              className='taskDetails'
              type='date'
              name='date'
              value={popupTask.date}
              min={getTodayDate()}
              onChange={handleTaskDateChange}
            />
            <span className='warning'>{!popupTask.isValidDate ? popupInvalidDateWarning : ' '}</span>
          </>
        )}
        {isConfirm && (
          <div id='buttonDiv'>
            <button onClick={handleSubmit} disabled={!popupTask.isValidValue || !popupTask.isValidDate}>
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
