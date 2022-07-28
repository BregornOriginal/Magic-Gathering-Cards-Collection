import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import logo from '../../images/logo/logo.png';

function Header() {
  const activeClassName = 'active';

  return (
    <header>
      <div className="container-logo">
        <img alt="Logo of Magic The Gatering" src={logo} />
        <nav>
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
              About
            </li>
            <li>
              Contact
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
