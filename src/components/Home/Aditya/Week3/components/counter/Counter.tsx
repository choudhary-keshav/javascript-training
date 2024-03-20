import React, { useState } from 'react';
import { CounterWrapper } from './counterStyles';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const handleChangeCounter = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setCount(count + +e.currentTarget.innerText);
  };

  const changeOptions: number[] = [-1, 1, -2, 2, -5, 5, -10, 10];
  let currentOption: number = 0;

  const findDisabled = (): boolean => {
    return count + changeOptions[currentOption++] < 0;
  };

  return (
    <CounterWrapper>
      <h1>Counter App</h1>
      <div className='gridWrapper'>
        <div className='buttonDiv'>
          {changeOptions.map((value) => (
            <button key={value} className='counterButton items' onClick={handleChangeCounter} disabled={findDisabled()}>
              {value}
            </button>
          ))}
          <h1 id='countValue' className='items'>
            {count}
          </h1>
        </div>
      </div>
    </CounterWrapper>
  );
};

export default Counter;
