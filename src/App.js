import React from 'react';
import Calculator from './components/Calculator';

class RenderCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Calculator />
    );
  }
}
export default RenderCalculator;
