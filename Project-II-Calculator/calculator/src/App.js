import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import OperatorButton from './components/ButtonComponents/OperatorButton';

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
      <div className="whiteButtons">
        <ActionButton 
          className = {"clearButton"}
          text = {"clear"} 
        />
        <div className="numbers">
          {numbers.map(number => (
            <NumberButton number={number} />
          ))}
        </div>
        <ActionButton 
          className = {"zeroButton"}
          text = {"0"} 
        />
      </div>
      <div className = "redButtons">
          <OperatorButton
            buttonStyle = {"operatorButton"}
            text = {"/"} 
          />
          <OperatorButton
            buttonStyle = {"operatorButton"}
            text = {"*"} 
          />
          <OperatorButton
            buttonStyle = {"operatorButton"}
            text = {"-"} 
          />
          <OperatorButton
            buttonStyle = {"operatorButton"}
            text = {"+"} 
          />
          <OperatorButton
            buttonStyle = {"operatorButton"}
            text = {"="} 
          />
      </div>
    </div>
  );
};

export default App;
