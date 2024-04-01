import React from 'react';
import { CounterWrapper } from './counterStyles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { incrementCount, decrementCount } from '../../features/counterSlice';

const Counter: React.FC = () => {
  // eslint-disable-next-line
  const count = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <CounterWrapper>
      <div className='app'>
        <h1 className='heading'>Counter with Redux</h1>
        <div className='counter'>
          <button id='decrement' onClick={() => dispatch(decrementCount())}>
            -
          </button>
          <span id='countValue'>{count}</span>
          <button id='increment' onClick={() => dispatch(incrementCount())}>
            +
          </button>
        </div>
      </div>
    </CounterWrapper>
  );
};

export default Counter;
