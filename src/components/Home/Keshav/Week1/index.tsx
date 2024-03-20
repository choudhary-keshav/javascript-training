import React from 'react';
import { Week1Wrapper } from './styles';
import ToDoList from './ToDoList/ToDoList';
import { ToDoProvider } from './context/ToDoContext';

const Week1: React.FC = () => {
  return (
    <Week1Wrapper>
      <ToDoProvider>
        <ToDoList />
      </ToDoProvider>
    </Week1Wrapper>
  );
};

export default Week1;
