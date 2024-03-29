import React, { useState } from 'react';
import { CalculatorWrapper } from './CalculatorStyle';

const Calculator: React.FC = () => {
  const [expression, setExpression] = useState<string>('');

  const handleButtonClick = (value: string) => {
    if (value === 'C') {
      setExpression('');
    } else if (value === '=') {
      try {
        const result = eval(expression);
        setExpression(result.toString());
      } catch (error) {
        setExpression('Error');
      }
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  const buttonLayout = [
    ['1', '2', '3', '+'],
    ['4', '5', '6', '-'],
    ['7', '8', '9', '*'],
    ['0', '.', '=', 'C', '/']
  ];

  return (
    <CalculatorWrapper>
      <h1> Calculator</h1>
      <div className='calculatorContainer'>
        <input type='text' value={expression} readOnly />
        {buttonLayout.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((buttonLabel, columnIndex) => (
              <button key={columnIndex} onClick={() => handleButtonClick(buttonLabel)}>
                {buttonLabel}
              </button>
            ))}
          </div>
        ))}
      </div>
    </CalculatorWrapper>
  );
};

export default Calculator;
