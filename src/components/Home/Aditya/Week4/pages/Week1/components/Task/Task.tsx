import React, { useState } from 'react';
import { TaskDetails } from '../../interfaces/TaskDetailsInterface';
import { TaskDiv } from './taskStyles';
import TrashCan from '../../assets/icons/trash-1-open-svgrepo-com.svg';
import Pencil from '../../assets/icons/pencil-edit-svgrepo-com.svg';
import PopupCard from '../PopupCard/PopupCard';

interface Props {
  task: TaskDetails;
  deleteTask: (taskId: string) => void;
  updateTask: (updatedTask: TaskDetails) => void;
}

const Task: React.FC<Props> = ({ task, deleteTask, updateTask }: Props) => {
  const [taskObj, setTaskObj] = useState<TaskDetails>(task);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const handleToggle = (): void => {
    const currentTask = { ...taskObj };
    currentTask.isCompleted = !taskObj.isCompleted;
    setTaskObj(currentTask);
    updateTask(currentTask);
  };

  const handleDelete = (): void => {
    toggleIsDeleting();
    deleteTask(task.id);
  };

  const handleEdit = (newValue?: string, newDate?: string): void => {
    if (newValue && newDate) {
      const updatedTask = { ...taskObj };
      updatedTask.value = newValue;
      updatedTask.date = newDate;
      updatedTask.isCompleted = newValue === taskObj.value && taskObj.isCompleted;
      updateTask(updatedTask);
      toggleIsEditing();
      setTaskObj(updatedTask);
    }
  };

  const toggleIsDeleting = () => {
    setIsDeleting(!isDeleting);
  };

  const toggleIsEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <>
      <TaskDiv id={task.id}>
        <input className='taskIsCompleted' type='checkbox' name='isCompleted' onChange={handleToggle} checked={taskObj.isCompleted} />
        <img src={Pencil} width={'20px'} alt='Edit' onClick={toggleIsEditing} />
        <input
          className={taskObj.isCompleted ? 'taskValue taskCompleted' : 'taskValue'}
          type='text'
          name='taskValue'
          value={taskObj.value}
          disabled
        />
        <input className='taskDueDate' type='date' name='taskDueDate' value={taskObj.date} disabled />
        <img src={TrashCan} width={'20px'} alt='Delete' onClick={toggleIsDeleting} />
      </TaskDiv>
      {isEditing && (
        <PopupCard
          heading='Edit Task:'
          submitAction={handleEdit}
          cancelAction={toggleIsEditing}
          taskObj={taskObj}
          buttonValues={{ submit: 'Submit', cancel: 'Cancel' }}
        />
      )}
      {isDeleting && (
        <PopupCard
          heading='Do you really want to delete this task?'
          submitAction={handleDelete}
          cancelAction={toggleIsDeleting}
          buttonValues={{ submit: 'Delete', cancel: 'Cancel' }}
        />
      )}
    </>
  );
};

export default Task;
