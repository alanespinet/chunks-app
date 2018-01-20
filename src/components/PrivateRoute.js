import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import HeaderMenu from './HeaderMenu';


const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route {...rest} component={ (props) => (
    isAuthenticated ? (
      <div>
        <HeaderMenu />
        <Component {...props} />
      </div>
    ) : (
      <Redirect to="/" />
    )
  )} />
);


const mapStateToProps = (state) => ({
  isAuthenticated: !!state.authReducer.uid
});

export default connect(mapStateToProps)(PrivateRoute);