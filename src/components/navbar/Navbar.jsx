import classes from './navbar.module.css';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={classes.navbar}>
      <div className={classes.logoContainer}>
        <img src="/assets/shared/logo.svg" alt="logo" />
      </div>

      <div className={classes.line}></div>

      {/* Hamburger button visible only on mobile/tablet */}
      <button 
        className={classes.mobileToggle} 
        onClick={toggleMenu} 
        aria-controls="primary-navigation" 
        aria-expanded={menuOpen}
      >
        <img 
          src={menuOpen ? "/assets/shared/icon-close.svg" : "/assets/shared/icon-hamburger.svg"} 
          alt="menu toggle" 
        />
      </button>

      <div className={`${classes["nav-items"]} ${menuOpen ? classes.opened : ''}`}>
        <ul id="primary-navigation" className={classes["primary-navigation"]}>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? classes.active : ''} onClick={closeMenu}>
              <span>00</span>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/destination" className={({ isActive }) => isActive ? classes.active : ''} onClick={closeMenu}>
              <span>01</span>Destination
            </NavLink>
          </li>
          <li>
            <NavLink to="/crew" className={({ isActive }) => isActive ? classes.active : ''} onClick={closeMenu}>
              <span>02</span>Crew
            </NavLink>
          </li>
          <li>
            <NavLink to="/technology" className={({ isActive }) => isActive ? classes.active : ''} onClick={closeMenu}>
              <span>03</span>Technology
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

