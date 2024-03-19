import React from 'react';
import { Week3Wrapper } from './styles';
import UseStateHook from './UseStateHook';
import UseEffectHook from './UseEffectHook';
import CustomHook from './CustomHook';

const Week3 = () => {
  return (
    <Week3Wrapper>
      <UseStateHook />
      <UseEffectHook />
      <CustomHook />
    </Week3Wrapper>
  );
};

export default Week3;
