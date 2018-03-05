import React, { Component } from 'react';
import './Pro1Page.css'
//http://divtable.com/generator/
import pro36 from '../BoxLogo/36.jpg'
import room from './room.jpg'
import ad from './ad.jpg'
import bar from './bar.jpg'
import last_ad from './lastAdd.jpg'
import Global from '../Global'
import MainTop_ver2 from '../MainTop_ver2'

class Pro36Page extends Component {
  render() {
    return (
      <div>
        <Global />
        <MainTop_ver2 />
      <div className="allcontent">
        <div className="viewContent">
          <div className="registerInfo">2018.02.26 10:13</div>
          <div className="viewTypeFullWidth">

            <div className="companyInfo infoBox">
              <div className="recruitInfo">
                <div className="company">
                  <span className="companyName">블랙티</span>
                </div>
                <h1>BlackTea/하루80만</h1>
                <div className="companyLogo">
                  <div className="logo">
                    <img src={pro36} alt="Smiley face"/>
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
                             18:00 ~ 13:00
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
                              강남역 블랙티 
                            </span>
                            <span></span>
                          </td>
                        </tr>
                        <tr>
                          <th>담당자</th>
                          <td>
                            <span>
                              이시원실장
                            </span>
                            <span></span>
                          </td>
                        </tr>
                        <tr>
                          <th>연락처</th>
                          <td>
                            <span>
                            010-6833-3612
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
    <b>블랙티</b>
  </font>
  <br />
  <br />
  <br />
  <font color="#525252">
    <div style={{ fontSize: "11pt" }} align="center">
      <div style={{ fontSize: "11pt", textAlign: "center" }} align="center">
        <strong>
          <span style={{ fontSize: "24pt" }} />
        </strong>&nbsp;
      </div>
      <div style={{ fontSize: "15pt", textAlign: "center" }} align="center">
        &nbsp;<b>
          <font color="#ff0000">
            손님은 많은데 언니들이 너무너무 부족해요ㅠ.ㅠ
          </font>
        </b>
      </div>
      <div style={{ fontSize: "14pt", textAlign: "center" }} align="center">
        <b>
          <font color="#ff0000" />
        </b>&nbsp;
      </div>
      <div style={{ fontSize: "14pt", textAlign: "center" }} align="center">
        <b>
          <font color="#ff0000" />
        </b>&nbsp;<b>
          <font color="#ff0000">
            저희 꼬옥~ 지킬 수 있는 부분만 말씀 드리겠습니다.
          </font>
        </b>
      </div>
      <div style={{ fontSize: "11pt", textAlign: "center" }} align="center">
        <b>
          <font color="#ff0000" />
        </b>&nbsp;
      </div>
      <div style={{ fontSize: "14pt", textAlign: "center" }} align="center">
        <b>
          <font color="#ff0000" />
        </b>&nbsp;<b>
          <font color="#ff0000">
            저희 업소는 이지역에서 손님이 가장 많고 유명한 가게에요^^
          </font>
        </b>
      </div>
      <div style={{ fontSize: "11pt", textAlign: "center" }} align="center">
        &nbsp;&nbsp;
      </div>
      <div style={{ fontSize: "11pt", textAlign: "center" }} align="center">
        &nbsp;
      </div>
      <div style={{ fontSize: "11pt", textAlign: "center" }} align="center">
        <strong>
          <font color="#6d00ca" size={6} />
        </strong>&nbsp;
      </div>
      <div style={{ fontSize: "11pt", textAlign: "center" }} align="center">
        &nbsp;<strong>
          <font color="#6d00ca" size={6}>
            이시원 010-6833-3612
          </font>
        </strong>
      </div>
      <div style={{ fontSize: "11pt", textAlign: "center" }} align="center">
        <font color="#6d00ca" size={6}>
          <div align="center">
            <span style={{ color: "#2b285f" }}>
              <strong />
            </span>&nbsp;
          </div>
          <div align="center">
            &nbsp;<span style={{ color: "#2b285f" }}>
              <strong>
                
              </strong>
            </span>
          </div>
        </font>
      </div>
      <div style={{ fontSize: "11pt", textAlign: "center" }} align="center">
        &nbsp;
      </div>
      <div style={{ fontSize: "15pt", textAlign: "center" }} align="center">
        &nbsp;
        <br />
        <font color="#000000" size={6}>
          <strong>*자격조건*</strong>
        </font>
      </div>
      <div style={{ fontSize: "11pt", textAlign: "center" }} align="center">
        <font color="#ff0000" size={2}>
          <b />
        </font>&nbsp;
      </div>
      <div style={{ fontSize: "14pt", textAlign: "center" }} align="center">
        <font color="#ff0000" size={2}>
          <b />
        </font>&nbsp;<font color="#ff0000" size={4}>
          <b>20세 이상 ~ 35세 이하 여성</b>
        </font>
      </div>
      <div style={{ fontSize: "11pt", textAlign: "center" }} align="center">
        <font color="#ff0000" />&nbsp;
      </div>
      <div style={{ fontSize: "14pt", textAlign: "center" }} align="center">
        <font color="#ff0000" />&nbsp;<font color="#ff0000">
          초보,알바,대딩,직장인, 모두모두 환영합니다.
        </font>
      </div>
      <div style={{ fontSize: "11pt", textAlign: "center" }} align="center">
        <font color="#ff0000" />&nbsp;
      </div>
      <div style={{ fontSize: "14pt", textAlign: "center" }} align="center">
        <font color="#ff0000" />&nbsp;<font color="#ff0000">
          성실하구 돈욕심만 있다면 누구든 환영합니다
        </font>
      </div>
      <div style={{ fontSize: "11pt", textAlign: "center" }} align="center" />
      <div style={{ fontSize: "11pt", textAlign: "center" }} align="center">
        &nbsp;
      </div>
      <div style={{ fontSize: "15pt", textAlign: "center" }} align="center">
        <font color="#000000" size={4}>
          <strong>급여</strong>
        </font>
      </div>
      <div style={{ fontSize: "11pt", textAlign: "center" }} align="center">
        &nbsp;
      </div>
      <div style={{ fontSize: "11pt", textAlign: "center" }} align="center">
        <font color="red" size={4}>
          <b />
        </font>&nbsp;<font color="red" size={4}>
          <strong>[TC]110,000</strong>
          <font color="#000000">&nbsp; </font>
        </font>
        <strong>(1타임 대략 1시간20분정도 생각하시면 됩니다.)</strong>
      </div>
      <div style={{ fontSize: "11pt", textAlign: "center" }} align="center">
        &nbsp;
      </div>
      <p style={{ margin: 0, fontSize: "14pt" }}>
        스케줄에 맞춰 출퇴근 자유롭게 하면서 원하시는{" "}
      </p>&nbsp;
      <p style={{ margin: 0 }} />
      <div style={{ fontSize: "14pt", textAlign: "center" }} align="center">
        &nbsp;금액에 맞게끔 일을 만들어드립니다.^^
      </div>
      <div style={{ fontSize: "11pt", textAlign: "center" }} align="center" />
      <div style={{ fontSize: "11pt", textAlign: "center" }} align="center">
        &nbsp;
      </div>
      <div style={{ fontSize: "15pt", textAlign: "center" }} align="center">
        <font color="#000000" size={4}>
          <strong>출퇴근</strong>
        </font>
      </div>
      <div style={{ fontSize: "11pt", textAlign: "center" }} align="center">
        &nbsp;
      </div>
      <div style={{ fontSize: "14pt", textAlign: "center" }} align="center">
        &nbsp;&nbsp;출근은{" "}
        <font color="#ff0000">
          오후 7시에서 8시&nbsp;퇴근은 졸리면 가는거죠 뭐..
        </font>
      </div>
      <div style={{ fontSize: "11pt", textAlign: "center" }} align="center">
        &nbsp;
      </div>
      <div style={{ fontSize: "14pt", textAlign: "center" }} align="center">
        &nbsp;아무때나 본인이 편한시간에 나오고 들어가시면 됩니다~
      </div>
      <div style={{ fontSize: "11pt", textAlign: "center" }} align="center">
        <span style={{ color: "#ff0000" }} />&nbsp;
      </div>
      <div style={{ fontSize: "14pt", textAlign: "center" }} align="center">
        <span style={{ color: "#ff0000" }}>
          (절대시간때문에 스트레스받지마세요ㅎㅎ;)
        </span>
      </div>
      <div style={{ fontSize: "11pt", textAlign: "center" }} align="center">
        &nbsp;
      </div>
      <div style={{ fontSize: "14pt", textAlign: "center" }} align="center">
        &nbsp;
        <font color="#000000" size={4}>
          <strong>복장</strong>
        </font>
      </div>
      <div style={{ fontSize: "11pt", textAlign: "center" }} align="center">
        &nbsp;
      </div>
      <div style={{ fontSize: "14pt", textAlign: "center" }} align="center">
        언니들의 사이즈에 맞게끔 자유복장
      </div>
      <div style={{ fontSize: "11pt", textAlign: "center" }} align="center">
        &nbsp;
      </div>
      <div style={{ fontSize: "14pt", textAlign: "center" }} align="center">
        &nbsp;자신의 매력을 한껏 발휘할 수 있는 스타일이면 ok!
      </div>
      <p style={{ margin: 0 }}>&nbsp;</p>
      <p style={{ margin: 0 }} />
      <div style={{ fontSize: "11pt", textAlign: "center" }} align="center" />
      <p style={{ margin: 0 }}>
        &nbsp;
        <font color="#000000" size={4}>
          <strong>기타</strong>
        </font>
      </p>
      <div style={{ fontSize: "11pt", textAlign: "center" }} align="center">
        &nbsp;
      </div>
      <div style={{ fontSize: "14pt", textAlign: "center" }} align="center">
        &nbsp;술 전혀못마시고 춤,노래 못해도 일하실마음만 있으면 돼요
      </div>
      <div style={{ fontSize: "11pt", textAlign: "center" }} align="center">
        &nbsp;
      </div>
      <div style={{ fontSize: "14pt", textAlign: "center" }} align="center">
        &nbsp;&nbsp;&nbsp;사회생활의 시작이 참 중요하듯 언니들도들도 시작이
        중요해용
      </div>
      <div style={{ fontSize: "11pt", textAlign: "center" }} align="center">
        &nbsp;
      </div>
      <div style={{ fontSize: "14pt", textAlign: "center" }} align="center">
        &nbsp;처음이어도 어색하지않게 돈 많이벌수있도록 도와드릴께요~꼭이요^^ㅋ
      </div>
      <div style={{ fontSize: "11pt", textAlign: "center" }} align="center">
        &nbsp;
      </div>
      <div style={{ fontSize: "14pt", textAlign: "center" }} align="center">
        &nbsp;
        <font color="#000000" size={4}>
          <strong>마지막으로</strong>
        </font>
      </div>
      <div style={{ fontSize: "11pt", textAlign: "center" }} align="center">
        &nbsp;
      </div>
      <div style={{ fontSize: "14pt", textAlign: "center" }} align="center">
        &nbsp;손님이없어서 대기실에 앉아있는 스트레스 싹 덜어드릴께요
      </div>
      <div style={{ fontSize: "11pt", textAlign: "center" }} align="center">
        &nbsp;
      </div>
      <div style={{ fontSize: "14pt", textAlign: "center" }} align="center">
        &nbsp;어차피 해야 할거라면 젊은시절 헛되이 시간보내지 않고,
      </div>
      <div style={{ fontSize: "11pt", textAlign: "center" }} align="center">
        &nbsp;
      </div>
      <div style={{ fontSize: "14pt", textAlign: "center" }} align="center">
        &nbsp;&nbsp;때가 되면 다털고 일어나실 수 있길 바랍니다..^^
      </div>
      <div style={{ fontSize: "11pt", textAlign: "center" }} align="center">
        <font color="#000000" size={6}>
          <font color="#6d00ca" size={6}>
            <strong>
              <font color="#6d00ca" size={6} />
            </strong>
          </font>
        </font>&nbsp;
      </div>
      <font color="#000000" size={6}>
        <font color="#6d00ca" size={6}>
          <font size={6}>
            <div
              style={{ fontSize: "11pt", textAlign: "center" }}
              align="center"
            >
              <div
                style={{ fontSize: "11pt", textAlign: "center" }}
                align="center"
              ><br /><br />
                <strong>
                  <font color="#6d00ca" size={6}>
                    이시원 010-6833-3612
                  </font>
                </strong>
              </div>
              <div
                style={{ fontSize: "11pt", textAlign: "center" }}
                align="center"
              >
                <font color="#6d00ca" size={6}>
                  <div align="center">
                    <span style={{ color: "#2b285f" }}>
                      <strong />
                    </span>&nbsp;
                  </div>
                  <div align="center">
                    &nbsp;<span style={{ color: "#2b285f" }}>
                      <strong>
                        
                      </strong>
                    </span>
                  </div>
                </font>
              </div>
            </div>
          </font>
          <div
            style={{ fontSize: "11pt", textAlign: "center" }}
            align="center"
          />
        </font>
        <div style={{ fontSize: "11pt", textAlign: "center" }} align="center" />
      </font>
      <div style={{ fontSize: "11pt", textAlign: "center" }} align="center" />{" "}
    </div>
  </font>
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

export default Pro36Page