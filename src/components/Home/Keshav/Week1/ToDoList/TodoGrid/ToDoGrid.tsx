import React, { FunctionComponent, useState } from 'react';
import EditModal from './EditModal/EditModal';
import { ToDoGridWrapper } from './Style';
import { Completed, Incompleted, Edit, Delete } from './../../assets';
import { useToDoContext } from '../../context/ToDoContext';
import DeleteModal from './DeleteModal/DeleteModal';

const ToDoGrid: FunctionComponent = () => {
  const { tasks, updateTaskStatus, filterValue } = useToDoContext();

  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [selectedTaskId, setSelectedTaskId] = useState<number>(-1);

  const changeCompletionStatus = (taskId: number) => {
    updateTaskStatus(taskId, '');
  };

  const closeEditModal = () => setShowEditModal(false);
  const closeDeleteModal = () => setShowDeleteModal(false);

  const handleEditClick = (taskId: number) => {
    setSelectedTaskId(taskId);
    setShowEditModal(true);
  };

  const handleDeleteClick = (taskId: number) => {
    setSelectedTaskId(taskId);
    setShowDeleteModal(true);
  };

  let filteredTasks = tasks;

  switch (filterValue) {
    case 'showCompleted':
      filteredTasks = tasks.filter((task) => task.isCompleted);
      break;
    case 'showPending':
      filteredTasks = tasks.filter((task) => !task.isCompleted);
      break;
    case 'orderDueDatesEarliest':
      filteredTasks = tasks.slice().sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());
      break;
    case 'orderDueDatesFurthest':
      filteredTasks = tasks.slice().sort((a, b) => new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime());
      break;
    default:
      break;
  }

  return (
    <ToDoGridWrapper>
      <table>
        <thead>
          <tr>
            <th>Task Status</th>
            <th className='taskDescription'>My Tasks</th>
            <th>Due Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task) => (
            <tr key={task.id}>
              <td>
                <img onClick={() => changeCompletionStatus(task.id)} src={task.isCompleted ? Completed : Incompleted} alt='' />
              </td>
              <td>{task.description}</td>
              <td>{task.dueDate}</td>
              <td>
                <div>
                  <img onClick={() => handleEditClick(task.id)} src={Edit} alt='' />
                  <img onClick={() => handleDeleteClick(task.id)} src={Delete} alt='' />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showEditModal && <EditModal taskId={selectedTaskId} closeEditModal={closeEditModal} />}
      {showDeleteModal && <DeleteModal taskId={selectedTaskId} closeDeleteModal={closeDeleteModal} />}
    </ToDoGridWrapper>
  );
};

export default ToDoGrid;
