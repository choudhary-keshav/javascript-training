import React from 'react';
import CreateTaskCard from './components/CreateTaskCard/CreateTaskCard';
import { useState, useEffect } from 'react';
import { TaskDetails } from './interfaces/TaskDetailsInterface';
import TaskList from './components/TaskList/TaskList';
import { AppWrapper } from './styles';

const App: React.FC = () => {
  const getLocalTasks = (): TaskDetails[] => {
    return JSON.parse(localStorage.getItem('tasks') ?? '[]');
  };

  const setLocalTasks = (tasks: TaskDetails[]): void => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const [tasks, setTasks] = useState<TaskDetails[]>(getLocalTasks());
  const [currentFilter, setCurrentFilter] = useState<string>('All Tasks');
  const [showTasks, setShowTasks] = useState<TaskDetails[]>(getLocalTasks());

  useEffect(() => {
    switch (currentFilter) {
      case 'Due Closest':
      case 'Due Farthest': {
        const tempTasks = [...tasks];
        const sortedTasks = tempTasks.sort((task1, task2) => {
          const date1 = new Date(task1.date);
          const date2 = new Date(task2.date);
          return date1.getTime() - date2.getTime();
        });
        currentFilter === 'Due Farthest' && sortedTasks.reverse();
        setShowTasks(sortedTasks);
        break;
      }
      case 'Not Completed':
        setShowTasks(tasks.filter((task: TaskDetails) => !task.isCompleted));
        break;
      case 'Completed':
        setShowTasks(tasks.filter((task: TaskDetails) => task.isCompleted));
        break;
      default:
        setShowTasks(tasks);
    }
    setLocalTasks(tasks);
  }, [tasks, currentFilter]);

  const addTask = (newTask: TaskDetails): void => {
    setTasks((oldTasks) => [newTask, ...oldTasks]);
  };

  const deleteTask = (taskId: string): void => {
    setTasks((oldTasks) => oldTasks.filter((task: TaskDetails) => task.id !== taskId));
  };

  const updateTask = (updatedTask: TaskDetails): void => {
    const currentTasks = [...tasks].map((task: TaskDetails) => (task.id === updatedTask.id ? updatedTask : task));
    setTasks(currentTasks);
  };

  const handleFilterChoice = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setCurrentFilter(event.target.value);
  };

  return (
    <AppWrapper>
      <div className='centerWrapper'>
        <TaskList
          tasks={tasks}
          handleFilterChoice={handleFilterChoice}
          showTasks={showTasks}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      </div>
      <CreateTaskCard addTask={addTask} />
    </AppWrapper>
  );
};
export default App;
