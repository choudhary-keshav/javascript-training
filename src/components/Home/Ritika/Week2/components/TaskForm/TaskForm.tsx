import React, { useCallback, useState, useEffect } from 'react';
import { TaskFormWrapper } from './TaskForm.styled';
import { Task } from '../../utils/interfaces/interfaces';
import warning from '../../utils/constants/constants.json';
import { addFormValidations } from '../../utils/validations/validations';

const TaskForm: React.FunctionComponent<{
  setTasksToShow: React.Dispatch<React.SetStateAction<Task[]>>;
  selectedTask: Task | null;
  setShowAddTask: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setTasksToShow, selectedTask, setShowAddTask }) => {
  const [taskName, setTaskName] = useState<string>(selectedTask?.value ?? '');
  const [taskDescription, setTaskDescription] = useState<string>(selectedTask?.description ?? '');
  const [taskCompletionDate, setTaskCompletionDate] = useState<string>(selectedTask?.date ?? '');
  const taskStatus = 'Pending';
  const [showWarning, setShowWarning] = useState<boolean>(false);
  const [warningMessage, setWarningMessage] = useState<string>('');
  const [exceedingLimitWarning, setExceedingLimitWarning] = useState(false);
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    setTasksToShow(tasks);
  }, [tasks]);

  useEffect(() => {
    if (selectedTask) {
      setTaskName(selectedTask.value);
      setTaskDescription(selectedTask.description);
      setTaskCompletionDate(selectedTask.date);
    } else {
      setTaskName('');
      setTaskDescription('');
      setTaskCompletionDate('');
    }
  }, [selectedTask]);

  const handleInputChange = (setStateFunction: React.Dispatch<React.SetStateAction<string>>, value: string, maxLength: number) => {
    if (value.length <= maxLength) {
      setStateFunction(value);
      setShowWarning(false);
      setExceedingLimitWarning(false);
    } else {
      setExceedingLimitWarning(true);
    }
  };
  const popUpWithWarning = (warning: string | null) => {
    if (warning) {
      setShowWarning(true);
      setWarningMessage(warning);
    }
  };
  const addTasks = useCallback(() => {
    if (addFormValidations(taskName, taskDescription, taskCompletionDate)) {
      popUpWithWarning(addFormValidations(taskName, taskDescription, taskCompletionDate) || null);
      return;
    }

    const newTask: Task = {
      id: Math.floor(Math.random() * 1000),
      value: taskName,
      description: taskDescription,
      date: taskCompletionDate,
      status: taskStatus
    };
    const taskTemp = tasks;
    taskTemp.unshift(newTask);
    setTasks((previousTasks) => [...previousTasks, newTask]);
    setTaskDescription('');
    setTaskName('');
    setTaskCompletionDate('');
    setShowAddTask(false);
    localStorage.setItem('tasks', JSON.stringify(taskTemp));
  }, [setShowAddTask, taskCompletionDate, taskDescription, taskName, tasks, taskStatus]);

  const editTasks = () => {
    if (addFormValidations(taskName, taskDescription, taskCompletionDate)) {
      popUpWithWarning(addFormValidations(taskName, taskDescription, taskCompletionDate) || null);
      return;
    }
    let updatedTasks: Task[] = [];
    if (selectedTask) {
      const newTask: Task = {
        id: selectedTask.id,
        value: taskName,
        description: taskDescription,
        date: taskCompletionDate,
        status: taskStatus
      };
      updatedTasks = tasks.map((task) => (task.id === selectedTask.id ? newTask : task));
      setTasks(updatedTasks);
      setTasksToShow(updatedTasks);
    }
    setTaskDescription('');
    setTaskName('');
    setTaskCompletionDate('');
    setShowAddTask(false);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };
  return (
    <TaskFormWrapper>
      <div className='addTask'>
        <div
          onClick={() => {
            setShowAddTask(false);
          }}
          className='cross'>
          x
        </div>
        <div className='header'>{selectedTask ? <h1> Edit Task</h1> : <h1>Add Task</h1>}</div>
        <div className='inputFieldContainer'>
          <input
            type='text'
            placeholder='Item'
            value={taskName}
            onChange={(e) => handleInputChange(setTaskName, e.target.value.slice(0, 30), 30)}
          />
          {exceedingLimitWarning && <p>{warning.properDetailsWarning}</p>}
          <input
            className='description-input'
            type='text'
            placeholder='Description'
            value={taskDescription}
            onChange={(e) => handleInputChange(setTaskDescription, e.target.value.slice(0, 70), 70)}
          />
          {exceedingLimitWarning && <p>{warning.properDetailsWarning}</p>}
          <input
            type='date'
            value={taskCompletionDate}
            onChange={(e) => {
              setTaskCompletionDate(e.target.value);
              setShowWarning(false);
            }}
          />
          {showWarning && (
            <div className='warning-popup'>
              <h3>{warningMessage}</h3>
            </div>
          )}
          {selectedTask ? <button onClick={editTasks}>Edit</button> : <button onClick={addTasks}>Add</button>}
        </div>
      </div>
    </TaskFormWrapper>
  );
};

export default TaskForm;
