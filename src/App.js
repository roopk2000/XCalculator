import React, { useState } from "react";
import "./App.css";

const CalculatorApp = () => {
  const [displayValue, setDisplayValue] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(displayValue));
      } catch (error) {
        setResult("Error");
      }
      setDisplayValue("");
    } else if (value === "C") {
      setDisplayValue("");
      setResult("");
    } else {
      setDisplayValue(displayValue + value);
    }
  };

  return (
    <div className="calculator-app">
      <h2>React Calculator</h2>
      <input type="text" value={displayValue} readOnly />
      <div className="result">{result}</div>

      <div className="buttons">
        {[...Array(10).keys(), "+", "-", "*", "/", "="].map((value) => (
          <button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </button>
        ))}
        <button onClick={() => handleButtonClick("C")}>C</button>
      </div>
      {/* <div className="result">{result}</div> */}
    </div>
  );
};

export default CalculatorApp;
