import React, { useState } from 'react';
import { UseStateHookWrapper } from './styles';

const UseStateHook: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const buttonValues = [-10, -5, -2, -1, 0, 1, 2, 5, 10];

  const changeCounter = (event: React.MouseEvent<HTMLButtonElement>) => {
    const buttonValue = parseInt(event.currentTarget.value, 10);
    setCount((prevCount) => (buttonValue === 0 ? 0 : prevCount + buttonValue));
  };

  return (
    <UseStateHookWrapper>
      <h2>UseState Hook Demonstration</h2>
      <h3>Count = {count}</h3>
      <div className='buttonContainer'>
        {buttonValues.map((value) => (
          <button
            key={value}
            className={count + value < 0 ? 'disabled' : ''}
            value={value}
            disabled={count + value < 0}
            onClick={changeCounter}>
            {value === 0 ? 'RESET' : value > 0 ? `+${value}` : value}
          </button>
        ))}
      </div>
    </UseStateHookWrapper>
  );
};

export default UseStateHook;
