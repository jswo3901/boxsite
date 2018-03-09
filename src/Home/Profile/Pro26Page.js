import React, { Component } from 'react';
import './Pro1Page.css'
//http://divtable.com/generator/
import pro26 from '../BoxLogo/26.jpg'
import room from './room.jpg'
import ad from './ad.jpg'
import bar from './bar.jpg'
import last_ad from './lastAdd.jpg'
import Global from '../Global'
import MainTop_ver2 from '../MainTop_ver2'

class Pro26Page extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        <Global />
        <MainTop_ver2 />
      <div className="allcontent">
        <div className="viewContent">
          <div className="registerInfo">2018.02.28 17:32</div>
          <div className="viewTypeFullWidth">

            <div className="companyInfo infoBox">
              <div className="recruitInfo">
                <div className="company">
                  <span className="companyName">역삼 W</span>
                </div>
                <h1>★순수테이블★11만!</h1>
                <div className="companyLogo">
                  <div className="logo">
                    <img src={pro26} alt="Smiley face"/>
                  </div>
                </div>
              </div>
              {/* <div className="thumbnailContainer">
                <div className="viewThumbnail">
                  <div className="thumbnailImage">
                    <img src={room} alt="Smiley face"/>
                  </div>
                </div>
                <div className="viewWorkInfo">

                </div>
              </div> */}
            </div>

            <div className="conditionInfo verticalLine">
              <div className="column column_620 infoBox">
                <div className="recruitCondition">
                  <h2>모집조건</h2>
                  <div className="viewTable">
                    <table>
                      <tbody>
                        <tr>
                          <th>마감일</th>
                          <td>
                            <span>
                              무제한
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <th>모집인원</th>
                          <td>
                            <span>
                              00명
                            </span>
                            <span>(친구 동반지원 가능)</span>
                          </td>
                        </tr>
                        <tr>
                          <th>연령</th>
                          <td>
                            <span>
                              20살이상
                            </span>
                            <span>(1999년생 생일이 지나신 분)</span>
                          </td>
                        </tr>
                        <tr>
                          <th>경험유무</th>
                          <td>
                            <span>
                              경험 상관X
                            </span> 
                            <span>(초보자도 가능)</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="workCondition">
                  <h2>근무조건</h2>
                  <div className="viewTable">
                  <table>
                      <tbody>
                        <tr>
                          <th>급여</th>
                          <td>
                            <span>
                              [TC] 110,000원
                            </span>
                            <span></span>
                          </td>
                        </tr>
                        <tr>
                          <th>업종</th>
                          <td>
                            <span>
                              룸
                            </span>
                            <span></span>
                          </td>
                        </tr>
                        <tr>
                          <th>근무지 위치</th>
                          <td>
                            <span>
                              강남구 역삼동
                            </span>
                            <span></span>
                          </td>
                        </tr>
                        <tr>
                          <th>근무기간</th>
                          <td>
                            <span>
                              집살 때 까지
                            </span>
                            <span></span>
                          </td>
                        </tr>
                        <tr>
                          <th>근무시간</th>
                          <td>
                            <span>
                              24시간
                            </span>
                            <span></span>
                          </td>
                        </tr>
                        
                      </tbody>

                    </table>
                  </div>
                </div>
              </div>
              <div className="column column_340 infoBox">
                <h2>
                  채용담당자 정보
                </h2>
                <div className="viewTable">
                <table>
                      <tbody>
                        <tr>
                          <th>닉네임</th>
                          <td>
                            <span>
                              W
                            </span>
                            <span></span>
                          </td>
                        </tr>
                        <tr>
                          <th>담당자</th>
                          <td>
                            <span>
                              장일호
                            </span>
                            <span></span>
                          </td>
                        </tr>
                        <tr>
                          <th>연락처</th>
                          <td>
                            <span>
                            010-5609-0240
                            </span>
                            <span></span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    </div>
              </div>
            </div>

          </div>
          <div className="viewLinkAd">중간광고</div>
          <div className="viewTab">
            <div className="tabItem_workDetail">
              <h2>상세모집요강</h2>
              <div className="iframeCover">
              <div
  id="ct"
  style={{ marginTop: 10, borderBottom: "1px solid #e0e0e0", padding: 10 }}
>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    <strong style={{ boxSizing: "border-box", fontWeight: 700 }}>
      <span style={{ boxSizing: "border-box", fontSize: "14pt" }}>
        <span style={{ boxSizing: "border-box", fontSize: "14pt" }}>
        </span>
        <span style={{ boxSizing: "border-box", fontSize: "18pt" }}>
          역삼 &nbsp;W에서 언냐들 모집합니다.
        </span>
      </span>
    </strong>
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "15px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    &nbsp; W 에서 가족처럼 함께 근무할
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "15px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    &nbsp;
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "15px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    용모단정하고 서비스 마인드를 갖춘 직원을 아래와 같이 모집합니다^^
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "15px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    &nbsp;
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "15px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    &nbsp;
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "15px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    <u style={{ boxSizing: "border-box" }}>
      <span style={{ boxSizing: "border-box", color: "rgb(0,0,0)" }}>
        <u style={{ boxSizing: "border-box" }}>
          <strong style={{ boxSizing: "border-box", fontWeight: 700 }}>
            ★ W는 이렇게 다릅니다! ★
          </strong>
        </u>
      </span>
    </u>
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    <br style={{ boxSizing: "border-box" }} />
    <span
      style={{
        boxSizing: "border-box",
        fontSize: "14pt",
        color: "rgb(239,0,124)"
      }}
    >
      1.<span className="Apple-converted-space">&nbsp;</span>
    </span>
    <strong style={{ boxSizing: "border-box", fontWeight: 700 }}>
      <span
        style={{
          boxSizing: "border-box",
          fontSize: "14pt",
          color: "rgb(239,0,124)"
        }}
      >
        정식등록된 업체로써
      </span>
    </strong>
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "15px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    급여 당일지급 원칙으로 한치의 오차 없이 정확, 정직하게 운영됩니다!
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "15px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    따라서 급여 지불의 지연타매장에서 흔히 일어나는 일들에
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "15px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    대한 걱정은 깔끔하게 잊어 버리셔도 됩니다!
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    &nbsp;
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "15px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    <span
      style={{
        boxSizing: "border-box",
        fontSize: "14pt",
        color: "rgb(239,0,124)"
      }}
    >
      <strong style={{ boxSizing: "border-box", fontWeight: 700 }}>
        2. 직원들의 편의시설을 최대한 고려,
      </strong>
    </span>
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "15px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    편안한 휴식 환경을 위해 넓고 쾌적한 대기실을 준비하였으며,
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "15px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    직원들의 편안한 근무 환경 조성을 위해
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "15px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    야식 및 간식도 제공됩니다.
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "15px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    또, 귀가 시에는 기사님이 집까지 안전하게 모셔다 드립니다.
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    &nbsp;
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "15px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    <span
      style={{
        boxSizing: "border-box",
        fontSize: "14pt",
        color: "rgb(239,0,124)"
      }}
    >
      <strong style={{ boxSizing: "border-box", fontWeight: 700 }}>
        3. 고급스럽고 차분한 느낌을 강조한 룸이기에,
      </strong>
    </span>
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "15px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    <u style={{ boxSizing: "border-box" }}>
      예약제로 운영되는 멤버쉽 업체입니다
    </u>
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "15px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    진상 손님으로 인해 얼굴 붉히거나 스트레스 받는 일은 없을 것이며,
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "15px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    혹시라도 그런 손님이 계시면 즉각 대처합니다!
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    &nbsp;
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    &nbsp;
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    &nbsp;
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    <br style={{ boxSizing: "border-box" }} />
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    &nbsp;
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    <strong style={{ boxSizing: "border-box", fontWeight: 700 }}>
      <span style={{ boxSizing: "border-box", fontSize: "12pt" }}>
        &nbsp;★ TC는 100,000 ~ 110,000 입니다 ★
      </span>
    </strong>
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    &nbsp;
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    <span style={{ boxSizing: "border-box", fontSize: "12pt" }}>
      <strong style={{ boxSizing: "border-box", fontWeight: 700 }}>
        &nbsp;<span style={{ boxSizing: "border-box", fontSize: "12pt" }}>
          ★<span className="Apple-converted-space">&nbsp;</span>
        </span>근무시간 : 오후 5시 ~ 아침 10시<span className="Apple-converted-space">
          &nbsp;
        </span>
      </strong>
      <span style={{ boxSizing: "border-box", fontSize: "12pt" }}>
        <strong style={{ boxSizing: "border-box", fontWeight: 700 }}>★</strong>
      </span>
    </span>
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    <span style={{ boxSizing: "border-box", fontSize: "12pt" }}>
      <span style={{ boxSizing: "border-box", fontSize: "12pt" }} />
    </span>
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    <span style={{ boxSizing: "border-box", fontSize: "12pt" }}>
      <span style={{ boxSizing: "border-box", fontSize: "12pt" }}>
        <strong style={{ boxSizing: "border-box", fontWeight: 700 }}>
          (월 ~ 토요일)
        </strong>
      </span>
    </span>
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    &nbsp;
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "15px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    &nbsp;
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "15px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    <strong style={{ boxSizing: "border-box", fontWeight: 700 }}>
      출퇴근은 평일/주말 원하는 요일 자유입니다.
    </strong>
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    &nbsp;
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "15px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    <u style={{ boxSizing: "border-box" }}>1주일에 하루만 출근해도 OK</u>
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "15px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    &nbsp;
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "15px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    <u style={{ boxSizing: "border-box" }}>하루 2~3시간만 일해도 OK</u>
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    &nbsp;&nbsp;
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "15px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    혹시 이 시급보다 높게 받는다면 애기하세요 ! 거기보다 더 지급해드립니다!
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    &nbsp;
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "15px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    <strong style={{ boxSizing: "border-box", fontWeight: 700 }}>
      급여는 기본적으로 당일 지급이며
    </strong>
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    &nbsp;
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "15px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    근무하는 직원 모두가 가족이라는 생각으로
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    &nbsp;
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "15px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    편의를 최대한 지원해 드리려 하오니,
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    &nbsp;
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "15px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    면접이라는 부담보다는 편안하게 방문하여 차 한잔 하며 이야기 나누고 가세요^^
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "15px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    <br style={{ boxSizing: "border-box" }} />★ 직장인, 대학생 투잡 적극 추천
    합니다 ^^ ★
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    &nbsp;
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "15px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    &nbsp;★ 개인 사정이 있을 경우엔 급여를 선불로도 지급 가능합니다! ★
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    <br style={{ boxSizing: "border-box" }} />
    &nbsp;
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    <br style={{ boxSizing: "border-box" }} />
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    &nbsp;
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    &nbsp;
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    &nbsp;
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    <br style={{ boxSizing: "border-box" }} />
    <span style={{ boxSizing: "border-box", fontSize: "12pt" }}>
      <strong style={{ boxSizing: "border-box", fontWeight: 700 }}>
        *** 위치 오시는길 ***
      </strong>
    </span>
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    &nbsp;
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "15px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    <span style={{ boxSizing: "border-box" }}>
      주소 : 역삼역 2번출구 부근
    </span>
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    <span style={{ boxSizing: "border-box", fontSize: "12pt" }} />
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    &nbsp;
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    <strong style={{ boxSizing: "border-box", fontWeight: 700 }}>
      <span style={{ boxSizing: "border-box", fontSize: "12pt" }}>
        *** 문의 및 면접 접수번호 ***
        <h3> 010-5609-0240</h3>
      </span>
    </strong>
  </p>
  <p
    align="center"
  >
    &nbsp;
  </p>
  
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    <span style={{ boxSizing: "border-box", fontSize: "18pt" }}>
      <u style={{ boxSizing: "border-box" }}>
        <strong style={{ boxSizing: "border-box", fontWeight: 700 }}>
          <br style={{ boxSizing: "border-box" }} />
        </strong>
      </u>
    </span>
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/22px dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
    &nbsp;
  </p>
  <p
    align="center"
    style={{
      boxSizing: "border-box",
      whiteSpace: "normal",
      wordSpacing: 0,
      textTransform: "none",
      wordBreak: "break-all",
      color: "rgb(51,51,51)",
      paddingBottom: 0,
      textAlign: "center",
      paddingTop: 0,
      font: "12px/1.5 dotum, sans-serif",
      paddingLeft: 0,
      margin: 0,
      widows: 1,
      letterSpacing: "normal",
      paddingRight: 0,
      backgroundColor: "rgb(255,255,255)",
      textIndent: 0,
      WebkitTextStrokeWidth: 0
    }}
  >
  </p>
  <p
    align="center"
  >
    전화 부재시 문자를 남겨주세요
  </p>
  <p
    align="center"
  >
    <br style={{ boxSizing: "border-box" }} />면접 오셔서 분위기와 근무조건
    꼼꼼히 살펴 보고 결정 하신다면
  </p>
  <p
    align="center"
  >
    &nbsp;
  </p>
  <p
    align="center"
  >
    좋은 기회를 얻었다는 생각이 드실거에요 ~~~ ^^
  </p>
  <p
    align="center"
  >
    &nbsp;
  </p>
  <p
    align="center"
  >
    마음 편하게 지원해주세요^^
  </p>
  <p
    align="center"
  >
    &nbsp;
  </p>
  <p
    align="center"
  >
    감사합니다!!!!
  </p>
  <p
    align="center"
  >
    &nbsp;
  </p>
  <p
    align="center"
  >
    좋은 하루 되세요^-^
  </p>

</div>

              </div>
              

            </div>
          </div>
          <div className="lastAd">
            {/* <img src={last_ad} alt="smiley" /> */}
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Pro26Page