import React, { Component } from 'react';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
import './index.css'

import fox_logo from './fox_logo.jpg'


import Global from './Global'
import MainTop from './MainTop'
import BoxMain from './BoxMain'
import TextMain from './TextMain'


//사이드배너
import Side_1 from './side_1.gif'
import Side_2 from './side_2.gif'
import Side_3 from './side_3.gif'
import Side_4 from './side_4.gif'
const Home = () => {
    return (
      <div>
        
        <Global />
        <MainTop />
        <div className="left_banner">
          <Link to="/pro37"><img src={Side_1} alt="Smiley face" /></Link>
        </div>
        <div clasName="left_banner">
        <Link to="/pro10"><img src={Side_2} alt="Smiley face" /></Link>
         </div>
        <BoxMain />
        
        <TextMain />
        <div className="left_banner">
        <Link to="/pro33"><img src={Side_3} alt="Smiley face" /></Link>
        </div>
        <div clasName="left_banner">
        <Link to="/pro15"><img src={Side_4} alt="Smiley face" /></Link>
         </div>
      </div>
    )
}
export default Home

