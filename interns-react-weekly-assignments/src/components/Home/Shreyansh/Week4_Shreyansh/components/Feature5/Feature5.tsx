import React, { useState } from "react";
import { Feature5Wrapper } from "./Feature5Style";
import { Goal } from "./interfaceFeature5";

const Feature5: React.FC = () => {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [newGoal, setNewGoal] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewGoal(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleDeadlineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeadline(e.target.value);
  };

  const handleAddGoal = () => {
    if (newGoal.trim()) {
      const newGoalObj: Goal = {
        id: Date.now(),
        title: newGoal,
        completed: false,
        description,
        deadline,
      };
      setGoals((prevGoals) => [...prevGoals, newGoalObj]);
      setNewGoal("");
      setDescription("");
      setDeadline("");
    }
  };

  const handleToggleCompletion = (id: number) => {
    setGoals((prevGoals) =>
      prevGoals.map((goal) => {
        if (goal.id === id) {
          return { ...goal, completed: !goal.completed };
        }
        return goal;
      })
    );
  };

  const handleDeleteGoal = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <Feature5Wrapper>
      <div className="goal-tracker-container">
        <h2>Personal Goal Tracker</h2>
        <div className="goal-input">
          <input
            type="text"
            placeholder="Enter your goal"
            value={newGoal}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Description (optional)"
            value={description}
            onChange={handleDescriptionChange}
          />
          <input
            type="text"
            placeholder="Deadline (optional)"
            value={deadline}
            onChange={handleDeadlineChange}
          />
          <button onClick={handleAddGoal}>Add Goal</button>
        </div>
        <div className="goal-list">
          {goals.map((goal) => (
            <div
              key={goal.id}
              className={`goal-item ${goal.completed ? "completed" : ""}`}
            >
              <div>
                <span>{goal.title}</span>
                {goal.description && (
                  <p id="description">Description: {goal.description}</p>
                )}
                {goal.deadline && (
                  <p id="deadline">Deadline: {goal.deadline}</p>
                )}
              </div>
              <div>
                <input
                  type="checkbox"
                  checked={goal.completed}
                  onChange={() => handleToggleCompletion(goal.id)}
                />
                <button onClick={() => handleDeleteGoal(goal.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Feature5Wrapper>
  );
};

export default Feature5;
