import React from 'react';
import { CounterWrapper } from './counterStyles';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from '../../actions';
import { RootState } from '../../rootReducer';

const Counter: React.FC = () => {
  const MyState: number = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  return (
    <CounterWrapper>
      <div className='App'>
        <h1 className='heading'>Counter with Redux</h1>
        <div className='counter'>
          <button id='increment' onClick={() => dispatch(increaseCounter())}>
            +
          </button>
          <span id='countValue'>{MyState}</span>
          <button id='decrement' onClick={() => dispatch(decreaseCounter())}>
            -
          </button>
        </div>
      </div>
    </CounterWrapper>
  );
};

export default Counter;
