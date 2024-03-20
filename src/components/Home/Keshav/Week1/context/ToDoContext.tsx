import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Task, ToDoContextType } from './../interface/interfaces';

const ToDoContext = createContext<ToDoContextType | undefined>(undefined);

export const useToDoContext = () => {
  const context = useContext(ToDoContext);
  if (!context) {
    throw new Error('useToDoContext must be used within a ToDoProvider');
  }
  return context;
};

export const ToDoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const getTasksFromSessionStorage = (): Task[] => {
    const storedTasks = sessionStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  };

  const [tasks, setTasks] = useState<Task[]>(getTasksFromSessionStorage);

  const [filterValue, setFilterValue] = useState<string>('showAll');

  const addTask = (task: Task) => {
    task.isCompleted = false;
    task.id = Math.random();
    setTasks([task, ...tasks]);
  };

  const createUpdateTaskFunction = (updateField: string) => (taskId: number, value: string) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) => {
        if (task.id === taskId) {
          if (updateField === 'isCompleted') {
            return {
              ...task,
              [updateField]: !task.isCompleted
            };
          }
          return {
            ...task,
            [updateField]: value
          };
        }
        return task;
      });
      return updatedTasks;
    });
  };

  const updateTaskStatus = createUpdateTaskFunction('isCompleted');
  const updateDueDate = createUpdateTaskFunction('dueDate');
  const updateTaskDescription = createUpdateTaskFunction('description');

  return (
    <ToDoContext.Provider
      value={{
        tasks,
        filterValue,
        addTask,
        updateTaskStatus,
        updateDueDate,
        updateTaskDescription,
        setTasks,
        setFilterValue
      }}>
      {children}
    </ToDoContext.Provider>
  );
};
