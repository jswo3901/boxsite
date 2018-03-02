import React, { Component } from 'react';
// import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import fox_logo from './fox_logo.jpg'

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
                        <Link to="/">HOME</Link>
                    </li>
                    <li className="brand">
                        <Link to="/HomeBrand">브랜드 채용</Link>
                    </li>
                    <li className="genius">
                        <Link to="/HomeText">일반 채용</Link>
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
