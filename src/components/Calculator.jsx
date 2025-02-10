import React, { useState } from "react";
import "../assets/Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      const result = eval(input).toString();
      // محدود کردن اعشار به ۵ رقم
      setInput(result.includes(".") ? parseFloat(result).toFixed(5) : result);
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <input type="text" className="display" value={input} readOnly />
        <div className="buttons">
          <button className="button button-gray" onClick={handleClear}>
            AC
          </button>
          <button className="button button-gray" onClick={() => handleClick("+/-")}>
            +/-
          </button>
          <button className="button button-gray" onClick={() => handleClick("%")}>
            %
          </button>
          <button className="button button-orange" onClick={() => handleClick("/")}>
            ÷
          </button>
          <button className="button button-dark" onClick={() => handleClick("7")}>
            7
          </button>
          <button className="button button-dark" onClick={() => handleClick("8")}>
            8
          </button>
          <button className="button button-dark" onClick={() => handleClick("9")}>
            9
          </button>
          <button className="button button-orange" onClick={() => handleClick("*")}>
            ×
          </button>
          <button className="button button-dark" onClick={() => handleClick("4")}>
            4
          </button>
          <button className="button button-dark" onClick={() => handleClick("5")}>
            5
          </button>
          <button className="button button-dark" onClick={() => handleClick("6")}>
            6
          </button>
          <button className="button button-orange" onClick={() => handleClick("-")}>
            -
          </button>
          <button className="button button-dark" onClick={() => handleClick("1")}>
            1
          </button>
          <button className="button button-dark" onClick={() => handleClick("2")}>
            2
          </button>
          <button className="button button-dark" onClick={() => handleClick("3")}>
            3
          </button>
          <button className="button button-orange" onClick={() => handleClick("+")}>
            +
          </button>
          <button className="button button-dark button-zero" onClick={() => handleClick("0")}>
            0
          </button>
          <button className="button button-dark" onClick={() => handleClick(".")}>
            .
          </button>
          <button className="button button-orange" onClick={handleCalculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;