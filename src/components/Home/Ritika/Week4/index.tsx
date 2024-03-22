import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Week4Wrapper } from './index.styled';

const Week4: React.FC = () => {
  return (
    <Week4Wrapper>
      <Link to='home'>Home</Link>
      <Outlet />
    </Week4Wrapper>
  );
};

export default Week4;
