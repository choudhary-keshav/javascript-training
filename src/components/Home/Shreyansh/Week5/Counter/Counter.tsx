import React from 'react';
import { increaseCounter, decreaseCounter } from '../Actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import { CounterWrapper } from './CounterStyle';
import { RootState } from './interface';

const Counter: React.FC = () => {
  const updateCounter: number = useSelector((state: RootState) => state.updateCounter);

  const dispatch = useDispatch();
  return (
      <CounterWrapper>
        <div className='mainContainer'>
          <h1>Counter</h1>
          <div id='counter'>{updateCounter}</div>
          <div className='counterContainer'>
            <button
              className={`counterButton ${!updateCounter ? 'disabled' : ''}`}
              onClick={() => dispatch(decreaseCounter())}
              disabled={!updateCounter}>
              <span>-</span>
            </button>
            <button onClick={() => dispatch(increaseCounter())}>
              <span>+</span>
            </button>
          </div>
        </div>
      </CounterWrapper>
  );
};

export default Counter;
