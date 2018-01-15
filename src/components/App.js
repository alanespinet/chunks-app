import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import StaticHeader from './StaticHeader';
import StaticFooter from './StaticFooter';
import MainPage from './MainPage';
import AddChunkPage from './AddChunkPage';
import AboutPage from './AboutPage';
import PageNotFound from './PageNotFound';
import HeaderMenu from './HeaderMenu';
import ChunkPage from './ChunkPage';



export default class App extends React.Component {

  render(){
    return(
      <div>
        <StaticHeader />
        <BrowserRouter>
          <div>
            <HeaderMenu />
            <Switch>
              <Route path="/" component={MainPage} exact={true} />
              <Route path="/chunk/:id" component={ChunkPage} />
              <Route path="/add" component={AddChunkPage} exact={true} />
              <Route path="/about" component={AboutPage} exact={true} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </BrowserRouter>

        <StaticFooter />
      </div>
    );
  }

}
