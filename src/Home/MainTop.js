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
import Middle_Bottom_1 from './158_1.jpg'
import Middle_Bottom_2 from './158_2.jpg'
import Middle_Bottom_3 from './158_3.jpg'
class MainTop extends Component {
  render() {
    return (
            <div id="MainTop">
              <div className="mainTop1">
                <div id="TopBanner">
                  <Link to="/pro36"><img src={main_top} /></Link>
                </div>
                <div id="TopPr">
                  <Link to="/pro31"><img src={TopPr} /></Link>
                </div>
              </div>
              <div className="mainTop2">
                <ul id="PrimaryMenu">
                    <li className="list01">
                        <p className="titleSub">
                            오늘의 추천 알바
                        </p>
                        <p className="menu">
                          <Link to="/pro32"><img src={Middle_Bottom_1} /></Link>
                        </p>
                    </li>
                    <li className="list02">
                        <p className="titleSub">
                            당일 알바
                        </p>
                        <p className="menu">
                          <Link to="/pro19"><img src={Middle_Bottom_2} /></Link>
                        </p>
                    </li>
                    <li className="list03">
                        <p className="titleSub">
                            인기 알바
                        </p>
                        <p className="menu">
                          <Link to="/pro26"><img src={Middle_Bottom_3} /></Link>
                        </p>
                    </li>
                    
                </ul>
                <div id="PrimaryMenu2">
                  <Link to="/pro45"><img src={MiddlePr} /></Link>
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
                  사이트 관련 문의사항은 gnalba22@naver.com으로 문의바랍니다.
                </div>

              </div>
            </div>
    );
  }
}

export default MainTop;
