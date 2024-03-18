import React from 'react';
import useCounter from './useCounter';
import { CounterWrapper } from './Counter.styled';


const CounterApp = () => {

 const [count,handleIncrement,handleDecrement]=useCounter()
    return (
        <CounterWrapper>
            <p className='countPara'>{count}</p>
            <div className='buttonContainer'>
                <button onClick={handleDecrement} className='IncDncButton'>Decrement</button>
                <button onClick={handleIncrement} className='IncDncButton'>Increment</button>
            </div>
        </CounterWrapper>
    );
};

export default CounterApp
