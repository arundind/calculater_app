import React from 'react';
import Calculator from './components/Calculator';
import './App.css';


function App() {
  return (
    <div className="app-container">
      
      {/* Bubble Background */}
      <div className="background-bubbles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Calculator */}
      <Calculator />

    </div>
  );
}



export default App;