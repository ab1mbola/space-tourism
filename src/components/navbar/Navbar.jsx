import classes from './navbar.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className={classes.navbar}>
      <div>
        <img src="/assets/shared/logo.svg" alt="logo" />
      </div>

      {/* <hr /> */}
      <div className={classes.line}></div>

      <div className={classes["nav-items"]}>
        <ul className={classes["primary-navigation"]}>
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
