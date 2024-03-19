import React from 'react';
import CounterApp from './CounterComponent/Counter'
import AutoFocus from './AutoFocus/AutoFocus';
import FriendStatus from './FriendStatus/FriendStatus';
import { Week3Wrapper } from './index.styled';

const RWeek3 = () => {
    return (
       <Week3Wrapper>
       <CounterApp/>
       <AutoFocus/>
       <FriendStatus/>
       </Week3Wrapper>
    );
};

export default RWeek3;