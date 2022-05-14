import React from 'react';
import './index.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: '',
      operation: '',
    };
    this.handleClicks = this.handleClicks.bind(this);
  }

  handleClicks(event) {
    const TargetValue = event.target.value;
    this.setState((state) => calculate({
      next: state.next,
      total: state.total,
      operation: state.operation,
    }, TargetValue));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="mainContainer">
        <div className="displayResult">
          <h1>
            {total}
            {' '}
            {operation}
            {' '}
            {next}
            {' '}
          </h1>
        </div>
        <div className="operationsDiv">
          <button onClick={this.handleClicks} type="button" value="AC" className="btn">AC</button>
          <button onClick={this.handleClicks} type="button" value="+/-" className="btn">+/-</button>
          <button onClick={this.handleClicks} type="button" value="%" className="btn">%</button>
          <button onClick={this.handleClicks} type="button" value="÷" className="btn btnop">÷</button>
          <button onClick={this.handleClicks} type="button" value="7" className="btn">7</button>
          <button onClick={this.handleClicks} type="button" value="8" className="btn">8</button>
          <button onClick={this.handleClicks} type="button" value="9" className="btn">9</button>
          <button onClick={this.handleClicks} type="button" value="x" className="btn btnop">X</button>
          <button onClick={this.handleClicks} type="button" value="4" className="btn">4</button>
          <button onClick={this.handleClicks} type="button" value="5" className="btn">5</button>
          <button onClick={this.handleClicks} type="button" value="6" className="btn">6</button>
          <button onClick={this.handleClicks} type="button" value="-" className="btn btnop">-</button>
          <button onClick={this.handleClicks} type="button" value="1" className="btn">1</button>
          <button onClick={this.handleClicks} type="button" value="2" className="btn">2</button>
          <button onClick={this.handleClicks} type="button" value="3" className="btn">3</button>
          <button onClick={this.handleClicks} type="button" value="+" className="btn btnop">+</button>
          <button onClick={this.handleClicks} type="button" value="0" className="btn0">0</button>
          <button onClick={this.handleClicks} type="button" value="." className="btn">.</button>
          <button onClick={this.handleClicks} type="button" value="=" className="btn btnop">=</button>
        </div>
      </div>
    );
  }
}
export default Calculator;
