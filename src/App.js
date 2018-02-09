import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {Grid, Row, Col, Clearfix} from 'react-bootstrap'
import Home from './Home'
import About from './About'
import Topics from './Topics'
class App extends Component {
  render() {
    return (
      <Router>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} xsOffset={3} md={12}>
              메인로고
            </Col>
          </Row>
          <Row className="show-grid">
              <Col xs={6} md={4}>
                <Link to="/">Home</Link>
              </Col>
              <Col xs={6} md={4}>
                <Link to="/about">About</Link>  
              </Col>
              <Col xs={6} md={4}>
                <Link to="/topics">Topics</Link>
              </Col>
          </Row> 
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/topics" component={Topics}/>
        </Grid>
      </Router>


    );
  }
}

export default App;
