import React, { useState } from "react";
import { CounterDiv } from "./counterStyles";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const handleChangeCounter = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCount(count + +e.currentTarget.innerText);
  };
  const changeOptions = [-1, 1,-2, 2,-5, 5,-10, 10];
  return (
    <CounterDiv>
      <h1>Counter App:</h1>
      <div className="flex">
        <div className="buttonDiv">
          {changeOptions
            .map((value) => (
              <button key={value} className="counterButton items" onClick={handleChangeCounter} disabled={count + value < 0}>
                {value}
              </button>
            ))}
            <h1 id="countValue" className="items">{count}</h1>
        </div>
      </div>
    </CounterDiv>
  );
};

export default Counter;
