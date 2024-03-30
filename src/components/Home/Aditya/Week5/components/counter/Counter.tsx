import React from 'react';
import { CounterWrapper } from './counterStyles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { incrementCounter, decrementCounter } from '../../features/counterSlice';

const Counter: React.FC = () => {
  const MyState: number = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  return (
    <CounterWrapper>
      <div className='App'>
        <h1 className='heading'>Counter with Redux</h1>
        <div className='counter'>
          <button id='decrement' onClick={() => dispatch(decrementCounter())}>
            -
          </button>
          <span id='countValue'>{MyState}</span>
          <button id='increment' onClick={() => dispatch(incrementCounter())}>
            +
          </button>
        </div>
      </div>
    </CounterWrapper>
  );
};

export default Counter;
