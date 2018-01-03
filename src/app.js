import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import 'normalize.css/normalize.css';
import './styles/styles.scss';

import store from './redux/store/store';
import App from './components/App';



const jsx = (
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
);

ReactDOM.render( jsx, document.getElementById('app') );
