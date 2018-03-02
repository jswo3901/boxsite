import React, { Component } from 'react';
import './Pro1Page.css'
//http://divtable.com/generator/
import pro23 from '../BoxLogo/23.jpg'
import room from './room.jpg'
import ad from './ad.jpg'
import bar from './bar.jpg'
import last_ad from './lastAdd.jpg'
import Global from '../Global'
import MainTop_ver2 from '../MainTop_ver2'

class Pro23Page extends Component {
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
                  <span className="companyName">압구정 캔디</span>
                </div>
                <h1>하루최소 5개보장합니다</h1>
                <div className="companyLogo">
                  <div className="logo">
                    <img src={pro23} alt="Smiley face"/>
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
                              00
                            </span>
                            <span>(마감 0일전)</span>
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
                              TC 110,000원
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
                              강남구 압구정
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
                              18:00~12:00(출퇴근 자유)
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
                              ☆캔디☆
                            </span>
                            <span></span>
                          </td>
                        </tr>
                        <tr>
                          <th>담당자</th>
                          <td>
                            <span>
                              민석실장
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
              <div align="center">
  <br />
  <br />
  <font color="red" size={6}>
    <b>캔디</b>
  </font>
  <br />
  <br />
  <br />
  <font color="#525252">
    <h1 align="center">
      <br />◈◈◈ Candy ◈◈◈<br />
      <br />
    </h1>
    <h3 align="center">
      <font size={3} style={{ backgroundColor: "#fffff0" }}>
        안녕하세요 캔디 민석이에요.
      </font>
    </h3>
    <font size={3} />
    <h3 align="center">
      <br />
      <font size={3}>
        <font style={{ backgroundColor: "#00ffff" }}>순수 테이블로</font>만
        진행이 되며, 나가는거{" "}
        <font style={{ backgroundColor: "#00ffff" }}>절때로 없습니다</font>.
      </font>
    </h3>
    <font size={3} />
    <h3 align="center">
      <br />
      <font size={3}>
        손님은 엄청 많은데 언니들이 모자라요..{" "}
        
      </font>
    </h3>
    <font size={3} />
    <h3 align="center">
      <br />
      <font size={3} style={{ backgroundColor: "#e6e6fa" }}>
        테이블 시간을 단축, 빠른회전율을 자랑합니다.
      </font>
    </h3>
    <font size={3} />
    <h3 align="center">
      <br />
      <font size={3}>못믿으시겠으면 와서 보세요~ </font>
    </h3>
    <font size={3} />
    <h3 align="center">
      <font size={3}>&nbsp;</font>
    </h3>
    <font size={3} />
    <h3 align="center">
      <font size={3}>
        ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ<br />
        <br />
        <font style={{ backgroundColor: "#00ff00" }}>지역은? </font>
      </font>
    </h3>
    <font size={3} />
    <h3 align="center">
      <br />
      <font size={3}>강남구 압구정역 도보 5분거리</font>
    </h3>
    <font size={3} />
    <h3 align="center">
      <br />
      <font size={3}>
        스케줄에 편하신 날, 편하신 시간에 <br />
        <br />
        <br />
        <font style={{ backgroundColor: "#00ff7f" }}>
          자유롭게 출퇴근 하세요.{" "}
        </font>
      </font>
    </h3>
    <font size={3} />
    <h3 align="center">
      <br />
      <font size={3}>
        낮에 일 하시고 밤에 잠깐씩 나오셔서 <br />
        <br />
        <br />한두테이블만 보고 가셔도 됩니다.
      </font>
    </h3>
    <font size={3} />
    <h3 align="center">
      <br />
      <font size={3}>
        평일에 학교나 직장 다니시고 <br />
        <br />
        <br />
        <font style={{ backgroundColor: "#00ffff" }}>
          금,토,일요일만 바짝 나오시는 분들도 있구요.
        </font>
      </font>
    </h3>
    <font size={3} />
    <h3 align="center">
      <br />
      <font size={3}>
        <font color="#ff0000">연중무휴 365일</font> 항상 일은 있으니까,<br />&nbsp;<br />
        <br />갑자기 돈 필요한날 하루만 나오셔도 되구요^^
      </font>
    </h3>
    <font size={3} />
    <h3 align="center">
      <br />
      <font size={3}>
        ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ<br />
        <br />
        <font style={{ backgroundColor: "#00ff00" }}>모 집 대 상</font>{" "}
      </font>
    </h3>
    <font size={3} />
    <h3 align="center">
      <br />
      <font size={3}>나이는 20살 이상&nbsp;언니라면 누구라도 ok</font>
    </h3>
    <font size={3} />
    <h3 align="center">
      <br />
      <font size={3}>스무살이 아직 안되신분들은 죄송합니다.</font>
    </h3>
    <font size={3} />
    <h3 align="center">
      <br />
      <font size={3} style={{ backgroundColor: "#ffa500" }}>
        초보자.경력자.휴학생.주말알바.투잡 다괜찮아요~
      </font>
    </h3>
    <font size={3} />
    <h3 align="center">
      <br />
      <font size={3}>일을 처음하시는분들 모든 고민상담 대환영합니다. ^^</font>
    </h3>
    <font size={3} />
    <h3 align="center">
      <br />
    </h3>
    <h3 align="center">
      <b style={{ fontSize: "medium" }}>
        초보라고 겁먹지 마세요 돈벌어 갈수 있게 도와드릴께요~
      </b>
    </h3>
    <h3 align="center">
      <br />
      <font size={3}>동종업계 경험자도 환영이구요 ^^</font>
    </h3>
    <font size={3} />
    <h3 align="center">
      <font size={3}>
        ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ<br />
        <br />
        <br />
        <font style={{ backgroundColor: "#00ff00" }}>하는일은? </font>
      </font>
    </h3>
    <font size={3} />
    <h3 align="center">
      <br />
      <font size={3}>
        술? 못마셔도 되구요, 음치여도? 괞찮아요.<br />
        <br />
        <br />
      </font>
    </h3>
    <font size={3} />
    <h3 align="center">
      <font size={3}>
        직접 운전해서 출퇴근하는 언니들도 많아요~~<br />
        <br />
        <br />그냥 안에서 친구들이랑 탬버린 치면서 <br />
        <br />
        <br />논다고 생각하심 되요^^<br />
      </font>
    </h3>
    <div style={{ textAlign: "center" }}>
      <br />
    </div>
    <font size={3} />
    <h3 align="center">
      <br />
      <font size={3}>ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ</font>
    </h3>
    <font size={3} />
    <h3 align="center">
      <br />
      <font size={3} style={{ backgroundColor: "#00ff00" }}>
        페이 <br />
      </font>
    </h3>
    <font size={3} />
    <h3 align="center">
      <font size={3}>평일TC 1시간 15분 </font>
      <font size={3}>
        <font color="#ff0000">
          10만원<br />
        </font>
        <br />
      </font>
      <font color="#ff0000" style={{ backgroundColor: "#fffff0" }}>
        <br />
        <font size={3}>
          <font color="#000000">토요일,일요일TC 1시간 15분</font>&nbsp;11만원<br />
          <br />
        </font>
      </font>
    </h3>
    <h3 align="center">
      <font size={3}>
        기본적으로 누구나 <font color="#ff0000">5개이상!</font>
      </font>
    </h3>
    <font size={3} />
    <h3 align="center">
      <br />
      <font size={3}>
        보통 <font color="#ff0000">6~7개!</font>
      </font>
    </h3>
    <font size={3} />
    <h3 align="center">
      <br />
      <font size={3}>
        부지런하구 돈욕심있는 분들은 <font color="#ff0000">7~9개!</font>
      </font>
    </h3>
    <font size={3} />
    <h3 align="center">
      <br />
      <font size={3}>일급 주급 월급 뭐든지 원하시는 대로 해드리겠습니다.</font>
    </h3>
    <font size={3} />
    <h3 align="center">
      <br />
      <font size={3}>팁 또한 잘 나오니까 많이많이 가져가세요 </font>
    </h3>
    <font size={3} />
    <h3 align="center">
      <br />
      <font size={3} style={{ backgroundColor: "#00ff00" }}>
        순수 테이블로 진행하는거에요~{" "}
      </font>
    </h3>
    <font size={3} />
    <h3 align="center">
      <br />
      <font size={3} style={{ backgroundColor: "#00ff00" }}>
        나가는거 그런건 절때 없습니다 ^^;
      </font>
    </h3>
    <font size={3} />
    <h3 align="center">
      <br />
      <font size={3}>출근비도 지각비도 결근비도~</font>
    </h3>
    <font size={3} />
    <h3 align="center">
      <br />
      <font size={3}>단 한푼도 없습니다!! 진짜예요~ ^^;;</font>
    </h3>
    <div style={{ textAlign: "center" }}>
      <font size={3}>
        <b>수금은 일끝나고 바로 바로 지급해드립니다</b>
      </font>
    </div>
    <font size={3} />
    <h3 align="center">
      <br />
      <font size={3}>
        <font style={{ backgroundColor: "#00ffff" }}>
          손님은 많고&nbsp;높은TC가 장점 입니다.
        </font>
        <br />
      </font>
    </h3>
    <div style={{ textAlign: "center" }}>
      <br />
    </div>
    <font size={3} />
    <h3 align="center">ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ</h3>
    <h3 align="center">
      <font size={3}>
        <br />
        <br />믿고 전화&amp;문자 주신 만큼 실망 시키지 않겠습니다
      </font>
    </h3>
    <font size={3} />
    <h3 align="center">
      <font size={3}>&nbsp;</font>
    </h3>
    <font size={3} />
    <h3 align="center">
      <font size={3}>마지막 전화한통으로 모든고민을 해결해보세요...</font>
    </h3>
    <font size={3} />
    <h3 align="center">
      <font size={3}>&nbsp;</font>
    </h3>
    <font size={3} />
    <h3 align="center">
      <font size={3}>
        <font color="#ff0000">24시간 </font>언제나 통화 가능합니다.
      </font>
    </h3>
    <font size={3} />
    <h3 align="center">
      <br />
      <font size={3}>통화안될시 문자라도 부탁드려요~ ^^</font>
    </h3>
    <p align="center" style={{ margin: 0 }}>
      <br />
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font size={4}>
        <strong>동종업종 경험자들 갯수때문에 고민이신 분들 환영합니다</strong>
      </font>
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font size={4}>
        <strong>
          <br />
        </strong>
      </font>
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font size={4}>
        <strong>초보자도 환영합니다^^</strong>
      </font>
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font size={4}>
        <strong>
          <br />
        </strong>
      </font>
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font size={4}>
        <strong>&nbsp;</strong>
      </font>
    </p>
    <h3 align="center">
      민석실장<br />
    </h3>
    <h3 align="center">
      <font style={{ backgroundColor: "#ffff00" }}>
        카톡ID : 카톡아이디<br />
      </font>&nbsp;&nbsp;&nbsp;&nbsp;{" "}
    </h3>
    <h3 align="center">
      <font color="#ff0000" style={{ fontSize: "18pt" }}>
        010-5279-3901
      </font>
    </h3>
    <h1 align="center">&nbsp;</h1>
  </font>
  <br />
</div>
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

export default Pro23Page