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
class MainTop extends Component {
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
              <div className="mainTop2">
                <ul id="PrimaryMenu">
                    <li className="list01">
                        <p className="titleSub">
                            오늘의 추천 알바
                        </p>
                        <p className="menu">
                          <img src="http://via.placeholder.com/158x139" />
                        </p>
                    </li>
                    <li className="list02">
                        <p className="titleSub">
                            당일 알바
                        </p>
                        <p className="menu">
                          <img src="http://via.placeholder.com/158x139" />
                        </p>
                    </li>
                    <li className="list03">
                        <p className="titleSub">
                            인기 알바
                        </p>
                        <p className="menu">
                          <img src="http://via.placeholder.com/158x139" />
                        </p>
                    </li>
                    
                </ul>
                <div id="PrimaryMenu2">
                  <img src={MiddlePr} />
                </div>

                <div id="PrimaryLoginMenu3">
                  <div className="radio">
                    <div className="first_radio">
                      <input type="radio" name="contact" value="pri"/>
                        <span>개인회원</span>
                    </div>
                    <div className="second_radio">
                      <input clasName="second_radio1" type="radio" name="contact" value="com"/>
                        <span>기업회원</span>
                    </div>
                  </div>
                  <div className="input_id">
                    <div>
                      <input placeholder="ID" size="15"/>
                    </div>
                    <div>
                      <input placeholder="PASSWORD" size="15"/>
                    </div>
                  </div>
                    <button className="login_button">로그인 </button>
                </div>

                <div id="PrimaryMenu4">
                  <a>공지사항!!</a>
                  당분간 회원가입이 정지되었습니다. 
                </div>

              </div>
            </div>
    );
  }
}

export default MainTop;
