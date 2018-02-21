import React, { Component } from 'react';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
import './index.css'
import pro1 from './pro1.gif'
import pro2 from './pro2.gif'
import pro3 from './pro3.gif'
import pro4 from './pro4.gif'
import pro5 from './pro5.gif'

import fox_logo from './fox_logo.jpg'
import fox_logo2 from './fox_logo2.jpg'

import left from './left.gif'
import left1 from './left1.gif'
import left2 from './left2.gif'

import boxInfo from './boxInfo.jpg'

import Global from './Global'
import MainTop from './MainTop'
import BoxMain from './BoxMain'
const Home = () => {
    return (
      <div>
        <Global />
        <MainTop />
        <BoxMain />

        <div className="left_banner">
          <img src={left} alt="Smiley face" />
          <div clasName="left_banner1">
            <img src={left1} alt="Smiley face" />
          </div>
        </div>
      </div>
    )
}
export default Home

