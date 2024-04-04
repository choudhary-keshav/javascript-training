import React, { useState } from 'react';
import { TaskDetails } from '../../interfaces/tasks';
import { TaskWrapper } from './taskStyles';
import TrashCan from '../../assets/icons/trash-1-open-svgrepo-com.svg';
import Pencil from '../../assets/icons/pencil-edit-svgrepo-com.svg';
import PopupCard from '../PopupCard/PopupCard';
import { useDispatch } from 'react-redux';
import { deleteTodoTask, updateTodoTask } from '../../features/todoSlice';

interface Props {
  task: TaskDetails;
}

const Task: React.FC<Props> = ({ task }: Props) => {
  const [taskObj, setTaskObj] = useState<TaskDetails>(task);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleToggle = (): void => {
    const currentTask = { ...taskObj };
    currentTask.isCompleted = !taskObj.isCompleted;
    setTaskObj(currentTask);
    dispatch(updateTodoTask(currentTask));
  };

  const handleDelete = (): void => {
    setIsDeleting(!isDeleting);
    dispatch(deleteTodoTask(task.id));
  };

  const handleEdit = (newValue?: string, newDate?: string): void => {
    if (newValue && newDate) {
      const updatedTask = { ...taskObj };
      updatedTask.value = newValue;
      updatedTask.date = newDate;
      updatedTask.isCompleted = newValue === taskObj.value && taskObj.isCompleted;
      dispatch(updateTodoTask(updatedTask));
      setIsEditing(!isEditing);
      setTaskObj(updatedTask);
    }
  };

  return (
    <>
      <TaskWrapper id={task.id}>
        <input className='taskIsCompleted' type='checkbox' name='isCompleted' onChange={handleToggle} checked={taskObj.isCompleted} />
        <img src={Pencil} alt='Edit' onClick={() => setIsEditing(!isEditing)} />
        <input
          className={taskObj.isCompleted ? 'taskValue taskCompleted' : 'taskValue'}
          type='text'
          name='taskValue'
          value={taskObj.value}
          disabled
        />
        <input className='taskDueDate' type='date' name='taskDueDate' value={taskObj.date} disabled />
        <img src={TrashCan} alt='Delete' onClick={() => setIsDeleting(!isDeleting)} />
      </TaskWrapper>
      {isEditing && (
        <PopupCard
          heading='Edit Task:'
          submitAction={handleEdit}
          cancelAction={() => setIsEditing(!isEditing)}
          taskObj={taskObj}
          buttonValues={{ submit: 'Submit', cancel: 'Cancel' }}
        />
      )}
      {isDeleting && (
        <PopupCard
          heading='Do you really want to delete this task?'
          submitAction={handleDelete}
          cancelAction={() => setIsDeleting(!isDeleting)}
          buttonValues={{ submit: 'Delete', cancel: 'Cancel' }}
        />
      )}
    </>
  );
};

export default Task;
