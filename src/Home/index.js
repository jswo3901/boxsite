import React, { Component } from 'react';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
import './index.css'

const Home = () => {
    return (
        <div>
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={8}>
                        <div className="box_1">
                            광고박스 1
                        </div>
                        <div>
                            광고박스 2
                        </div>
                        <div>
                            광고박스 3
                        </div>
                        <div>
                            광고박스 4
                        </div>
                        <div>
                            광고박스 5
                        </div>
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

