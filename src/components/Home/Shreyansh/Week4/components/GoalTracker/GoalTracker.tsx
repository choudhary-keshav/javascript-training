import React, { useState } from 'react';
import { GoalTrackerWrapper } from './GoalTrackerStyle';
import { Goal } from './interface';

const GoalTracker: React.FC = () => {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [newGoal, setNewGoal] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [deadline, setDeadline] = useState<string>('');

  const handleAddGoal = (): void => {
    if (newGoal.trim() && deadline && description) {
      const newGoalObj: Goal = {
        id: Date.now(),
        title: newGoal,
        completed: false,
        description,
        deadline
      };
      setGoals((prevGoals) => [...prevGoals, newGoalObj]);
      setNewGoal('');
      setDescription('');
      setDeadline('');
    }
  };

  const handleToggleCompletion = (id: number): void => {
    setGoals((prevGoals) =>
      prevGoals.map((goal) => {
        if (goal.id === id) {
          return { ...goal, completed: !goal.completed };
        }
        return goal;
      })
    );
  };

  const handleDeleteGoal = (id: number): void => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <GoalTrackerWrapper>
      <div className='goalTrackerContainer'>
        <h2>Personal Goal Tracker</h2>
        <div className='goalInput'>
          <input type='text' placeholder='Enter your goal' value={newGoal} onChange={(e) => setNewGoal(e.target.value)} />
          <input type='text' placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
          <input
            type='date'
            placeholder='Deadline (optional)'
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
          />
          <button onClick={handleAddGoal}>Add Goal</button>
        </div>
        <div className='goalList'>
          {goals.map((goal) => (
            <div key={goal.id} className={`goalItem ${goal.completed ? 'completed' : ''}`}>
              <div>
                <span id='title'>{goal.title}</span>
                {goal.description && <p id='description'>Description: {goal.description}</p>}
                {goal.deadline && <p id='deadline'>Deadline: {goal.deadline}</p>}
              </div>
              <div>
                <input type='checkbox' checked={goal.completed} onChange={() => handleToggleCompletion(goal.id)} />
                <button onClick={() => handleDeleteGoal(goal.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </GoalTrackerWrapper>
  );
};

export default GoalTracker;
