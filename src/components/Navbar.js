import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-wrapper " style={{ background: ' SteelBlue' }}>
      <div className="container">
        <Link
          to="/"
          className="brand-logo left"
          style={{ left: '0', marginLeft: '10px' }}
        >
          logo
        </Link>
        <ul className="right">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
