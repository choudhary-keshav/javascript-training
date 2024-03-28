import React from 'react';
import Counter from './components/counter/Counter';
import Form from './components/form/Form';
import { Assignment3Wrapper } from './styles';
import Status from './components/status/Status';

const Week3: React.FC = () => {
  return (
    <Assignment3Wrapper>
      <div id='counter' className='relative'>
        <Counter />
      </div>
      <div id='form' className='relative'>
        <Form />
      </div>
      <div id='status' className='relative'>
        <Status />
      </div>
    </Assignment3Wrapper>
  );
};

export default Week3;
