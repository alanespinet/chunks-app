import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <nav className="headerMenu">
    <NavLink activeClassName="active" to="/" exact={true}>Chunks</NavLink>
    <NavLink activeClassName="active" to="/add">Add</NavLink>
    <NavLink activeClassName="active" to="/about">About</NavLink>
    <button>Logout</button>
  </nav>
);
