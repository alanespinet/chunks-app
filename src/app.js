import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import 'normalize.css/normalize.css';
import './styles/styles.scss';

import store from './redux/store/store';
import App, { history } from './components/App';
import { firebase } from './firebase/firebase';
import { startSetChunks } from './redux/actions/actions';
import { login, logout } from './firebase/auth';



let unsubscribe = store.subscribe( () => {
  console.log(store.getState());
} );

unsubscribe();



const jsx = (
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
);

let hasRendered = false;
const renderApp = () => {
  if( !hasRendered ){
    ReactDOM.render( jsx, document.getElementById('app') );
    hasRendered = true;
  }
};

ReactDOM.render( <p>Loading Chunks data...</p>, document.getElementById('app') );

firebase.auth().onAuthStateChanged( (user) => {
  if( user ){
    store.dispatch( login(user.uid) );
    store.dispatch( startSetChunks() ).then( () => {
      renderApp();
      if(history.location.pathname === '/'){
        history.push('/chunks');
      }
    })
  } else {
    store.dispatch( logout() );
    renderApp();
    history.push('/');
  }
});






//
