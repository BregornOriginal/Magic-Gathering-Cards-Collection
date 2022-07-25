import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

function Header() {
  const activeClassName = 'active';

  return (
    <header>
      <div className="container-logo">
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
