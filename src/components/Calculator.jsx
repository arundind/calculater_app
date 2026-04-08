// Calculator.jsx
import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
      return;
    }

    if (value === '⌫') {
      setInput(input.slice(0, -1));
      return;
    }

    if (value === '=') {
      try {
        const result = Function(`return (${input})`)();
        setInput(result.toString());
      } catch {
        setInput('Error');
      }
      return;
    }

    setInput((prev) => prev + value);
  };

  const buttons = [
    'C', '⌫', '/', '*',
    '7', '8', '9', '-',
    '4', '5', '6', '+',
    '1', '2', '3', '=',
    '0', '.'
  ];

  return (

    <div className="calculator">
       <h1>Calculator</h1>
      <input
        type="text"
        value={input}
        readOnly
        className="display"
      />

      <div className="buttons">
        {buttons.map((btn, i) => (
          <button
            key={i}
            onClick={() => handleClick(btn)}
            className={`
              ${btn === '=' ? 'equals' : ''}
              ${btn === 'C' ? 'clear' : ''}
              ${btn === '⌫' ? 'backspace' : ''}
              ${btn === '+' ? 'plas' : ''}
              ${['/', '*', '-', '+'].includes(btn) ? 'operator' : ''}
            `}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;

