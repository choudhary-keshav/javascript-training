import React, { useState } from "react";
import { Feature2Wrapper } from "./Feature2Style";

const Feature2: React.FC = () => {
  const [expression, setExpression] = useState<string>("");

  const handleButtonClick = (value: string) => {
    if (value === "C") {
      setExpression("");
    } else if (value === "=") {
      try {
        const result = eval(expression);
        setExpression(result.toString());
      } catch (error) {
        setExpression("Error");
      }
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  const buttonLayout = [
    ["1", "2", "3", "+"],
    ["4", "5", "6", "-"],
    ["7", "8", "9", "*"],
    ["0", ".", "=", "C", "/"],
  ];

  return (
    <Feature2Wrapper>
      <h1> Calculator</h1>
      <div className="calculator-container">
        <input type="text" value={expression} readOnly />
        {buttonLayout.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((buttonLabel, columnIndex) => (
              <button
                key={columnIndex}
                onClick={() => handleButtonClick(buttonLabel)}
              >
                {buttonLabel}
              </button>
            ))}
          </div>
        ))}
      </div>
    </Feature2Wrapper>
  );
};

export default Feature2;
