import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => setInput((prev) => prev + value);
  const handleClear = () => setInput('');
  const handleDelete = () => setInput((prev) => prev.slice(0, -1));
  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-gray-900 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border-4 border-gray-300 rounded-2xl shadow-2xl p-6">
        {/* Header */}
        <div className="text-center text-2xl font-bold text-gray-700 mb-6">
          🔢 React Calculator
        </div>

        {/* Display */}
        <div className="bg-gray-100 text-right text-3xl font-mono p-4 mb-6 rounded-lg shadow-inner h-20 overflow-x-auto">
          {input || '0'}
        </div>

        {/* Control Buttons */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          <button
            onClick={handleClear}
            className="col-span-2 bg-red-500 text-white font-bold py-3 rounded-lg shadow hover:bg-red-600 transition"
          >
            C
          </button>
          <button
            onClick={handleDelete}
            className="bg-yellow-400 text-black font-bold py-3 rounded-lg shadow hover:bg-yellow-500 transition"
          >
            ⌫
          </button>
          <button
            onClick={() => handleClick('/')}
            className="bg-blue-500 text-white font-bold py-3 rounded-lg shadow hover:bg-blue-600 transition"
          >
            ÷
          </button>
        </div>

        {/* Number and Operator Buttons */}
        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn, i) =>
            btn === '=' ? (
              <button
                key={i}
                onClick={handleEqual}
                className="col-span-2 bg-green-500 text-white text-xl font-bold py-3 rounded-lg shadow hover:bg-green-600 transition"
              >
                =
              </button>
            ) : (
              <button
                key={i}
                onClick={() => handleClick(btn)}
                className="bg-gray-200 text-black text-xl font-medium py-3 rounded-lg shadow hover:bg-gray-300 active:scale-95 transition"
              >
                {btn}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
