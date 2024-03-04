import React, { useState } from "react";
import "./CalculatorApp.css";

const CalculatorApp = () => {
  const [displayValue, setDisplayValue] = useState("");
  const [result, setResult] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      if (displayValue.trim() === "") {
        setErrorMessage("Error");
      } else {
        try {
          setResult(eval(displayValue));
        } catch (error) {
          setResult("Error");
        }
        setDisplayValue("");
      }
    } else if (value === "C") {
      setDisplayValue("");
      setResult("");
      setErrorMessage("");
    } else {
      setDisplayValue(displayValue + value);
    }
  };

  return (
    <div className="calculator-app">
      <input type="text" value={displayValue} readOnly />
      <div className="result">{errorMessage || result}</div>

      <div className="buttons">
        {[...Array(10).keys(), "+", "-", "*", "/", "="].map((value) => (
          <button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </button>
        ))}
        <button onClick={() => handleButtonClick("C")}>C</button>
      </div>
    </div>
  );
};

export default CalculatorApp;
