import React, { FunctionComponent } from 'react';
import { useState } from 'react';
import { useToDoContext } from '../../context/ToDoContext';
import { TaskInputWrapper } from './Style';
import { Task } from '../../interface/interfaces';

const TaskInput: FunctionComponent = () => {
  const { addTask } = useToDoContext();

  const [task, setTask] = useState<Task>({
    id: Math.random(),
    dueDate: '',
    description: '',
    isCompleted: false
  });

  const handleDueDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, dueDate: event.target.value });
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, description: event.target.value });
  };

  const isBothInputFilled = !!task.dueDate && !!task.description.trim();

  const handleAddTask = () => {
    if (!task.description.trim() || !task.dueDate) {
      return;
    }
    addTask(task);
    setTask({ dueDate: '', description: '', isCompleted: false, id: Math.random() });
  };

  return (
    <TaskInputWrapper>
      <div className='taskInputContainer'>
        <div className='dueDateBox'>
          <p className='dueHeading'>Due Date</p>
          <input
            type='date'
            className='dueDate'
            placeholder='Enter due date'
            min={new Date().toISOString().split('T')[0]}
            value={task.dueDate}
            onChange={handleDueDateChange}
          />
        </div>
        <input
          type='text'
          className='taskInputBox'
          placeholder='Write upcoming tasks here...'
          value={task.description}
          onChange={handleDescriptionChange}
        />
        <button onClick={handleAddTask} className={isBothInputFilled ? 'addTaskButton' : 'addTaskButton unclickable'}>
          Add Task
        </button>
      </div>
    </TaskInputWrapper>
  );
};

export default TaskInput;
