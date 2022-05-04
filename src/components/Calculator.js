import React from 'react';
import './index.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="mainContainer">
        <div className="displayResult" />
        <div className="operationsDiv">
          <button type="button" className="btn">AC</button>
          <button type="button" className="btn">+/-</button>
          <button type="button" className="btn">%</button>
          <button type="button" className="btn btnop">/</button>
          <button type="button" className="btn">7</button>
          <button type="button" className="btn">8</button>
          <button type="button" className="btn">9</button>
          <button type="button" className="btn btnop">X</button>
          <button type="button" className="btn">4</button>
          <button type="button" className="btn">5</button>
          <button type="button" className="btn">6</button>
          <button type="button" className="btn btnop">-</button>
          <button type="button" className="btn">1</button>
          <button type="button" className="btn">2</button>
          <button type="button" className="btn">3</button>
          <button type="button" className="btn btnop">+</button>
          <button type="button" className="btn0">0</button>
          <button type="button" className="btn">.</button>
          <button type="button" className="btn btnop">=</button>
        </div>
      </div>
    );
  }
}
export default Calculator;
