import React from 'react';
import { NavLink } from 'react-router';

export default function NavLink() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/new' activeClassName='active'>
            New Tweet
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
