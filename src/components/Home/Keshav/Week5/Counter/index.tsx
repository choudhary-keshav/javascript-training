import React from 'react';
import { CounterWrapper } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCounter, decrementCounter } from '../redux/actions/CounterActions';
import { RootState } from '../redux/actions/types';

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.count);
  const dispatch = useDispatch();

  const increment = ():void => {
    dispatch(incrementCounter());
  };

  const decrement = ():void => {
    dispatch(decrementCounter());
  };

  return (
    <CounterWrapper>
      <h1>Counter using Redux</h1>
      <span className='counterHeading'>Counter : {count}</span>
      <br />
      <br />
      <button className='btn' onClick={increment}>
        Increment
      </button>
      <button className='btn' onClick={decrement}>
        Decrement
      </button>
    </CounterWrapper>
  );
};

export default Counter;
