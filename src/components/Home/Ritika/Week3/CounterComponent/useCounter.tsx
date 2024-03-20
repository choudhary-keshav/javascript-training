import { useState } from 'react';

type CounterFunction = () => void;
const useCounter = (): [number, CounterFunction, CounterFunction] => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement: CounterFunction = () => setCount(count + 1);
  const handleDecrement: CounterFunction = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return [count, handleIncrement, handleDecrement];
};

export default useCounter;
