import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { increment, decrement, incrementBy, reset } from '../redux/features/counterSlice';
import { CounterWrapper } from './counter.styled';

const Counter: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const value = useSelector((state: RootState) => state.counter.counter);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(incrementBy(parseInt(inputValue)));
    setInputValue('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (/^[0-9]*$/.test(e.target.value)) {
      setInputValue(e.target.value);
    }
  };

  return (
    <CounterWrapper>
      <button className='counterButton' onClick={() => dispatch(decrement())}>
        -
      </button>
      <div className='counterValue'>{value}</div>
      <button className='counterButton' onClick={() => dispatch(increment())}>
        +
      </button>
      <input className='incrementByValueInput' type='text' value={inputValue} onChange={handleInputChange}/>
      <button className='incrementByValueButton' onClick={handleIncrement} disabled={!inputValue}>
        ADD
      </button>
      <button className='resetButton' onClick={() => dispatch(reset())}>
        Reset
      </button>
    </CounterWrapper>
  );
};

export default Counter;
