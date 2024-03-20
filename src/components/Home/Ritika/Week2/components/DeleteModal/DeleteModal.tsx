import React from 'react';
import { Task } from '../../utils/interfaces/interfaces';
import { TaskFormWrapper } from '../TaskForm/TaskForm.styled';
import message from '../../utils/constants/constants.json';

const DeleteModal: React.FC<{
  setTasksToShow: React.Dispatch<React.SetStateAction<Task[]>>;
  tasksToShow: Task[];
  deleteTaskId: number;
  setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}> = ({ setTasksToShow, tasksToShow, deleteTaskId, setShowDeleteModal, setTasks }) => {
  const deleteTask = (index: number) => {
    const newTaskList = tasksToShow.filter((task) => task.id !== index);
    setTasksToShow(newTaskList);
    setTasks(newTaskList);
    localStorage.setItem('tasks', JSON.stringify(newTaskList));
    setShowDeleteModal(false);
  };

  return (
    <TaskFormWrapper>
      <div className='addTask'>
        <div className='cross' onClick={() => setShowDeleteModal(false)}>
          x
        </div>
        <div className='header'>{message.deleteConfirmation}</div>
        <div className='inputFieldContainer'>
          <button onClick={() => deleteTask(deleteTaskId)}>Confirm</button>
        </div>
      </div>
    </TaskFormWrapper>
  );
};

export default DeleteModal;
