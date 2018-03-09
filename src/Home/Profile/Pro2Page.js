import React, { Component } from 'react';
import './Pro1Page.css'
//http://divtable.com/generator/
import pro2 from '../BoxLogo/2.jpg'
import room from './room.jpg'
import ad from './ad.jpg'
import bar from './bar.jpg'
import last_ad from './lastAdd.jpg'
import Global from '../Global'
import MainTop_ver2 from '../MainTop_ver2'
//https://magic.reactjs.net/htmltojsx.htm
//https://prettier.io/playground/#N4Igxg9gdgLgprEAuEIA0IIAcYEtoDOyoWATrrAOq4AmMAFsgBwAMGMAhgEbV2NIAmDAQoBzADZwAigFcI8ZADMO4gnHakOucWIDCEALYGOyEFGhx0ILprABrODADKWDmDHIYpGepAArAgAPACFbB2cOAzgAGQpLJGVVX1dSNVJTLm4AT3FoKzUDXE9vXxk1ABVuIgSVNQwKNJgABU1RYyVa31I4AEcZXG6WjjaTGqSMMgg1Sk0sUzI4NIA3SwwOUlIIAHcm9YRqkA4liForGggwDvHDghgruswZGCwngXu4AF8PoA
//style={{"lineHeight":"26px"}}
class Pro2Page extends Component {
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
          <div className="registerInfo">2018.02.20 10:46</div>
          <div className="viewTypeFullWidth">

            <div className="companyInfo infoBox">
              <div className="recruitInfo">
                <div className="company">
                  <span className="companyName">쥬만지</span>
                </div>
                <h1>고페이 초보 환영</h1>
                <div className="companyLogo">
                  <div className="logo">
                    <img src={pro2} alt="Smiley face"/>
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
                              2018.05.27
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <th>모집인원</th>
                          <td>
                            <span>
                              15명
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
                              룸/퍼블릭
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
                              쥬만지
                            </span>
                            <span></span>
                          </td>
                        </tr>
                        <tr>
                          <th>담당자</th>
                          <td>
                            <span>
                              윤실장
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
              <div
  id="ct"
  style={{ marginTop: 10, borderBottom: "1px solid #e0e0e0", padding: 10 }}
>
  <div style={{ lineHeight: 2, textAlign: "center" }} align="center">
    
    <font size={5}>
      강남 일등 하이퍼블릭 룸싸롱 신규 오픈
    </font>
  </div>
  <div style={{ textAlign: "center" }} align="center">
    <br />
    <font color="#ff0000" size={6}>
      <div style={{ textAlign: "left", lineHeight: 2 }} align="left">
        재오픈
      </div>
      <div style={{ textAlign: "left", lineHeight: 2 }} align="left">
        <span style={{ textAlign: "center" }}>
          쥬만지에서
        </span>
      </div>
      <div style={{ textAlign: "left", lineHeight: 2 }} align="left">
        <span style={{ textAlign: "center" }}>
           티씨 11만원 방갯수 보장
        </span>
      </div>
      <div style={{ textAlign: "left", lineHeight: 2 }} align="left">
        <span style={{ textAlign: "center" }}>
          란제리x 인사x 마무리x
        </span>
      </div>
      <div style={{ textAlign: "left", lineHeight: 2 }} align="left">
        <span style={{ textAlign: "center" }}>
          정통 퍼블릭입니다.
        </span>
      </div>
    </font>
  </div>
  <div style={{ lineHeight: 2, textAlign: "center" }} align="center">
  </div>
  <div style={{ lineHeight: 2, textAlign: "center" }} align="center">
    자격은?!
  </div>
  <div style={{ lineHeight: 2, textAlign: "center" }} align="center">
    <br />
  </div>
  <div style={{ lineHeight: 2, textAlign: "center" }} align="center">
     20~35세 투잡,초보,백조,휴학생모두모두환영이예용^0^
  </div>
  <div style={{ lineHeight: 2, textAlign: "center" }} align="center">
    <br />
  </div>
  <div style={{ lineHeight: 2, textAlign: "center" }} align="center">
    {" "}
    미성년자 불가
  </div>
  <div style={{ textAlign: "center" }} align="center">
    <br />
  </div>
  <div style={{ textAlign: "center" }} align="center">
    <font color="#ff0000" size={6}>
      <div style={{ textAlign: "left", lineHeight: 2 }} align="left">
        24시간 영업
      </div>
    </font>
  </div>
  <div style={{ lineHeight: 2, textAlign: "center" }} align="center">
             
    
  </div>
  <p style={{ textAlign: "left", lineHeight: 2 }} align="left">
    <font size={3}>
     {" "}
      <font size={3}> 같은 일 힘든 방도있고 쉬운방도있습니다.</font>
    </font>
  </p>
  <p style={{ textAlign: "left", lineHeight: 2 }} align="left">
    <font size={3}>
      
      하지만 페이는 챙겨가세요 똑같은 퍼블릭 이지만{" "}
    </font>
  </p>
  <p style={{ textAlign: "left", lineHeight: 2 }} align="left">
    <font size={3}>
      <font color="#c00000">
        저희 업소는 1시간30분이라는 메리트가있습니다.
      </font>
    </font>
  </p>
  <p style={{ textAlign: "left", lineHeight: 2 }} align="left">
    <font color="#c00000" size={3}>
      티씨는
      11만원 씩지급하고있습니다 !!
    </font>
  </p>
  <p style={{ textAlign: "left", lineHeight: 2 }} align="left">
    <font color="#c00000" size={3}>
      
      똑같은 퍼블릭 에서일하고 있거나{" "}
    </font>
  </p>
  <p style={{ textAlign: "left", lineHeight: 2 }} align="left">
    <font color="#c00000" size={3}>
     
      란제리에서 일하고 계신분들은{" "}
    </font>
  </p>
  <p style={{ textAlign: "left", lineHeight: 2 }} align="left">
    <font color="#c00000" size={3}>
      이 글
      읽으시고 꼭연락주세요{" "}
    </font>
  </p>
  <p style={{ textAlign: "left", lineHeight: 2 }} align="left">
    <font color="#c00000" size={3}>
     
      오셔서 란제리일시 100만원 지급{" "}
    </font>
  </p>
  <div style={{ textAlign: "center" }} align="center">
    <font color="#c00000" size={3}>
      <div style={{ textAlign: "left", lineHeight: 2 }} align="left">
       
      </div>
    </font>
  </div>
  <p style={{ textAlign: "left", lineHeight: 2 }} align="left">
  
  </p>
  <p style={{ textAlign: "center" }} align="center" />
  <div style={{ textAlign: "left" }} align="left">
    <br />
  </div>
  <div style={{ textAlign: "left", lineHeight: 2 }} align="left">
              
        <font color="#ff0000">
      강남역
      2번 출구 1분
    </font>
  </div>
  <p style={{ textAlign: "center" }} align="center" />
  <p style={{ textAlign: "center" }} align="center" />
  <div style={{ textAlign: "left", lineHeight: 2 }} align="left">
            
  </div>
  <div style={{ textAlign: "left", lineHeight: 2 }} align="left">
              
      언니들 요즘경기에 힘드신데 하루나와주셔도 감사합니다.
  </div>
  <div style={{ textAlign: "left", lineHeight: 2 }} align="left">
    가족같은분위기에 우리즐겁게 일 해봐요♡
  </div>
  <div style={{ textAlign: "left", lineHeight: 2 }} align="left">
              
         기타 궁금하신 사항은 언제든지 연락
    주세요~~
  </div>
  <p style={{ textAlign: "center" }} align="center" />
  <p style={{ textAlign: "left", lineHeight: 2 }} align="left">
    
  </p>
  <p style={{ textAlign: "left", lineHeight: 2 }} align="left">
    <font color="#ff0000" size={6}>
           윤실장 010-9468-0175{" "}
    </font>
  </p>
  <p style={{ textAlign: "left" }}>
    <font color="#ff0000" size={6}>
      <br />
    </font>
  </p>
</div>

              </div>
              
              </div>
            </div>
          </div>
          <div className="lastAd">
            {/* <img src={last_ad} alt="smiley" /> */}
          </div>
        </div>
      </div>
      
    )
  }
}

export default Pro2Page

