import React from 'react';
import cl from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className={cl.nav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}
