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
import Pro1Page from './Home/Profile/Pro1Page'
import Pro2Page from './Home/Profile/Pro2Page'
import Pro3Page from './Home/Profile/Pro3Page'
import Pro4Page from './Home/Profile/Pro4Page'
import Pro5Page from './Home/Profile/Pro5Page'
class App extends Component {
  render() {
    return (
      
        <Router>
          <div>
            <div className="main-bar">
              메인로고
            </div>

            <div className="nav-bar">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>  
              <Link to="/topics">Topics</Link>
            </div>
            
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/>
            <Route path="/pro1" component={Pro1Page}/>
            <Route path="/pro2" component={Pro2Page}/>
            <Route path="/pro3" component={Pro3Page}/>
            <Route path="/pro4" component={Pro4Page}/>
            <Route path="/pro5" component={Pro5Page}/>

          </div>
        </Router>
      
    );
  }
}

export default App;
