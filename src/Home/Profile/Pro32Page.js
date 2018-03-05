import React, { Component } from 'react';
import './Pro1Page.css'
//http://divtable.com/generator/
import pro32 from '../BoxLogo/32.jpg'
import room from './room.jpg'
import ad from './ad.jpg'
import bar from './bar.jpg'
import last_ad from './lastAdd.jpg'
import Global from '../Global'
import MainTop_ver2 from '../MainTop_ver2'

class Pro32Page extends Component {
  render() {
    return (
      <div>
        <Global />
        <MainTop_ver2 />
      <div className="allcontent">
        <div className="viewContent">
          <div className="registerInfo">2018.02.20 10:46</div>
          <div className="viewTypeFullWidth">

            <div className="companyInfo infoBox">
              <div className="recruitInfo">
                <div className="company">
                  <span className="companyName">라인</span>
                </div>
                <h1>역삼 최다손님보유</h1>
                <div className="companyLogo">
                  <div className="logo">
                    <img src={pro32} alt="Smiley face"/>
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
                              2018.03.01
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
                              [TC]110,000원
                            </span>
                            <span></span>
                          </td>
                        </tr>
                        <tr>
                          <th>업종</th>
                          <td>
                            <span>
                              셔츠룸/텐카페
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
                              무제한
                            </span>
                            <span></span>
                          </td>
                        </tr>
                        <tr>
                          <th>근무시간</th>
                          <td>
                            <span>
                             18:00~12:00
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
                              라인
                            </span>
                            <span></span>
                          </td>
                        </tr>
                        <tr>
                          <th>담당자</th>
                          <td>
                            <span>
                              은실장
                            </span>
                            <span></span>
                          </td>
                        </tr>
                        <tr>
                          <th>연락처</th>
                          <td>
                            <span>
                            010-9468-0175
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
    <b>케어1등 은실장</b>
  </font>
  <br />
  <br />
  <br />
  <font color="#525252">
    <p align="center" style={{ margin: 0 }}>
      <font color="#c0504d" size={3}>
        <strong>★텐프로 텐카페 쩜오 환영해요★ </strong>
      </font>
    </p>
    <p align="center" style={{ margin: 0 }}>
      <strong>
        <font color="#c0504d" size={3}>
          셔츠룸 중 유일하게 지원금 드려요!
        </font>
      </strong>
    </p>
    <p align="center" style={{ margin: 0 }}>
      <strong>
        <font color="#c0504d" size={3}>
          <br />
        </font>
      </strong>
    </p>
    <p align="center" style={{ margin: 0 }}>
      &nbsp;
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font color="#7f7f7f" size={3}>
        <strong>
          <font color="#ff0000">√</font>
          <font color="#000000"> 케어1등 은실장 </font>
          <font color="#ff0000">√</font>
        </strong>
      </font>
    </p>
    <p align="center" style={{ margin: 0 }}>
      <strong>
        <font color="#ff0000" size={3} />
      </strong>&nbsp;
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font color="#000000" size={3}>
        <strong>☎ 010-9468-0175 ☎</strong>
      </font>
    </p>
    <p align="center" style={{ margin: 0 }}>
      <strong>
        <font size={3} />
      </strong>&nbsp;
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font color="#000000" size={3} style={{ backgroundColor: "#ffff00" }}>
        
      </font>
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font color="#000000" size={3} style={{ backgroundColor: "#ffff00" }} />&nbsp;
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font color="#7f7f7f" size={3}>
        ★----------<font color="#7f7f7f" size={3}>
          ★----------<font color="#7f7f7f" size={3}>
            ★----------★----------★
          </font>
        </font>
      </font>
    </p>
    <font color="#7f7f7f" size={3}>
      <p align="center" style={{ margin: 0 }}>
        <font color="#7f7f7f" size={3} />&nbsp;
      </p>
    </font>
    <span />
    <span />
    <span />
    <p align="center" style={{ margin: 0 }}>
      <font color="#7f7f7f" size={3} />&nbsp;
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font color="#7f7f7f" size={3}>
        안녕하세요!&nbsp;은실장입니다.
      </font>
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font color="#7f7f7f" size={3} />&nbsp;
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font color="#7f7f7f" size={3}>
        추운겨울 마음도 몸도 많이 추우시죠??
      </font>
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font color="#7f7f7f" size={3} />&nbsp;
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font color="#000000" size={3}>
        <strong>감기 조심하세요~</strong>
      </font>
    </p>
    <p align="center" style={{ margin: 0 }}>
      <strong>
        <font size={3} />
      </strong>&nbsp;
    </p>
    <p align="center" style={{ margin: 0 }}>
      <strong>
        <font size={3} />
      </strong>&nbsp;
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font color="#000000" size={3}>
        <strong />
      </font>&nbsp;
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font color="#000000" size={3} style={{ backgroundColor: "#b7dde8" }}>
        <strong>□&nbsp;지원자격 □</strong>
      </font>
    </p>
    <p align="center" style={{ margin: 0 }}>
      <strong>
        <font size={3} style={{ backgroundColor: "#b7dde8" }} />
      </strong>&nbsp;
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font color="#7f7f7f" size={3}>
        <u>(텐프로/텐카페/쩜오/퍼블릭/셔츠룸)</u>
      </font>
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font color="#7f7f7f" size={3} />&nbsp;
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font color="#7f7f7f" size={3}>
        <font color="#000000">셔츠룸</font> 21세이상 (T.O 5명){" "}
        <font color="#000000">면접 후 결정</font>
      </font>
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font size={3} />&nbsp;
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font color="#7f7f7f" size={3}>
        <font color="#000000">텐카페</font> 20세이상 (T.O 20명){" "}
        <font color="#000000">면접 후 결정</font>
      </font>
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font color="#000000" size={3} />&nbsp;
    </p>
    <p align="center" style={{ margin: 0 }}>
      &nbsp;
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font color="#7f7f7f" size={3}>
        <font color="#000000">룸카페</font> 20세이상 (T.O 30명){" "}
        <font color="#000000">당일 근무가능</font>
      </font>
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font size={3} />&nbsp;
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font color="#7f7f7f" size={3}>
        <font color="#000000">쩜오</font> 20세이상 (T.O 00명이상){" "}
        <font color="#000000">당일 근무가능</font>
      </font>
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font size={3} />&nbsp;
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font color="#7f7f7f" size={3}>
        <font color="#000000">퍼블릭</font> 20세이상 (T.O 00명이상){" "}
        <font color="#000000">당일 근무가능</font>
      </font>
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font size={3} />&nbsp;
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font color="#000000" size={3} />&nbsp;
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font color="#000000" size={3} />&nbsp;
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font color="#7f7f7f" size={3}>
        ★----------<font color="#7f7f7f" size={3}>
          ★----------<font color="#7f7f7f" size={3}>
            ★----------★----------★
          </font>
        </font>
      </font>
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font color="#7f7f7f" size={3} />&nbsp;
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font color="#7f7f7f" size={3} />&nbsp;
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font color="#000000" size={3} style={{ backgroundColor: "#b7dde8" }}>
        <strong>□&nbsp;페 이! □</strong>
      </font>
    </p>
    <p align="center" style={{ margin: 0 }}>
      <strong>
        <font size={3} style={{ backgroundColor: "#b7dde8" }} />
      </strong>&nbsp;
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font color="#ff0000" size={3}>
        셔츠룸 기준
      </font>
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font color="#ff0000" size={3} />&nbsp;
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font color="#ff0000" size={3}>
        보장 8~14개 가능!
      </font>
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font color="#ff0000" size={3}>
        (20일 기준 지원금 드려요!)
      </font>
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font color="#ff0000" size={3} />&nbsp;
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font color="#7f7f7f" size={3}>
        당일 지급은 기본이며 계좌 현금 모두 가능해요!
      </font>
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font color="#7f7f7f" size={3} />&nbsp;
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font color="#7f7f7f" size={3} />&nbsp;
    </p>
    <font color="#7f7f7f" size={3}>
      <font color="#7f7f7f" size={3}>
        <strong />
        <font color="#7f7f7f" size={3}>
          <font color="#ff0000">
            <p align="center" style={{ margin: 0 }}>
              <font color="#7f7f7f" size={3}>
                <strong>
                  <font color="#ff0000">√</font>
                  <font color="#000000"> 은실장 </font>
                  <font color="#ff0000">√</font>
                </strong>
              </font>
            </p>
          </font>
        </font>
        <p align="center" style={{ margin: 0 }}>
          <strong>
            <font color="#ff0000" />
          </strong>&nbsp;
        </p>
        <p align="center" style={{ margin: 0 }}>
          <font color="#000000" size={3}>
            <strong>☎ 010-9468-0175 ☎</strong>
          </font>
        </p>
        <p align="center" style={{ margin: 0 }}>
          <strong>
            <font color="#000000" />
          </strong>&nbsp;
        </p>
        <p align="center" style={{ margin: 0 }}>
          <font color="#000000" size={3} style={{ backgroundColor: "#ffff00" }}>
            
          </font>
        </p>
      </font>
      <p align="center" style={{ margin: 0 }}>
        &nbsp;
      </p>
      <p align="center" style={{ margin: 0 }}>
        &nbsp;
      </p>
      <p align="center" style={{ margin: 0 }}>
        ★----------<font color="#7f7f7f" size={3}>
          ★----------<font color="#7f7f7f" size={3}>
            ★----------★----------★
          </font>
        </font>
      </p>
      <p align="center" style={{ margin: 0 }}>
        &nbsp;
      </p>
      <p align="center" style={{ margin: 0 }}>
        &nbsp;
      </p>
      <p align="center" style={{ margin: 0 }}>
        <font color="#000000">
          <strong>당신이 꽃을 피울 수 있게 도와드려요~</strong>
        </font>
      </p>
      <p align="center" style={{ margin: 0 }}>
        <strong>
          <font color="#000000" />
        </strong>&nbsp;
      </p>
      <p align="center" style={{ margin: 0 }}>
        &nbsp;
      </p>
      <p align="center" style={{ margin: 0 }}>
        개인의 성향 취향{" "}
        <font color="#000000">
          <strong>근무시간 등 복잡한 상황</strong>
        </font>을
      </p>
      <p align="center" style={{ margin: 0 }}>
        &nbsp;
      </p>
      <p align="center" style={{ margin: 0 }}>
        가급적{" "}
        <font color="#000000">
          <strong>최대한 편하게 해드리기 위해서</strong>{" "}
        </font>많은
      </p>
      <p align="center" style={{ margin: 0 }}>
        &nbsp;
      </p>
      <p align="center" style={{ margin: 0 }}>
        시스템의 가게를 준비한거니까<font color="#000000">
          <strong> 많은 지원 바래요</strong>
        </font>!
      </p>
      <p align="center" style={{ margin: 0 }}>
        &nbsp;
      </p>
      <p align="center" style={{ margin: 0 }}>
        &nbsp;
      </p>
      <p align="center" style={{ margin: 0 }}>
        ★----------<font color="#7f7f7f" size={3}>
          ★----------<font color="#7f7f7f" size={3}>
            ★----------★----------★
          </font>
        </font>
      </p>
      <p align="center" style={{ margin: 0 }}>
        &nbsp;
      </p>
      <p align="center" style={{ margin: 0 }}>
        &nbsp;
      </p>
      <p align="center" style={{ margin: 0 }}>
        <font color="#000000">
          당연한 일들이 마치 혜택인것처럼 광고하지 않아요
        </font>
      </p>
      <p align="center" style={{ margin: 0 }}>
        <font color="#000000" />&nbsp;
      </p>
      <p align="center" style={{ margin: 0 }}>
        여러분들이 집에서 나올때부터 퇴근때까지
      </p>
      <p align="center" style={{ margin: 0 }}>
        &nbsp;
      </p>
      <p align="center" style={{ margin: 0 }}>
        같이 웃으면서 편안하게 해드릴 수 있어요~
      </p>
      <p align="center" style={{ margin: 0 }}>
        &nbsp;
      </p>
      <p align="center" style={{ margin: 0 }}>
        &nbsp;
      </p>
      <p align="center" style={{ margin: 0 }}>
        <font color="#000000">편안한 시간대 </font>
        <font color="#ff0000">
          <strong>면접 언제나 가능</strong>
        </font>하니까{" "}
      </p>
      <p align="center" style={{ margin: 0 }}>
        &nbsp;
      </p>
      <p align="center" style={{ margin: 0 }}>
        편안하게 문의해주시면{" "}
        <font color="#000000">
          <strong>성심성의껏 </strong>
        </font>
        <font color="#000000">
          <strong>답변</strong>
        </font>해{" "}
      </p>
      <p align="center" style={{ margin: 0 }}>
        &nbsp;
      </p>
      <p align="center" style={{ margin: 0 }}>
        드리니까{" "}
        <strong>
          <font color="#000000">언제든지 연락주세요!</font>
        </strong>
      </p>
      <p align="center" style={{ margin: 0 }}>
        <font color="#000000" />&nbsp;
      </p>
      <p align="center" style={{ margin: 0 }}>
        <font color="#000000" />&nbsp;
      </p>
      <p align="center" style={{ margin: 0 }}>
        ★----------<font color="#7f7f7f" size={3}>
          ★----------<font color="#7f7f7f" size={3}>
            ★----------★----------★
          </font>
        </font>
      </p>
      <p align="center" style={{ margin: 0 }}>
        &nbsp;
      </p>
      <p align="center" style={{ margin: 0 }}>
        &nbsp;
      </p>
      <p align="center" style={{ margin: 0 }}>
        <font color="#ff0000">
          <strong>
            <u>√ 이것이 팩트!</u>
          </strong>
        </font>
      </p>
      <p align="center" style={{ margin: 0 }}>
        <font color="#ff0000">
          <strong />
        </font>&nbsp;
      </p>
      <p align="center" style={{ margin: 0 }} />
      <table
        width="100%"
        style={{
          border: "1px solid rgb(0, 0, 0)",
          borderImage: "none",
          borderCollapse: "collapse"
        }}
        cellSpacing={0}
        cellPadding={1}
      >
        <tbody>
          <tr>
            <td
              style={{ border: "1px solid rgb(0, 0, 0)", borderImage: "none" }}
            >
              <font color="#7f7f7f">&nbsp;사이즈에 따라 페이가 다른가요?</font>
            </td>
            <td
              style={{ border: "1px solid rgb(0, 0, 0)", borderImage: "none" }}
            >
              <font color="#7f7f7f">
                <font color="#ff0000">&nbsp;NO!!</font> 그렇지 않아요!! 페이는
                만들어 드려요!
              </font>
            </td>
          </tr>
          <tr>
            <td
              style={{ border: "1px solid rgb(0, 0, 0)", borderImage: "none" }}
            >
              <font color="#7f7f7f">&nbsp;술 많이먹나요?</font>
            </td>
            <td
              style={{ border: "1px solid rgb(0, 0, 0)", borderImage: "none" }}
            >
              <font color="#7f7f7f">
                <font color="#ff0000">&nbsp;NO!! </font>절대 많이 안먹습니다!!{" "}
              </font>
            </td>
          </tr>
          <tr>
            <td
              style={{ border: "1px solid rgb(0, 0, 0)", borderImage: "none" }}
            >
              <font color="#7f7f7f">&nbsp;초보자를 속이는 일이 있나요?</font>
            </td>
            <td
              style={{ border: "1px solid rgb(0, 0, 0)", borderImage: "none" }}
            >
              <font color="#7f7f7f">
                <font color="#ff0000">&nbsp;NO!!</font> 초보는 무조건
                잘해드려요!
              </font>
            </td>
          </tr>
          <tr>
            <td
              style={{ border: "1px solid rgb(0, 0, 0)", borderImage: "none" }}
            >
              <font color="#7f7f7f">&nbsp;손님은 많은가요?</font>
            </td>
            <td
              style={{ border: "1px solid rgb(0, 0, 0)", borderImage: "none" }}
            >
              <font color="#7f7f7f">
                &nbsp;<font color="#ff0000">YES!!</font> 강남 전체에서 가장
                많아요!
              </font>
            </td>
          </tr>
          <tr>
            <td
              style={{ border: "1px solid rgb(0, 0, 0)", borderImage: "none" }}
            >
              <font color="#7f7f7f">
                &nbsp;그래서 한달에 얼마나 버나요?{" "}
              </font>
            </td>
            <td
              style={{ border: "1px solid rgb(0, 0, 0)", borderImage: "none" }}
            >
              <font color="#7f7f7f">
                &nbsp;<font color="#ff0000">YES!! </font>
                출근만 잘하시면 단언컨데 월천 우습게 넘습니다. 물어보세요~
              </font>
            </td>
          </tr>
        </tbody>
      </table>
      <p />
      <p align="center" style={{ margin: 0 }}>
        &nbsp;
      </p>
      <p align="center" style={{ margin: 0 }}>
        &nbsp;
      </p>
      <p align="center" style={{ margin: 0 }}>
        <font color="#000000">
          <strong>
            <u>당신에게 봄이 올 시간입니다~!!</u>
          </strong>
        </font>
      </p>
      <p align="center" style={{ margin: 0 }}>
        <strong>
          <u>
            <font color="#000000" />
          </u>
        </strong>&nbsp;
      </p>
      <p align="center" style={{ margin: 0 }}>
        많은 지원 바랍니다^^
      </p>
      <p align="center" style={{ margin: 0 }} />
      <p align="center" style={{ margin: 0 }}>
        <font color="#7f7f7f" size={3}>
          &nbsp;
        </font>
      </p>
      <p align="center" style={{ margin: 0 }}>
        <font color="#7f7f7f" size={3}>
          &nbsp;
        </font>
      </p>
      <font color="#7f7f7f" size={3}>
        <font color="#7f7f7f" size={3}>
          <font color="#ff0000">
            <p align="center" style={{ margin: 0 }}>
              <font color="#7f7f7f" size={3}>
                <strong>
                  <font color="#ff0000">√</font>
                  <font color="#000000"> 케어1등 은실장 </font>
                  <font color="#ff0000">√</font>
                </strong>
              </font>
            </p>
          </font>
        </font>
        <p align="center" style={{ margin: 0 }}>
          <strong>
            <font color="#ff0000" />
          </strong>&nbsp;
        </p>
        <p align="center" style={{ margin: 0 }}>
          <font color="#000000" size={3}>
            <strong>☎ 010-9468-0175☎</strong>
          </font>
        </p>
        <p align="center" style={{ margin: 0 }}>
          <strong>
            <font color="#000000" />
          </strong>&nbsp;
        </p>
        <p align="center" style={{ margin: 0 }}>
          <font color="#000000" size={3} style={{ backgroundColor: "#ffff00" }}>
            
          </font>
        </p>
      </font>
    </font>
  </font>
  <br />
</div>;

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

export default Pro32Page