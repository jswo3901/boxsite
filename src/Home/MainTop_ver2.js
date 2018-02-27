import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './MainTop.css'
import main_top from './main_top.gif'
import TopPr from './TopPr.gif'

class MainTop_ver2 extends Component {
  render() {
    return (
            <div id="MainTop">
              <div className="mainTop1">
                <div id="TopBanner">
                  <img src={main_top} />
                </div>
                <div id="TopPr">
                  <img src={TopPr} />
                </div>
              </div>
            </div>
    );
  }
}

export default MainTop_ver2;
