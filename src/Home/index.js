import React, { Component } from 'react';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
import './index.css'
import pro1 from './pro1.gif'
import Pro1Page from './Pro1Page'

import pro2 from './pro2.gif'
import pro3 from './pro3.gif'
import pro4 from './pro4.gif'
import pro5 from './pro5.gif'

const Home = () => {
    return (
        <div>
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={3}>
                        <div className="box_1">
                            <Link to="/pro1"><img src={pro1} alt="Smiley face" /></Link>
                        </div>
                        <Route path="/pro1" component={Pro1Page}/>
                    </Col>
                    <Col xs={12} md={3}>
                        <img src={pro2} alt="Smiley face" />
                    </Col>
                    <Col xs={12} md={3}>
                        <img src={pro3} alt="Smiley face" />
                    </Col>
                    <Col xs={12} md={3}>
                        <img src={pro4} alt="Smiley face" />
                    </Col>
                </Row> 
            </Grid>
        </div>
    )
}


// const HomeRoute = () => {
//     return(
// <div>hi</div>
//     )
// }
export default Home

