import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quotes from './components/quotes';
import NavBar from './components/nav';
import Home from './components/Home';

class RenderCalculator extends React.PureComponent {
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </>
    );
  }
}
export default RenderCalculator;
