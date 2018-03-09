import React, { Component } from 'react';
import './Pro1Page.css'
//http://divtable.com/generator/
import pro16 from '../BoxLogo/16.jpg'
import room from './room.jpg'
import ad from './ad.jpg'
import bar from './bar.jpg'
import last_ad from './lastAdd.jpg'
import Global from '../Global'
import MainTop_ver2 from '../MainTop_ver2'

class Pro16Page extends Component {
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
          <div className="registerInfo">2018.02.25 10:06</div>
          <div className="viewTypeFullWidth">

            <div className="companyInfo infoBox">
              <div className="recruitInfo">
                <div className="company">
                  <span className="companyName">신사 메이저</span>
                </div>
                <h1>★셔츠퍼블릭★티씨11만</h1>
                <div className="companyLogo">
                  <div className="logo">
                    <img src={pro16} alt="Smiley face"/>
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
                              유사직종 경험 상관X
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
                              강남구 신사동
                            </span>
                            <span></span>
                          </td>
                        </tr>
                        <tr>
                          <th>근무기간</th>
                          <td>
                            <span>
                              무제한
                            </span>
                            <span></span>
                          </td>
                        </tr>
                        <tr>
                          <th>근무시간</th>
                          <td>
                            <span>
                              09:00~18:00
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
                              메이저
                            </span>
                            <span></span>
                          </td>
                        </tr>
                        <tr>
                          <th>담당자</th>
                          <td>
                            <span>
                              탁실장
                            </span>
                            <span></span>
                          </td>
                        </tr>
                        <tr>
                          <th>연락처</th>
                          <td>
                            <span>
                            010-7523-7669
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
              <div align="center">
  <br />
  <br />
  <font color="red" size={6}>
    <b>♥강남№신사1등♥</b>
  </font>
  <br />
  <br />
  <br />
  <font color="#525252">
    <div align="center">
      <font style={{ fontSize: "16pt" }}>
        <font style={{ fontSize: "14pt" }}>
          <font style={{ fontSize: "9pt" }}>
            <font style={{ fontSize: "14pt" }}>
              <font style={{ fontSize: "8pt" }}>
                <font style={{ fontSize: "18pt" }}>
                  <font style={{ fontSize: "14pt" }}>
                    <font color="#3399ff">
                      <br />
                      <font
                        color="#4b0082"
                        face="맑은 고딕"
                        style={{ backgroundColor: "#f08080" }}
                      >
                        <strong />
                      </font>
                    </font>
                  </font>
                </font>
              </font>
            </font>
          </font>
        </font>
      </font>
    </div>
  </font>
  <div align="center">
    <font color="#525252">
      <div align="center">
        <font style={{ fontSize: "16pt" }}>
          <font style={{ fontSize: "14pt" }}>
            <font style={{ fontSize: "9pt" }}>
              <font style={{ fontSize: "14pt" }}>
                <font style={{ fontSize: "8pt" }}>
                  <font style={{ fontSize: "18pt" }}>
                    <font style={{ fontSize: "14pt" }}>
                      <font color="#3399ff">
                        <font
                          color="#4b0082"
                          face="맑은 고딕"
                          style={{ backgroundColor: "#f08080" }}
                        >
                          <strong>
                            강남에서 일 많기로 소문나고
                            <br />맘편히 즐겁게 일할 수 있는곳!!!
                          </strong>
                        </font>
                      </font>
                      <font
                        color="#4b0082"
                        face="맑은 고딕"
                        style={{ backgroundColor: "#f08080" }}
                      >
                        <strong>
                          {" "}
                        </strong>
                      </font>
                    </font>
                  </font>
                </font>
              </font>
            </font>
          </font>
        </font>
      </div>
      <font size={+0}>
        <font size={+0}>
          <font size={+0}>
            <font size={+0}>
              <font size={+0}>
                <div
                  align="center"
                  style={{
                    color: "#222222",
                    fontSize: 16,
                    backgroundColor: "#fffafa"
                  }}
                >
                  <font color="#4b0082" face="맑은 고딕" size={4}>
                    <strong>
                      <font
                        color="#ff4500"
                        size={5}
                        style={{ backgroundColor: "#fffafa" }}
                      >
                        <span style={{ lineHeight: "1.5" }}>
                          <span style={{ lineHeight: "1.5" }} />
                        </span>
                      </font>
                    </strong>
                    <p align="center" style={{ margin: 0 }}>
                      &nbsp;
                    </p>
                    <p align="center" style={{ margin: 0 }}>
                      <strong>
                        <font
                          color="#ff4500"
                          size={5}
                          style={{ backgroundColor: "#fffafa" }}
                        >
                          <span style={{ lineHeight: "1.5" }}>
                            <span style={{ lineHeight: "1.5" }} />
                          </span>
                        </font>
                      </strong>{" "}
                    </p>
                    <p align="center" style={{ margin: 0 }}>
                      &nbsp;
                    </p>
                  </font>
                  <p align="center" style={{ margin: 0 }}>
                    <font color="#4b0082" face="맑은 고딕" size={4} />
                    <font color="#4b0082" face="맑은 고딕" size={4}>
                      강남,신사&nbsp;최고의 번화가에 위치한
                    </font>
                  </p>
                </div>
                <div
                  align="center"
                  style={{
                    color: "#222222",
                    fontSize: 16,
                    backgroundColor: "#fffafa"
                  }}
                >
                  <font color="#ff0000" face="맑은 고딕" size={5}>
                    <strong />
                  </font>&nbsp;
                </div>
                <div
                  align="center"
                  style={{
                    color: "#222222",
                    fontSize: 16,
                    backgroundColor: "#fffafa"
                  }}
                >
                  <font color="#ff0000" face="맑은 고딕" size={6}>
                    <strong>*메이저*</strong>
                  </font>
                </div>
                <div
                  align="center"
                  style={{
                    color: "#222222",
                    fontSize: 16,
                    backgroundColor: "#fffafa"
                  }}
                >
                  <font color="#002060" face="맑은 고딕" size={6} />&nbsp;
                </div>
                <div
                  align="center"
                  style={{
                    color: "#222222",
                    fontSize: 16,
                    backgroundColor: "#fffafa"
                  }}
                >
                  <font
                    color="#0070c0"
                    face="맑은 고딕"
                    size={6}
                    style={{ backgroundColor: "#ffff00" }}
                  >
                    ☎010&nbsp;7523
                  </font>
                  <font
                    color="#0070c0"
                    face="맑은 고딕"
                    size={6}
                    style={{ backgroundColor: "#ffff00" }}
                  >
                    &nbsp;7669☎
                  </font>
                </div>
                <div
                  align="center"
                  style={{
                    color: "#222222",
                    fontSize: 16,
                    backgroundColor: "#fffafa"
                  }}
                >
                  <font
                    color="#0070c0"
                    face="맑은 고딕"
                    size={2}
                    style={{ backgroundColor: "#ffff00" }}
                  >
                    카톡:trra10
                  </font>
                </div>
                <div
                  align="center"
                  style={{
                    color: "#222222",
                    fontSize: 16,
                    backgroundColor: "#fffafa"
                  }}
                >
                  <font color="#4b0082" face="맑은 고딕" size={4}>
                    가족처럼함께
                  </font>
                  <font color="#3399ff">
                    <font size={4}>
                      <font face="맑은 고딕">
                        <br />
                      </font>
                      <font color="#000000">
                        <font face="맑은 고딕">
                          <font color="#4b0082">
                            일하실 공주님들을 모십니다.
                          </font>
                        </font>
                      </font>
                    </font>
                  </font>
                </div>
                <div align="center">
                  <font
                    color="#ffffff"
                    face="맑은 고딕"
                    size={7}
                    style={{ backgroundColor: "#000000" }}
                  >
                    <span
                      style={{ fontSize: "14pt", backgroundColor: "#ffffff" }}
                    />
                  </font>&nbsp;
                </div>
                <div
                  align="center"
                  style={{
                    color: "#222222",
                    fontSize: 18,
                    backgroundColor: "#fffafa"
                  }}
                >
                  <font color="#c02d9f" face="맑은 고딕" />&nbsp;
                </div>
                <div
                  align="center"
                  style={{
                    color: "#222222",
                    fontSize: 18,
                    backgroundColor: "#fffafa"
                  }}
                >
                  <font color="#c02d9f" face="맑은 고딕">자격요건{" "}
                  </font>
                </div>
              </font>
            </font>
          </font>
        </font>
      </font>
    </font>
    <strong style={{ lineHeight: "normal", fontFamily: "Dotum, 돋움" }}>
      <div align="center" className="바탕글">
        <font face="Arial Black" style={{ color: "#222222" }}>
          <font style={{ backgroundColor: "#00ffff" }}>
            <font color="#ff0000">
              <font color="#876eba">
                <font color="#0000cd">
                  <font color="#525252">
                    <font color="#525252">
                      <font
                        color="#0000ff"
                        style={{ fontSize: "12pt", backgroundColor: "#fffafa" }}
                      >
                        <font size={2}>
                          <font style={{ backgroundColor: "#00ffff" }}>
                            <font
                              size={5}
                              style={{ backgroundColor: "#fffafa" }}
                            >
                              <div
                                align="center"
                                className="바탕글"
                                style={{ fontSize: 12 }}
                              >
                                <font color="#f08080">
                                  <font face="맑은 고딕" size={4} />
                                </font>&nbsp;
                              </div>
                              <div
                                align="center"
                                className="바탕글"
                                style={{ fontSize: 12 }}
                              >
                                <font color="#f08080">
                                  <font face="맑은 고딕" size={4}>
                                    <font
                                      color="#ff0000"
                                      style={{ fontSize: "large" }}
                                    >
                                      &nbsp;
                                    </font>20~36세 언니들이면 무조건 OK!!!<br />36세
                                    이상 언니들도 동안이면 OK!!!<br />
                                  </font>
                                </font>
                                <font face="맑은 고딕">
                                  <font size={4}>
                                    <font color="#f08080">
                                      알바, 투잡, 초보, 대학생 모두 환영이예요<br />
                                    </font>
                                    <font color="#ba55d3" />
                                  </font>
                                </font>
                              </div>
                              <div
                                align="center"
                                className="바탕글"
                                style={{ fontSize: 12 }}
                              >
                                <font face="맑은 고딕">
                                  <font size={4}>
                                    <font color="#ba55d3">
                                      <font
                                        color="#ff0000"
                                        style={{ fontSize: "large" }}
                                      />
                                    </font>
                                  </font>
                                </font>&nbsp;
                              </div>
                              <div
                                align="center"
                                className="바탕글"
                                style={{ fontSize: 12 }}
                              >
                                <font face="맑은 고딕">
                                  <font size={4}>
                                    <font color="#ba55d3">
                                      &nbsp;처음 하시는분 /{" "}
                                    </font>
                                  </font>
                                </font>
                              </div>
                              <div
                                align="center"
                                className="바탕글"
                                style={{ fontSize: 12 }}
                              >
                                <font face="맑은 고딕">
                                  <font size={4}>
                                    <font color="#ba55d3">
                                      술 못 드시는분 걱정 뚝~~~
                                    </font>
                                  </font>
                                </font>
                                <font
                                  style={{
                                    fontSize: "12pt",
                                    backgroundColor: "#ffc000"
                                  }}
                                >
                                  <font
                                    style={{
                                      fontSize: "12pt",
                                      backgroundColor: "#ffffff"
                                    }}
                                  >
                                    <br />
                                  </font>
                                </font>
                                <font color="#ba55d3" face="맑은 고딕">
                                  <font size={4}>초보여서?? 혼자여서?? </font>
                                </font>
                              </div>
                              <div
                                align="center"
                                className="바탕글"
                                style={{ fontSize: 12 }}
                              >
                                <font color="#ba55d3" face="맑은 고딕">
                                  <font size={4}>망설이지 마세요~~~</font>
                                  <br />
                                </font>
                              </div>
                              <font color="white">
                                <font color="#cc3300">
                                  <font
                                    color="#7f7f7f"
                                    style={{
                                      fontSize: "12pt",
                                      backgroundColor: "#ffc000"
                                    }}
                                  >
                                    <font
                                      color="#ff0000"
                                      style={{
                                        fontSize: "12pt",
                                        backgroundColor: "#ffffff"
                                      }}
                                    >
                                      <font size={+0} />
                                    </font>
                                  </font>
                                </font>
                              </font>
                              <div align="center" style={{ fontSize: 18 }}>
                                <font color="#cc0033">
                                  <font face="맑은 고딕">
                                    <font size={4}>
                                      <font color="#5f9ea0" />
                                    </font>
                                  </font>
                                </font>&nbsp;
                              </div>
                              <div align="center" style={{ fontSize: 18 }}>
                                <font color="#cc0033">
                                  <font face="맑은 고딕">
                                    <font size={4}>
                                      <font color="#5f9ea0">
                                        "항상 언니들 편에서 함께 하겠습니다!"
                                      </font>
                                    </font>
                                    <br />
                                  </font>
                                </font>
                                <font color="#c02d9f" face="맑은 고딕" />
                              </div>
                              <div align="center" style={{ fontSize: 18 }}>
                                <font color="#c02d9f" face="맑은 고딕" />&nbsp;
                              </div>
                              <div align="center" style={{ fontSize: 18 }}>
                                <font color="#c02d9f" face="맑은 고딕">페 이{" "}
                                </font>
                              </div>
                              <div align="center" style={{ fontSize: 18 }}>
                                <font color="#c02d9f" face="맑은 고딕" />&nbsp;
                              </div>
                              <div align="center" style={{ fontSize: 18 }}>
                                <font color="#c02d9f" face="맑은 고딕">
                                  <font
                                    color="#ff0000"
                                    style={{ fontSize: "large" }}
                                  >
                                    &nbsp;
                                  </font>1시간 20분이면 끝
                                </font>
                              </div>
                              <div align="center" style={{ fontSize: 18 }}>
                                <font color="#c02d9f" face="맑은 고딕">
                                  TC - 11만원
                                </font>
                              </div>
                              <div align="center" style={{ fontSize: 18 }}>
                                <font color="#c02d9f" face="맑은 고딕" />&nbsp;
                              </div>
                              <div align="center" style={{ fontSize: 18 }}>
                                <font color="#c02d9f" face="맑은 고딕">
                                  매일 평균-4~5방
                                </font>
                              </div>
                              <div align="center" style={{ fontSize: 18 }}>
                                <font color="#c02d9f" face="맑은 고딕" />
                                <font color="white">
                                  <span
                                    className="바탕글"
                                    style={{ backgroundColor: "#ec2e00" }}
                                  >
                                    <font
                                      face="맑은 고딕"
                                      size={4}
                                      style={{ backgroundColor: "#ff1493" }}
                                    >
                                      <br />
                                    </font>
                                  </span>
                                </font>
                              </div>
                              <div align="center" style={{ fontSize: 18 }}>
                                <font color="white">
                                  <span
                                    className="바탕글"
                                    style={{ backgroundColor: "#ec2e00" }}
                                  >
                                    <font
                                      face="맑은 고딕"
                                      size={5}
                                      style={{ backgroundColor: "#ff1493" }}
                                    >
                                      <font
                                        color="#ff0000"
                                        style={{ fontSize: "large" }}
                                      >
                                        &nbsp;
                                      </font>무조건 100% 당일 지급해드립니다^^
                                    </font>
                                  </span>
                                </font>
                              </div>
                              <font size={4} />
                            </font>
                          </font>
                        </font>
                      </font>
                    </font>
                  </font>
                </font>
              </font>
            </font>
          </font>
        </font>
        <div
          align="center"
          className="바탕글"
          style={{ color: "#222222", fontSize: 16 }}
        >
          <font face="Arial Black">
            <font style={{ backgroundColor: "#00ffff" }}>
              <font color="#ff0000">
                <font color="#876eba">
                  <font color="#0000cd">
                    <font color="#525252">
                      <font color="#525252">
                        <font
                          color="#0000ff"
                          style={{
                            fontSize: "12pt",
                            backgroundColor: "#fffafa"
                          }}
                        >
                          <font size={2}>
                            <font style={{ backgroundColor: "#00ffff" }}>
                              <font
                                size={5}
                                style={{ backgroundColor: "#fffafa" }}
                              >
                                <font
                                  color="#4b0082"
                                  face="맑은 고딕"
                                  size={4}
                                />
                              </font>
                            </font>
                          </font>
                        </font>
                      </font>
                    </font>
                  </font>
                </font>
              </font>
            </font>
          </font>&nbsp;
        </div>
        <div
          align="center"
          className="바탕글"
          style={{ color: "#222222", fontSize: 16 }}
        >
          <font face="Arial Black">
            <font style={{ backgroundColor: "#00ffff" }}>
              <font color="#ff0000">
                <font color="#876eba">
                  <font color="#0000cd">
                    <font color="#525252">
                      <font color="#525252">
                        <font
                          color="#0000ff"
                          style={{
                            fontSize: "12pt",
                            backgroundColor: "#fffafa"
                          }}
                        >
                          <font size={2}>
                            <font style={{ backgroundColor: "#00ffff" }}>
                              <font
                                size={5}
                                style={{ backgroundColor: "#fffafa" }}
                              >
                                <font color="#4b0082" face="맑은 고딕" size={4}>
                                  일은 너무 많은데 일하시는 분들이 항상 부족..{" "}
                                  <br />
                                </font>
                                <font size={4}>
                                  <font face="맑은 고딕">
                                    <font color="#4b0082">
                                      일이 없어서 돈 못 벌어가실{" "}
                                    </font>
                                  </font>
                                </font>
                              </font>
                            </font>
                          </font>
                        </font>
                      </font>
                    </font>
                  </font>
                </font>
              </font>
            </font>
          </font>
        </div>
        <div align="center" className="바탕글" style={{ fontSize: 16 }}>
          <font face="Arial Black">
            <font size={+0}>
              <font size={+0}>
                <font size={+0}>
                  <font size={+0}>
                    <font size={+0}>
                      <font size={+0}>
                        <font style={{ fontSize: "12pt" }}>
                          <font size={2}>
                            <font size={+0}>
                              <font size={5}>
                                <font size={4} style={{ color: "#222222" }}>
                                  <font face="맑은 고딕">
                                    <font color="#4b0082" />
                                  </font>
                                </font>
                              </font>
                            </font>
                          </font>
                        </font>
                      </font>
                    </font>
                  </font>
                </font>
              </font>
            </font>
          </font>&nbsp;
        </div>
        <div align="center" className="바탕글" style={{ fontSize: 16 }}>
          <font face="Arial Black">
            <font size={+0}>
              <font size={+0}>
                <font size={+0}>
                  <font size={+0}>
                    <font size={+0}>
                      <font size={+0}>
                        <font style={{ fontSize: "12pt" }}>
                          <font size={2}>
                            <font size={+0}>
                              <font size={5}>
                                <font size={4} style={{ color: "#222222" }}>
                                  <font face="맑은 고딕">
                                    <font color="#4b0082">
                                      <font
                                        color="#ff0000"
                                        style={{ fontSize: "large" }}
                                      >
                                        &nbsp;
                                      </font>걱정은 하지마시구요<br />팁도
                                      잘나오며 , 팁은 부수입으로 전부 가져가시면
                                      되요
                                    </font>
                                  </font>
                                  <br />
                                </font>
                                <font size={+0}>
                                  <font face="맑은 고딕">
                                    <font size={4}>
                                      <font color="#ffffff" />
                                    </font>
                                  </font>
                                </font>
                              </font>
                            </font>
                          </font>
                        </font>
                      </font>
                    </font>
                  </font>
                </font>
              </font>
            </font>
          </font>
        </div>
        <div align="center" className="바탕글" style={{ fontSize: 16 }}>
          <font face="Arial Black">
            <font size={+0}>
              <font style={{ fontSize: "12pt" }}>
                <font size={+0}>
                  <font size={+0}>
                    <font face="맑은 고딕">
                      <font color="#ffffff" size={6}>
                        <div
                          align="center"
                          style={{
                            color: "#222222",
                            fontSize: 16,
                            backgroundColor: "#fffafa"
                          }}
                        >
                          <font
                            color="#0070c0"
                            face="맑은 고딕"
                            size={6}
                            style={{ backgroundColor: "#ffff00" }}
                          />&nbsp;
                        </div>
                        <div
                          align="center"
                          style={{
                            color: "#222222",
                            fontSize: 16,
                            backgroundColor: "#fffafa"
                          }}
                        >
                          <font
                            color="#0070c0"
                            face="맑은 고딕"
                            size={6}
                            style={{ backgroundColor: "#ffff00" }}
                          >
                            ☎010&nbsp;7523 7669
                          </font>
                        </div>
                        <div
                          align="center"
                          style={{
                            color: "#222222",
                            fontSize: 16,
                            backgroundColor: "#fffafa"
                          }}
                        >
                          <font
                            color="#0070c0"
                            face="맑은 고딕"
                            size={2}
                            style={{ backgroundColor: "#ffff00" }}
                          >
                            카톡:trra10
                          </font>
                        </div>
                      </font>
                    </font>
                  </font>
                </font>
              </font>
            </font>
          </font>
        </div>
        <div align="center" className="바탕글" style={{ fontSize: 16 }}>
          <font face="Arial Black">
            <font size={+0}>
              <font size={+0}>
                <font size={+0}>
                  <font size={+0}>
                    <font size={+0}>
                      <font size={+0}>
                        <font style={{ fontSize: "12pt" }}>
                          <font size={2}>
                            <font size={+0}>
                              <font size={5}>
                                <font size={+0}>
                                  <font face="맑은 고딕">
                                    <font size={4}>
                                      <font color="#ffffff" />
                                    </font>
                                  </font>
                                </font>
                              </font>
                            </font>
                          </font>
                        </font>
                      </font>
                    </font>
                  </font>
                </font>
              </font>
            </font>
          </font>&nbsp;
        </div>
        <div align="center" className="바탕글" style={{ fontSize: 16 }}>
          <font face="Arial Black">
            <font size={+0}>
              <font size={+0}>
                <font size={+0}>
                  <font size={+0}>
                    <font size={+0}>
                      <font size={+0}>
                        <font style={{ fontSize: "12pt" }}>
                          <font size={2}>
                            <font size={+0}>
                              <font size={5}>
                                <font size={+0}>
                                  <font face="맑은 고딕">
                                    <font size={4}>
                                      <font
                                        color="#000000"
                                        style={{ backgroundColor: "#ffffff" }}
                                      >
                                        <font
                                          color="#ff0000"
                                          style={{ fontSize: "large" }}
                                        >
                                          &nbsp;
                                        </font>최선을 다해 벌겠다는{" "}
                                      </font>
                                    </font>
                                  </font>
                                </font>
                              </font>
                            </font>
                          </font>
                        </font>
                      </font>
                    </font>
                  </font>
                </font>
              </font>
            </font>
          </font>
        </div>
        <div align="center" className="바탕글" style={{ fontSize: 16 }}>
          <font face="Arial Black">
            <font size={+0}>
              <font size={+0}>
                <font size={+0}>
                  <font size={+0}>
                    <font size={+0}>
                      <font size={+0}>
                        <font style={{ fontSize: "12pt" }}>
                          <font size={2}>
                            <font size={+0}>
                              <font size={5}>
                                <font style={{ backgroundColor: "#ffffff" }}>
                                  <font color="#000000">
                                    <font size={+0}>
                                      <font face="맑은 고딕">
                                        <font size={4}>
                                          <font size={+0}>
                                            욕심만 있으시다면
                                          </font>
                                          <br />
                                        </font>
                                      </font>
                                    </font>
                                    <font size={+0}>
                                      <font face="맑은 고딕">
                                        <font size={4}>
                                          <font size={+0}>
                                            저절로 언니들 통장에 쌓이게 될겁니다
                                          </font>
                                        </font>
                                      </font>
                                    </font>
                                  </font>
                                </font>
                              </font>
                            </font>
                          </font>
                        </font>
                      </font>
                    </font>
                  </font>
                </font>
              </font>
            </font>
          </font>
        </div>
        <div
          align="center"
          className="바탕글"
          style={{ color: "#222222", fontSize: 16 }}
        >
          <font color="white">
            <span className="바탕글" style={{ backgroundColor: "#0033ff" }}>
              <font
                color="#da70d6"
                size={6}
                style={{ backgroundColor: "#fffff0" }}
              >
                <font face="맑은 고딕" />
              </font>
            </span>
          </font>&nbsp;
        </div>
        <div
          align="center"
          className="바탕글"
          style={{ color: "#222222", fontSize: 16 }}
        >
          <font color="white">
            <span className="바탕글" style={{ backgroundColor: "#0033ff" }}>
              <font
                color="#da70d6"
                size={6}
                style={{ backgroundColor: "#fffff0" }}
              >
                <font face="맑은 고딕" />
              </font>
            </span>
          </font>&nbsp;
        </div>
        <div
          align="center"
          className="바탕글"
          style={{ color: "#222222", fontSize: 16 }}
        >
          <font color="white">
            <span className="바탕글" style={{ backgroundColor: "#0033ff" }}>
              <font
                color="#da70d6"
                size={6}
                style={{ backgroundColor: "#fffff0" }}
              >
                <font face="맑은 고딕">
                  <img
                    width={59}
                    height={59}
                    alt="일산90.gif"
                    src="http://www.girls.net/data/tmp/1705/itrnraoXKew9Bs4CpNUS1AA.gif"
                  />출 퇴 근
                </font>
              </font>
            </span>
          </font>
          <font color="#ff69b4">
            <br />
          </font>
        </div>
        <font color="#ff69b4">
          <font color="#c71585" face="맑은 고딕" size={4} />
        </font>
        <div
          align="center"
          className="바탕글"
          style={{ color: "#222222", fontSize: 16 }}
        >
          <font color="#ff69b4">
            <font color="#c71585" face="맑은 고딕" size={4}>
              <font color="#ff0000" style={{ fontSize: "large" }} />
            </font>
          </font>&nbsp;
        </div>
        <div
          align="center"
          className="바탕글"
          style={{ color: "#222222", fontSize: 16 }}
        >
          <font color="#ff69b4">
            <font color="#c71585" face="맑은 고딕" size={4}>
              &nbsp;저녁 7시30분부터
            </font>
          </font>
        </div>
        <font size={4} />
        <div
          align="center"
          className="바탕글"
          style={{ color: "#222222", fontSize: 16 }}
        >
          <font size={4}>
            <font color="#c71585" face="맑은 고딕">
              하고 싶을때까지 맘 편히 정해서 하세요~
              <br />나오구싶을때부터 가구싶을때까지~~<br />
            </font>
            <font color="#c71585" face="맑은 고딕">
              많이 버시면 좋겠죠
            </font>
            <br />
          </font>
          <font face="맑은 고딕">
            <font color="#ff69b4">
              <font size={4} />
            </font>
          </font>
        </div>
        <div
          align="center"
          className="바탕글"
          style={{ color: "#222222", fontSize: 16 }}
        >
          <font face="맑은 고딕">
            <font color="#ff69b4">
              <font size={4}>
                <font color="#ff0000" style={{ fontSize: "large" }} />
              </font>
            </font>
          </font>&nbsp;
        </div>
        <div
          align="center"
          className="바탕글"
          style={{ color: "#222222", fontSize: 16 }}
        >
          <font face="맑은 고딕">
            <font color="#ff69b4">
              <font size={4}>&nbsp;출/퇴근 [요일 / 시간] 모두 </font>
            </font>
          </font>
        </div>
        <div
          align="center"
          className="바탕글"
          style={{ color: "#222222", fontSize: 16 }}
        >
          <font face="맑은 고딕">
            <font color="#ff69b4">
              <font size={4}>
                완전 자유 입니다<br />
              </font>
            </font>
          </font>
        </div>
        <div
          align="center"
          className="바탕글"
          style={{ color: "#222222", fontSize: 16 }}
        >
          <font face="맑은 고딕">
            <font color="#ff69b4">
              <font size={4}>
                프리랜서 라고 생각하시면 되요^^ <br />아참.. 우리{" "}
                <font color="#6495ed">일요일</font> 만큼은 집에서 쉬는걸로 ^^;{" "}
              </font>
            </font>
          </font>
        </div>
        <div
          align="center"
          className="바탕글"
          style={{ color: "#222222", fontSize: 16 }}
        >
          <font face="맑은 고딕">
            <font color="#ff69b4">
              <font size={4}>느낌아니까~</font>
            </font>
          </font>
        </div>
        <div align="center" className="바탕글" style={{ color: "#222222" }}>
          <strong>
            <font face="맑은 고딕">
              <font color="#da70d6" size={6} />
            </font>
          </strong>&nbsp;
        </div>
        <div align="center" className="바탕글" style={{ color: "#222222" }}>
          <strong>
            <font face="맑은 고딕">
              <font color="#da70d6" size={6}>복장
              </font>&nbsp;
            </font>
          </strong>
          <br />
          <font color="#db7093" face="맑은 고딕" size={4}>
            <font color="#ff0000" style={{ fontSize: "large" }}>
              &nbsp;
            </font>복장은 자유롭게
          </font>
        </div>
        <div align="center" className="바탕글" style={{ color: "#222222" }}>
          <font size={4} />
          <font color="#db7093" face="맑은 고딕" size={4}>
            센스있게만 입어주시면 OK!!!^^
          </font>
          <font size={4}>
            <br />
          </font>
          <font color="#db7093" face="맑은 고딕" size={4}>
            깔끔하게 자신만의스타일로
          </font>
          <font face="맑은 고딕">
            <font color="#db7093" size={4}>
              입으시면되요
            </font>
            <br />
          </font>
          <font style={{ fontSize: "14pt" }}>
            <font color="#db7093" size={4}>
              <font face="맑은 고딕" />
            </font>
          </font>
        </div>
        <div align="center" className="바탕글" style={{ color: "#222222" }}>
          <font style={{ fontSize: "14pt" }}>
            <font color="#db7093" size={4}>
              <font face="맑은 고딕">
                이제 연락주시는 일만 남았습니다^^<br />
                <u>
                  <font color="#7f7f7f" />
                </u>
              </font>
            </font>
          </font>
        </div>
        <div align="center" className="바탕글" style={{ color: "#222222" }}>
          <font style={{ fontSize: "14pt" }}>
            <font color="#db7093" size={4}>
              <font face="맑은 고딕">
                <font color="#7f7f7f">
                  <u />
                </font>
              </font>
            </font>
          </font>&nbsp;
        </div>
        <div align="center" className="바탕글" style={{ color: "#222222" }}>
          <font style={{ fontSize: "14pt" }}>
            <font color="#db7093" size={4}>
              <font face="맑은 고딕">
                <font color="#7f7f7f">
                  <u>※ 믿고 </u>
                </font>
                <u>
                  <font color="#00b0f0">전화&amp;문자&amp;카톡</font>
                  <font color="#7f7f7f"> 주신 </font>
                </u>
              </font>
            </font>
          </font>
        </div>
        <div align="center" className="바탕글" style={{ color: "#222222" }}>
          <font style={{ fontSize: "14pt" }}>
            <font color="#db7093" size={4}>
              <font face="맑은 고딕">
                <u>
                  <font color="#7f7f7f">언니들에게 실망시키지 않겠습니다!</font>
                </u>
                <br />
              </font>
            </font>
          </font>
        </div>
        <div align="center" className="바탕글" style={{ color: "#222222" }}>
          <font style={{ fontSize: "14pt" }}>
            <font color="#db7093" size={4}>
              <font face="맑은 고딕">
              </font>
            </font>
          </font>
        </div>
        <div align="center" className="바탕글" style={{ color: "#222222" }}>
          <font style={{ fontSize: "14pt" }}>
            <font color="#db7093" size={4}>
              <font face="맑은 고딕">
                카톡/문자/1633전화 다받아요 상담가능합니다^^<br />부담갖지말고
                편하게 연락주세요~ <br />
              </font>
            </font>
          </font>
          <font style={{ fontSize: "14pt" }}>
            <font color="#ff0000" size={4}>
              <font face="맑은 고딕">
                <font color="#db7093">재미나게 웃으면서 일해요 ^^</font>
                <br />
              </font>
            </font>
          </font>
        </div>
        <div align="center" className="바탕글" style={{ color: "#222222" }}>
          <font color="#ff0000" style={{ fontSize: "18pt" }}>
            <font color="#228b22">
              <font face="맑은 고딕" style={{ backgroundColor: "#fffafa" }}>
                <strong>
                  <div
                    align="center"
                    style={{
                      color: "#222222",
                      fontSize: 16,
                      backgroundColor: "#fffafa"
                    }}
                  >
                    <font
                      color="#0070c0"
                      face="맑은 고딕"
                      size={6}
                      style={{ backgroundColor: "#ffff00" }}
                    >
                      ☎010&nbsp;7523 7669☎
                    </font>
                  </div>
                  <div
                    align="center"
                    style={{
                      color: "#222222",
                      fontSize: 16,
                      backgroundColor: "#fffafa"
                    }}
                  >
                    <font
                      color="#0070c0"
                      face="맑은 고딕"
                      size={2}
                      style={{ backgroundColor: "#ffff00" }}
                    >
                      카톡:trra10
                    </font>
                  </div>
                  <br />
                </strong>
              </font>
            </font>
          </font>
        </div>
      </div>
    </strong>
  </div>
  <br />
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

export default Pro16Page