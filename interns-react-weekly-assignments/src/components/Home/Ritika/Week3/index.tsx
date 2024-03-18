import React from 'react';
import CounterApp from './CounterComponent/Counter'
import AutoFocus from './AutoFocus/AutoFocus';
import FriendStatus from './FriendStatus/FriendStatus';

const Index = () => {
    return (
       <>
       <CounterApp/>
       <AutoFocus/>
       <FriendStatus/>
       </>
    );
};

export default Index;