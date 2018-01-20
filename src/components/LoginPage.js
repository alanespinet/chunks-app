import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../firebase/auth';

const LoginPage = ({ startLogin }) => (
  <div className="loginPage content-panel">
    <button onClick={startLogin}>Login</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch( startLogin() )
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
