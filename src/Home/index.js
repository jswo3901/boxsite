import React, { Component } from 'react';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
import './index.css'

import fox_logo from './fox_logo.jpg'
import fox_logo2 from './fox_logo2.jpg'

import boxInfo from './boxInfo.jpg'

import Global from './Global'
import MainTop from './MainTop'
import BoxMain from './BoxMain'
import TextMain from './TextMain'
const Home = () => {
    return (
      <div>
        <Global />
        <MainTop />
        <BoxMain />
        <TextMain />

        {/* <div className="left_banner">
          <img src={left} alt="Smiley face" />
          <div clasName="left_banner1">
            <img src={left1} alt="Smiley face" />
          </div>
        </div> */}
      </div>
    )
}
export default Home

