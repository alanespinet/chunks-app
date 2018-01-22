import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../firebase/auth';

const LoginPage = ({ startLogin }) => (
  <div className="loginPage content-panel">
    <div className="loginButton-wrapper">
      <h1>Chunks App - by Alan Espinet</h1>
      <p>Welcome, and let me ask you something: how many times have you wanted to save your code snippets in a secure place where you could have all of them and -even- filter to quick find the one you need? This app is just that. A single place for code snippets, filtered by Languages and Keywords as well.</p>
      <button onClick={startLogin}>Login</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch( startLogin() )
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
