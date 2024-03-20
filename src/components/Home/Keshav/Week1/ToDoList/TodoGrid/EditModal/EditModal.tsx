import React, { useState } from 'react';
import { Button, EditModalWrapper } from './Style';
import { useToDoContext } from '../../../context/ToDoContext';

interface EditModalProps {
  closeEditModal: () => void;
  taskId: number;
}

const EditModal: React.FC<EditModalProps> = ({ closeEditModal, taskId }) => {
  const { tasks, updateDueDate, updateTaskDescription } = useToDoContext();
  const [editedTaskDescription, setEditedTaskDescription] = useState(tasks.find((task) => task.id === taskId)?.description || '');
  const [editedDueDate, setEditedDueDate] = useState(tasks.find((task) => task.id === taskId)?.dueDate || '');

  const isBothInputFilled = !!editedDueDate && !!editedTaskDescription.trim();

  const updateTask = () => {
    if (!editedTaskDescription.trim() || !editedDueDate) {
      return;
    }
    updateDueDate(taskId, editedDueDate);
    updateTaskDescription(taskId, editedTaskDescription);
    closeEditModal();
  };

  return (
    <EditModalWrapper>
      <div className='editModalWrapper' onClick={closeEditModal}></div>
      <div className='editModalContainer'>
        <span onClick={closeEditModal} className='cross'>
          X
        </span>
        <input
          className='taskInputBox'
          value={editedTaskDescription}
          onChange={(e) => setEditedTaskDescription(e.target.value)}
          type='text'
          placeholder='Enter task desription'
        />
        <br /> <br />
        <input
          min={new Date().toISOString().split('T')[0]}
          value={editedDueDate}
          onChange={(e) => setEditedDueDate(e.target.value)}
          className='dueDate'
          type='date'
        />
        <br />
        <br />
        <Button onClick={closeEditModal} className='button'>
          Cancel
        </Button>
        <Button onClick={updateTask} className={isBothInputFilled ? 'button' : 'button unclickable'}>
          Update
        </Button>
      </div>
    </EditModalWrapper>
  );
};

export default EditModal;
