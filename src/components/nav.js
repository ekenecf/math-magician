import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

class NavBar extends React.PureComponent {
  render() {
    return (
      <header className="navigation">
        <h2>Math Magicians</h2>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/calculator">Calculator</Link>
          <Link to="/quotes">Quote</Link>
        </nav>
      </header>
    );
  }
}
export default NavBar;
