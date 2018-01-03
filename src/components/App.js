import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import StaticHeader from './StaticHeader';
import StaticFooter from './StaticFooter';
import MainPage from './MainPage';
import AddChunkPage from './AddChunkPage';
import AboutPage from './AboutPage';



export default class App extends React.Component {

  render(){
    return(
      <div>
        <StaticHeader />

        <BrowserRouter>
          <div>
            <Route path="/" component={MainPage} exact={true} />
            <Route path="/add" component={AddChunkPage} exact={true} />
            <Route path="/about" component={AboutPage} exact={true} />
          </div>
        </BrowserRouter>

        <StaticFooter />
      </div>
    );
  }

}
