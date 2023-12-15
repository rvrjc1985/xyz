import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState(''); // State for the display value
  const [currentInput, setCurrentInput] = useState(''); // State for the current input

  // Function to handle numeric button click
  const handleNumericClick = (value) => {
    setCurrentInput(currentInput + value);
    setDisplay(currentInput + value);
  };

  // Function to handle operator button click
  const handleOperatorClick = (operator) => {
    setCurrentInput(currentInput + ' ' + operator + ' ');
    setDisplay(currentInput + ' ' + operator + ' ');
  };

  // Function to handle equal button click
  const handleEqualClick = () => {
    try {
      const result = eval(currentInput); // Using eval for simplicity
      setDisplay(result.toString());
      setCurrentInput(result.toString());
    } catch (error) {
      setDisplay('Error');
      setCurrentInput('');
    }
  };

  // Function to handle clear button click
  const handleClearClick = () => {
    setCurrentInput('');
    setDisplay('');
  };

  return (
    <div>
      <h2>Basic Calculator</h2>
      <div>
        <input type="text" value={display} readOnly />
      </div>
      <div>
        <button onClick={() => handleNumericClick('7')}>7</button>
        <button onClick={() => handleNumericClick('8')}>8</button>
        <button onClick={() => handleNumericClick('9')}>9</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
      </div>
      <div>
        <button onClick={() => handleNumericClick('4')}>4</button>
        <button onClick={() => handleNumericClick('5')}>5</button>
        <button onClick={() => handleNumericClick('6')}>6</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
      </div>
      <div>
        <button onClick={() => handleNumericClick('1')}>1</button>
        <button onClick={() => handleNumericClick('2')}>2</button>
        <button onClick={() => handleNumericClick('3')}>3</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
      </div>
      <div>
        <button onClick={() => handleNumericClick('0')}>0</button>
        <button onClick={handleClearClick}>C</button>
        <button onClick={handleEqualClick}>=</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
      </div>
    </div>
  );
};

export default Calculator;
