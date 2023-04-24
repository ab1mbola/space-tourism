import './Navbar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <img src="/assets/shared/logo.svg" alt="logo" className="logo" />
      </div>

      {/* <hr /> */}
      <div className="line"></div>

      <div className="nav-items">
        <ul className="primary-navigation">
          <li>
            <NavLink to="/">
              <span>00</span>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="destination">
              <span>01</span>Destination
            </NavLink>
          </li>
          <li>
            <NavLink to="/crew">
              <span>02</span>Crew
            </NavLink>
          </li>
          <li>
            <NavLink to="/technology">
              <span>03</span>Technology
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
