import React from 'react';
import CounterApp from './CounterComponent/Counter';
import AutoFocus from './AutoFocus/AutoFocus';
import FriendStatus from './FriendStatus/ShowFriendStatus/FriendStatus';
import { Week3Wrapper } from './index.styled';

const Week3Main: React.FC = () => {
  return (
    <Week3Wrapper>
      <CounterApp />
      <AutoFocus />
      <FriendStatus />
    </Week3Wrapper>
  );
};

export default Week3Main;
