import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Topics from './Topics'
import Pro1Page from './Home/Pro1Page'
class App extends Component {
  render() {
    return (
      
        <Router>
          <div>
            <div>
              메인로고
            </div>

            <div className="nav-grid">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>  
              <Link to="/topics">Topics</Link>
            </div>
            
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/>
            <Route path="/pro1" component={Pro1Page}/>
          </div>
        </Router>
      
    );
  }
}

export default App;
