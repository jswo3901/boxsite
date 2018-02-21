import React, { Component } from 'react';
// import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import fox_logo from './fox_logo.jpg'
import fox_logo2 from './fox_logo2.jpg'

class Global extends Component {
  render() {
    return (
            <div id="Global">
              <div id="Header">
                <img src={fox_logo} />
              </div>
              <div id="HeaderMenuWrap">
                <div id="HeaderMenu">
                    <ul className="headerMenu">
                    <li className="job">
                        <Link to="/">구인정보</Link>
                    </li>
                    <li className="brand">
                        <Link to="/">브랜드 알바</Link>
                    </li>
                    <li className="genius">
                        <Link to="/">맞춤 알바</Link>
                    </li>
                    <li className="resume">
                        <Link to="/">인재정보</Link>
                    </li>
                    <li className="story">
                        <Link to="/">커뮤니티</Link>
                    </li>
                    <li className="person">
                        <Link to="/">개인서비스</Link>
                    </li>
                    <li className="biz">
                        <Link to="/">기업서비스</Link>
                    </li>
                    </ul>
                </div>
              </div>
            </div>
    );
  }
}

export default Global;
