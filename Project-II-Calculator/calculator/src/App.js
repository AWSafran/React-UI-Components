import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';

const numbers = [
  {text: 7, buttonStyle: "numberButton"},
  {text: 8, buttonStyle: "numberButton"},
  {text: 9, buttonStyle: "numberButton"},
  {text: 4, buttonStyle: "numberButton"},
  {text: 5, buttonStyle: "numberButton"},
  {text: 6, buttonStyle: "numberButton"},
  {text: 1, buttonStyle: "numberButton"},
  {text: 2, buttonStyle: "numberButton"},
  {text: 3, buttonStyle: "numberButton"}
]

const App = () => {
  return (
    <div>
      <div className="numbers">
        {numbers.map(number => (
          <NumberButton number={number} />
        ))}
      </div>
    </div>
  );
};

export default App;
