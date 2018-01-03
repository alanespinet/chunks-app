import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import App from './components/App';
import StaticHeader from './components/StaticHeader';
import StaticFooter from './components/StaticFooter';



const jsx = (
  <div>
    <StaticHeader />
    <App />
    <StaticFooter />
  </div>
);

ReactDOM.render( jsx, document.getElementById('app') );
