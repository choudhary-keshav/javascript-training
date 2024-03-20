import React from 'react';
import useCounter from './useCounter';
import { CounterWrapper } from './Counter.styled';

const CounterApp: React.FC = () => {
  const [count, handleIncrement, handleDecrement] = useCounter();
  return (
    <CounterWrapper>
      <p className='countValueToChange'>{count}</p>
      <div className='buttonContainer'>
        <button onClick={handleDecrement} className='decrementButton'>
          Decrement
        </button>
        <button onClick={handleIncrement} className='incrementButton'>
          Increment
        </button>
      </div>
    </CounterWrapper>
  );
};

export default CounterApp;
