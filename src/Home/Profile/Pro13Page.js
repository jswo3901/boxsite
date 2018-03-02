import React, { Component } from 'react';
import './Pro1Page.css'
//http://divtable.com/generator/
import pro13 from '../BoxLogo/13.jpg'
import room from './room.jpg'
import ad from './ad.jpg'
import bar from './bar.jpg'
import last_ad from './lastAdd.jpg'
import Global from '../Global'
import MainTop_ver2 from '../MainTop_ver2'

class Pro13Page extends Component {
  render() {
    return (
      <div>
        <Global />
        <MainTop_ver2 />
      <div className="allcontent">
        <div className="viewContent">
          <div className="registerInfo">2018.02.27 08:30</div>
          <div className="viewTypeFullWidth">

            <div className="companyInfo infoBox">
              <div className="recruitInfo">
                <div className="company">
                  <span className="companyName">퍼블릭 골드</span>
                </div>
                <h1>술안먹고 짧은테이블</h1>
                <div className="companyLogo">
                  <div className="logo">
                    <img src={pro13} alt="Smiley face"/>
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
                              100명
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
                            [TC] 100,000원
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
                              1~3개월
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
                              골드
                            </span>
                            <span></span>
                          </td>
                        </tr>
                        <tr>
                          <th>담당자</th>
                          <td>
                            <span>
                              석프로
                            </span>
                            <span></span>
                          </td>
                        </tr>
                        <tr>
                          <th>연락처</th>
                          <td>
                            <span>
                              010-5279-3901
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
  <div
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, Dotum, AppleGothic, sans-serif",
      textAlign: "center"
    }}
  >
    &nbsp;<strong
      맑은
      style={{
        fontFamily: "돋움, Dotum, Helvetica, sans-serif",
        fontSize: "9pt"
      }}
    >
      <font
        face="굴림"
        size={5}
        style={{ backgroundColor: "rgb(255, 255, 0)" }}
      >
        연락처 010.5279.3901
      </font>
    </strong>
  </div>
  <p
    style={{ color: "rgb(106, 106, 106)", textAlign: "center", lineHeight: 2 }}
  >
    <strong 맑은>
      <font
        face="굴림"
        size={5}
        style={{ backgroundColor: "rgb(255, 255, 0)" }}
      >
        카카오톡 카톡아이디
      </font>
    </strong>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    &nbsp;
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    &nbsp;
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <b>
      <font
        color="#ffffff"
        size={4}
        style={{ backgroundColor: "rgb(0, 0, 0)" }}
      >
        언니들 인지도 1등
      </font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <b>
      <font
        color="#ffffff"
        size={4}
        style={{ backgroundColor: "rgb(0, 0, 0)" }}
      >
        언니들 만족도 1등
      </font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <b>
      <font
        color="#ffffff"
        size={4}
        style={{ backgroundColor: "rgb(0, 0, 0)" }}
      >
        언니들 소개 1등
      </font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <b>
      <font
        color="#ffffff"
        size={4}
        style={{ backgroundColor: "rgb(0, 0, 0)" }}
      >
        언니들 이직률 0등
      </font>
    </b>
  </p>
  <div
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center"
    }}
  />
  <div
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center"
    }}
  />
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <font size={5}>
      <b>안녕하세요</b>
    </font>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <font size={5}>
      <b>
        강남 1등 가게 "<font color="#ff0000">강남넘버원"</font>&nbsp;입니다
      </b>
    </font>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center"
    }}
  >
    <font size={5}>
      <b>
        <br />
      </b>
    </font>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <font size={5}>
      <b>1등일수 밖에 없는 이유</b>
    </font>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center"
    }}
  >
    <font size={5}>
      <b>
        <br />
      </b>
    </font>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <font color="#ffffff" size={5}>
      <b style={{ backgroundColor: "rgb(112, 48, 160)" }}>&lt;안전&gt;</b>
    </font>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <b>
      <font size={4}>저희는 무엇보다도 다른업소와 비교불가&nbsp;</font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <b>
      <font size={4}>단골중심영업방침 1순위업소입니다.</font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <b>
      <font size={4}>100% 검증된 고퀄리티 손님들로만 이루어져있습니다</font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <b>
      <font size={4}>오고싶어도 못오는손님도 많고 블랙관리 또한&nbsp;</font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <b>
      <font size={4}>그 어느곳보다 철저합니다.</font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center"
    }}
  >
    <b>
      <font size={4}>
        <br />
      </font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center"
    }}
  >
    <b>
      <font size={4}>
        <br />
      </font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <b>
      <font
        color="#ffffff"
        size={5}
        style={{ backgroundColor: "rgb(112, 48, 160)" }}
      >
        &lt;수입&gt;
      </font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <b>
      <font size={5}>1시간 10만이상</font>
      <font size={4}>&nbsp; / 자신있으면 최고페이 가능.</font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <b>
      <font size={4}>시간타임기준 최소 30~150만</font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <b>
      <font size={4}>괜히 강남1등이 아닙니다.</font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <b>
      <font size={4}>마케팅, 홍보, 체계적 시스템 보유</font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <b>
      <font size={4}>제일 큰 규모업장이고&nbsp;</font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <b style={{ fontSize: "9pt" }}>
      <font size={4}>불경기에도 전화가 상당히 많은 곳입니다.</font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <b>
      <font size={4}>사이즈에 따라 페이조정은 가능하니</font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <b>
      <font size={4}>망설이지 마시고 연락주세요</font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center"
    }}
  >
    <b>
      <font size={4}>
        <br />
      </font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center"
    }}
  >
    <b>
      <font size={4}>
        <br />
      </font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <b>
      <font
        color="#ffffff"
        size={5}
        style={{ backgroundColor: "rgb(112, 48, 160)" }}
      >
        &lt;시설&gt;
      </font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <b>
      <font size={4}>강남에서 현존하는 건물중&nbsp;</font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <b>
      <font size={4}>가장 최신식건물로 모든방이 스마트화 되어있습니다.</font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <b>
      <font size={4}>
        방관리도 철저하게 진행되고 있으며, 항상 향기나는 방으로 정말 청결하고
        깨끗하게 유지하고 있습니다.&nbsp;
      </font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center"
    }}
  >
    <b>
      <font size={4}>
        <br />
      </font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center"
    }}
  >
    <b>
      <font size={4}>
        <br />
      </font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <b>
      <font
        color="#ffffff"
        size={5}
        style={{ backgroundColor: "rgb(112, 48, 160)" }}
      >
        &lt;비밀&gt;
      </font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <b>
      <font size={4}>개인 사생활 100% 보장</font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <b>
      <font size={3}>
        가족, 남자친구한테 비밀리에 진행가능하게 도와드립니다.
      </font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <font size={3}>
      <b>실장들이 껄떡되고 치근덕되는</b>
      <b>&nbsp;그런 구질구질한 업소 아닙니다</b>
    </font>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center"
    }}
  >
    <b>
      <font size={4}>
        <br />
      </font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center"
    }}
  >
    <b>
      <font size={4}>
        <br />
      </font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <b>
      <font
        color="#ffffff"
        size={5}
        style={{ backgroundColor: "rgb(112, 48, 160)" }}
      >
        &lt;근무시간&gt;
      </font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <b>
      <font size={4}>영업시간 : AM 11:00 ~ AM 05:00</font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <b>
      <font size={4}>주간. 야간 운영하며 근무시간 날짜 조절가능합니다</font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center"
    }}
  >
    <font size={5}>
      <b>
        <br />
      </b>
    </font>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <b>
      <font size={4}>마지막으로</font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center"
    }}
  >
    <font size={5}>
      <b>
        <br />
      </b>
    </font>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <font color="#7030a0" size={4}>
      <b>"왜 저는 돈을 못벌까요?"</b>
    </font>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <font color="#7030a0" size={4}>
      <b>"왜 제가 출근한 날엔 손님이 없을까요?"</b>
    </font>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <font color="#7030a0" size={4}>
      <b>"요새 경기가 다 죽었다고 하더라구요?"</b>
    </font>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <font color="#7030a0" size={4}>
      <b>"이쁜 언니만 갯수를 많이 하는 건가요?"</b>
    </font>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <font size={5}>
      <b>&nbsp;</b>
    </font>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <b>
      <font size={4}>이런질문이 많은데 왜그럴까요?</font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <b>
      <font size={4}>
        그건바로&nbsp;<font color="#ff0000">함께 하는 사람의 차이&nbsp;</font>입니다
      </font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <b style={{ fontSize: "x-large" }}>&nbsp;</b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <b>
      <font size={4}>최고의 스텝진들이&nbsp;</font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <b>
      <font size={4}>확실한케어와 1:1관리 운영하는</font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <b>
      <font size={4}>최고의 가게에서 언제든지</font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <b>
      <font size={4}>연락을 기다리겠습니다.</font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <b>
      <font size={4}>감사합니다.</font>
    </b>
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    &nbsp;
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    &nbsp;
  </p>
  <p
    style={{
      color: "rgb(106, 106, 106)",
      textAlign: "justify",
      fontFamily: "돋움, seoul, arial, helvetica",
      lineHeight: 2
    }}
  >
    &nbsp;
  </p>
  <div
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center"
    }}
  />
  <div
    style={{
      color: "rgb(106, 106, 106)",
      fontFamily: "돋움, seoul, arial, helvetica",
      textAlign: "center",
      lineHeight: 2
    }}
  >
    <strong 맑은>
      <font
        face="굴림"
        size={5}
        style={{ backgroundColor: "rgb(255, 255, 0)" }}
      >
        연락처 010.5279.3901<br />카카오톡 카톡아이디
      </font>
    </strong>
  </div>
</div>;

              </div>
              

            </div>
          </div>
          <div className="lastAd">
            <img src={last_ad} alt="smiley" />
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Pro13Page