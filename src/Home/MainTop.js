import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './MainTop.css'
import main_top from './main_top.jpg'
class MainTop extends Component {
  render() {
    return (
            <div id="MainTop">
              <div className="mainTop1">
                <div id="TopBanner">
                  <img src={main_top} />
                </div>
                <div id="TopPr">
                  <img src="http://via.placeholder.com/413x120" />
                </div>
              </div>
              <div className="mainTop2">
                <ul id="PrimaryMenu">
                    <li className="list01">
                        <p className="titleSub">
                            지역별 알바
                        </p>
                        <p className="menu">
                        논현
                        </p>
                    </li>
                </ul>
              </div>
            </div>
    );
  }
}

export default MainTop;
