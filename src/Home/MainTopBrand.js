import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './MainTop.css'
import main_top from './main_top.gif'
import TopPr from './TopPr.gif'
import MiddlePr from './middlePr.gif'
import Middle_Bottom_1 from './158_1.jpg'
import Middle_Bottom_2 from './158_2.jpg'
import Middle_Bottom_3 from './158_3.jpg'
class MainTopBrand extends Component {
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

export default MainTopBrand;
