import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './header.css';
import logo from '../../images/logo/logo.png';

function Header() {
  const activeClassName = 'active';

  return (
    <header>
      <div className="container-logo">
        <Link to="/">
          <img className="logo-image" alt="Logo of Magic The Gatering" src={logo} />
        </Link>
      </div>
      <nav className="nav-bar">
        <ul className="links-container">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeClassName : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
            >
              <i className="fa-solid fa-gear" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
