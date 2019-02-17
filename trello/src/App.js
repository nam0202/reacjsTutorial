import React, { Component } from 'react';
import './App.css';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Menu from './core/Menu/Menu';
import routes from './routes';
class App extends Component {
  render() {
    return (
      <Router>

      <div>
        <header>
          <Menu />
        </header>
        <Grid fluid={true}>
          <Row className="show-grid">
            <Col xs={12} md={12} >
                 {this.showContentMenus(routes)}
            </Col>
          </Row>
        </Grid>
      </div>
      </Router>

    );
  }
  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      })
    }
    return <Switch>{result}</Switch>
  }
}

export default App;
