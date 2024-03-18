import  { useState } from 'react';

const useCounter = ():[number, () => void, () => void] => {
    const [count, setCount] = useState<number>(0);

    const handleIncrement = () => (
        setCount(count + 1)
    );
    const handleDecrement = () => {
        setCount(count - 1);
    };
    return [count , handleIncrement,handleDecrement]
};

export default useCounter;