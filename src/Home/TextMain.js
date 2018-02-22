import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './index.css'
import textInfo from './textInfo.jpg'
import fastIcon from './fast.gif'

class TextMain extends Component {
    render() {
        return (
            <div className="text_main">
                <img className="textInfo" src={textInfo} />
                <div className="text-left-main">
                    <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                        <a>급하게 사람 구해요</a>
                    </div>
                    <div className="text-clear">
                    </div>
                    <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                        급하게 사람 구해요
                    </div> 
                    <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                        <img src={fastIcon} /> 급하게 사람 구해요
                    </div> 
                </div>

                <div className="text-left-main">
                    <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                        <a>급하게 사람 구해요</a>
                    </div>
                    <div className="text-clear">
                    </div>
                    <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                        급하게 사람 구해요
                    </div> 
                </div>
            </div>
        )
    }
}

export default TextMain;