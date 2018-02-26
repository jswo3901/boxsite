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
import Pro6Page from './Home/Profile/Pro6Page'
import Pro7Page from './Home/Profile/Pro6Page'
import Pro8Page from './Home/Profile/Pro6Page'
import Pro9Page from './Home/Profile/Pro6Page'
import Pro10Page from './Home/Profile/Pro6Page'
import Pro11Page from './Home/Profile/Pro6Page'
import Pro12Page from './Home/Profile/Pro6Page'
import Pro13Page from './Home/Profile/Pro6Page'
import Pro14Page from './Home/Profile/Pro6Page'
import Pro15Page from './Home/Profile/Pro6Page'
import Pro16Page from './Home/Profile/Pro6Page'
import Pro17Page from './Home/Profile/Pro6Page'
import Pro18Page from './Home/Profile/Pro6Page'
import Pro19Page from './Home/Profile/Pro6Page'
import Pro20Page from './Home/Profile/Pro6Page'
import Pro21Page from './Home/Profile/Pro6Page'
import Pro22Page from './Home/Profile/Pro6Page'
import Pro23Page from './Home/Profile/Pro6Page'


import fox_logo from './Home/fox_logo.jpg'
import fox_logo2 from './Home/fox_logo2.jpg'
class App extends Component {
  render() {
    return (
      
        <Router>
          <div id="main">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/>
            <Route path="/pro1" component={Pro1Page}/>
            <Route path="/pro2" component={Pro2Page}/>
            <Route path="/pro3" component={Pro3Page}/>
            <Route path="/pro4" component={Pro4Page}/>
            <Route path="/pro5" component={Pro5Page}/>
            <Route path="/pro6" component={Pro6Page}/>
            <Route path="/pro7" component={Pro7Page}/>
            <Route path="/pro8" component={Pro8Page}/>
            <Route path="/pro9" component={Pro9Page}/>
            <Route path="/pro10" component={Pro10Page}/>
            <Route path="/pro11" component={Pro11Page}/>
            <Route path="/pro12" component={Pro12Page}/>
            <Route path="/pro13" component={Pro13Page}/>
            <Route path="/pro14" component={Pro14Page}/>
            <Route path="/pro15" component={Pro15Page}/>
            <Route path="/pro16" component={Pro16Page}/>
            <Route path="/pro17" component={Pro17Page}/>
            <Route path="/pro18" component={Pro18Page}/>
            <Route path="/pro19" component={Pro19Page}/>
            <Route path="/pro20" component={Pro20Page}/>
            <Route path="/pro21" component={Pro21Page}/>
            <Route path="/pro22" component={Pro22Page}/>
            <Route path="/pro23" component={Pro23Page}/>
          </div>
        </Router>
      
    );
  }
}

export default App;
