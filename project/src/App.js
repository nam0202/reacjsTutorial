import React, { Component } from 'react';
import './App.css';
import Header from './components/core/html/Header'

import {
  BrowserRouter as Router,
  Route, 
  Switch,
  Redirect,
  withRouter
} from 'react-router-dom';
import routes from './Routing';
class App extends Component {
  render() {
    return (
      <Router>
        <div >
          <header>
            <Header/>
          </header>
          {/* Routing */}
          <Switch>
              {this.showContentMenus(routes)}
          </Switch>
      </div>
      </Router>
    );
  }

  showContentMenus = (routes)=>{
      var result = null;
      if(routes.length>0){
        result = routes.map((item,index)=>{
          return (
            <Route 
            key={index} 
            path={item.path} 
            exact={item.exact} 
            component={item.main}  />
          );
        })
      }
      return result;
  }
}

export default App;
