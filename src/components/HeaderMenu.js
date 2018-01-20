import React from 'react';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { startLogout } from '../firebase/auth';

const HeaderMenu = ({ startLogout }) => (
  <nav className="headerMenu">
    <NavLink activeClassName="active" to="/chunks" exact={true}>Chunks</NavLink>
    <NavLink activeClassName="active" to="/add">Add</NavLink>
    <NavLink activeClassName="active" to="/about">About</NavLink>
    <button onClick={startLogout}>Logout</button>
  </nav>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch( startLogout() )
});

export default connect(undefined, mapDispatchToProps)(HeaderMenu);
