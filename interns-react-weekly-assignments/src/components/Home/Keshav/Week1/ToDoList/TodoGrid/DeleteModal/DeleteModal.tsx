import React, { FunctionComponent } from 'react';
import { DeleteModalWrapper } from './Style';
import { useToDoContext } from '../../../context/ToDoContext';

interface DeleteModalProps {
  closeDeleteModal: () => void;
  taskId: number;
}

const DeleteModal: FunctionComponent<DeleteModalProps> = ({ closeDeleteModal, taskId }) => {
  const { tasks, setTasks } = useToDoContext();

  const deleteTask = () => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    closeDeleteModal();
  };

  return (
    <DeleteModalWrapper>
      <div className='deleteModalWrapper' onClick={closeDeleteModal}></div>
      <div className='deleteModalContainer'>
        <span onClick={closeDeleteModal} className='cross'>
          X
        </span>
        <h2>Do you really want to delete the item from ToDo List?</h2>
        <br />
        <br />
        <div className='buttons'>
          <button onClick={closeDeleteModal} className='button'>
            No
          </button>
          <button onClick={deleteTask} className='button'>
            Yes
          </button>
        </div>
      </div>
    </DeleteModalWrapper>
  );
};

export default DeleteModal;
