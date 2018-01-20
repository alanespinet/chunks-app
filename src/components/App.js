import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import StaticHeader from './StaticHeader';
import StaticFooter from './StaticFooter';
import MainPage from './MainPage';
import AddChunkPage from './AddChunkPage';
import AboutPage from './AboutPage';
import PageNotFound from './PageNotFound';
import HeaderMenu from './HeaderMenu';
import ChunkPage from './ChunkPage';
import LoginPage from './LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';



export const history = createHistory();

export default class App extends React.Component {

  render(){
    return(
      <div>
        <StaticHeader />
        <Router history={history}>
          <div>
            <Switch>
              <PublicRoute path="/" component={LoginPage} exact={true} />
              <PrivateRoute path="/chunks" component={MainPage} exact={true} />
              <PrivateRoute path="/chunk/:id" component={ChunkPage} />
              <PrivateRoute path="/add" component={AddChunkPage} exact={true} />
              <PrivateRoute path="/about" component={AboutPage} exact={true} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </Router>

        <StaticFooter />
      </div>
    );
  }

}
