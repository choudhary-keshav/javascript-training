import React from 'react';
import { useToDoContext } from '../../context/ToDoContext';
import { TaskSummaryWrapper } from './Style';

const TaskSummary: React.FC = () => {
  const { tasks } = useToDoContext();

  const taskSummary = {
    totalTasks: tasks.length,
    pendingTasks: tasks.filter((task) => !task.isCompleted).length,
    completedTasks: tasks.filter((task) => task.isCompleted).length
  };

  return (
    <TaskSummaryWrapper>
      <div className='taskSummary'>
        <h3>Task Summary</h3>
        <br />
        <p>
          Completed Tasks - <span id='completedCount'>{taskSummary.completedTasks}</span>
        </p>
        <p>
          Pending Tasks - <span id='pendingCount'>{taskSummary.pendingTasks}</span>
        </p>
        <p>
          Total Tasks - <span id='totalCount'>{taskSummary.totalTasks}</span>
        </p>
      </div>
    </TaskSummaryWrapper>
  );
};

export default TaskSummary;
