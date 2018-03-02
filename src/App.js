import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './Home'
import HomeBrand from './Home/HomeBrand'
import HomeText from './Home/HomeText'
import Pro1Page from './Home/Profile/Pro1Page'
import Pro2Page from './Home/Profile/Pro2Page'
import Pro3Page from './Home/Profile/Pro3Page'
import Pro4Page from './Home/Profile/Pro4Page'
import Pro5Page from './Home/Profile/Pro5Page'
import Pro6Page from './Home/Profile/Pro6Page'
import Pro7Page from './Home/Profile/Pro7Page'
import Pro8Page from './Home/Profile/Pro8Page'
import Pro9Page from './Home/Profile/Pro9Page'
import Pro10Page from './Home/Profile/Pro10Page'
import Pro11Page from './Home/Profile/Pro11Page'
import Pro12Page from './Home/Profile/Pro12Page'
import Pro13Page from './Home/Profile/Pro13Page'
import Pro14Page from './Home/Profile/Pro14Page'
import Pro15Page from './Home/Profile/Pro15Page'
import Pro16Page from './Home/Profile/Pro16Page'
import Pro17Page from './Home/Profile/Pro17Page'
import Pro18Page from './Home/Profile/Pro18Page'
import Pro19Page from './Home/Profile/Pro19Page'
import Pro20Page from './Home/Profile/Pro20Page'
import Pro21Page from './Home/Profile/Pro21Page'
import Pro22Page from './Home/Profile/Pro22Page'
import Pro23Page from './Home/Profile/Pro23Page'
import Pro24Page from './Home/Profile/Pro24Page'
import Pro25Page from './Home/Profile/Pro25Page'
import Pro26Page from './Home/Profile/Pro26Page'
import Pro27Page from './Home/Profile/Pro27Page'
import Pro28Page from './Home/Profile/Pro28Page'
import Pro29Page from './Home/Profile/Pro29Page'
import Pro30Page from './Home/Profile/Pro30Page'
import Pro31Page from './Home/Profile/Pro31Page'
import Pro32Page from './Home/Profile/Pro32Page'
import Pro33Page from './Home/Profile/Pro33Page'
import Pro34Page from './Home/Profile/Pro34Page'
import Pro35Page from './Home/Profile/Pro35Page'
import Pro36Page from './Home/Profile/Pro36Page'
import Pro37Page from './Home/Profile/Pro37Page'
import Pro38Page from './Home/Profile/Pro38Page'
import Pro39Page from './Home/Profile/Pro39Page'
import Pro40Page from './Home/Profile/Pro40Page'
import Pro41Page from './Home/Profile/Pro41Page'
import Pro42Page from './Home/Profile/Pro42Page'
import Pro43Page from './Home/Profile/Pro43Page'
import Pro44Page from './Home/Profile/Pro44Page'
import Pro45Page from './Home/Profile/Pro45Page'


import fox_logo from './Home/fox_logo.jpg'
class App extends Component {
  render() {
    return (
      
        <Router>
          <div id="main">
            <Route exact path="/" component={Home}/>
            <Route path="/HomeBrand" component={HomeBrand} />
            <Route path="/HomeText" component={HomeText} />
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
            <Route path="/pro24" component={Pro24Page}/>
            <Route path="/pro25" component={Pro25Page}/>
            <Route path="/pro26" component={Pro26Page}/>
            <Route path="/pro27" component={Pro27Page}/>
            <Route path="/pro28" component={Pro28Page}/>
            <Route path="/pro29" component={Pro29Page}/>
            <Route path="/pro30" component={Pro30Page}/>
            <Route path="/pro31" component={Pro31Page}/>
            <Route path="/pro32" component={Pro32Page}/>
            <Route path="/pro33" component={Pro33Page}/>
            <Route path="/pro34" component={Pro34Page}/>
            <Route path="/pro35" component={Pro35Page}/>
            <Route path="/pro36" component={Pro36Page}/>
            <Route path="/pro37" component={Pro37Page}/>
            <Route path="/pro38" component={Pro38Page}/>
            <Route path="/pro39" component={Pro39Page}/>
            <Route path="/pro40" component={Pro40Page}/>
            <Route path="/pro41" component={Pro41Page}/>
            <Route path="/pro42" component={Pro42Page}/>
            <Route path="/pro43" component={Pro43Page}/>
            <Route path="/pro44" component={Pro44Page}/>
            <Route path="/pro45" component={Pro45Page}/>
          </div>
        </Router>
      
    );
  }
}

export default App;
