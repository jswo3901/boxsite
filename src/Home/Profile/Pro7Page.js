import React, { Component } from 'react';
import './Pro1Page.css'
//http://divtable.com/generator/
import pro7 from '../BoxLogo/7.jpg'
import room from './room.jpg'
import ad from './ad.jpg'
import bar from './bar.jpg'
import last_ad from './lastAdd.jpg'
import Global from '../Global'
import MainTop_ver2 from '../MainTop_ver2'

class Pro7Page extends Component {
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
          <div className="registerInfo">2018.02.24 19:21</div>
          <div className="viewTypeFullWidth">

            <div className="companyInfo infoBox">
              <div className="recruitInfo">
                <div className="company">
                  <span className="companyName">화이트(룸)</span>
                </div>
                <h1>논현화이트 갯수폭발</h1>
                <div className="companyLogo">
                  <div className="logo">
                    <img src={pro7} alt="Smiley face"/>
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
                              강남구 논현동
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
                              17:00~12:00
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
                              화이트
                            </span>
                            <span></span>
                          </td>
                        </tr>
                        <tr>
                          <th>담당자</th>
                          <td>
                            <span>
                              성빈실장
                            </span>
                            <span></span>
                          </td>
                        </tr>
                        <tr>
                          <th>연락처</th>
                          <td>
                            <span>
                            010-5656-7796
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
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>연락처</span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
       성빈실장{" "}
      <span style={{ color: "rgb(255, 0, 0)" }}>
        <b>
          <span style={{ fontSize: "15pt" }}>010-5656-7796</span>
        </b>
      </span>{" "}
      
    </span>
  </div>
  <div style={{ textAlign: "center" }} align="center">
    <br />
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
      많은 &nbsp;광고글&nbsp;
    </span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
      이쁜 언니들만을 위한 글은 아닙니다
    </span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
      어디서 일을하던 몸과 마음이 편해야&nbsp;
    </span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
      정말 돈도 벌수있겠죠..초보자분도&nbsp;
    </span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
      우대 받으면서 근무 하실수 있습니다
    </span>
  </div>
  <div style={{ textAlign: "center" }} align="center">
    <br />
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(255, 0, 0)" }}>▶★수입★◀</span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
      하루를 근무 하더라도 페이는 맞춰 드려요&nbsp;
    </span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
      길던 짧게 근무하더라도&nbsp;
    </span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
      고소득 알바 하셔야죠~!
    </span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>TC(9~30)</span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>&nbsp;</span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(255, 0, 0)" }}>▶★휴일★◀</span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
      주5일근무 가능하며
    </span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
      휴일은 주중 &nbsp;아무때나 쉬어도 무관 합니다.
    </span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
      (개인 어떤사항 이더라도 맞춰드려요)^^&nbsp;
    </span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>&nbsp;</span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(255, 0, 0)" }}>▶★출퇴근★◀</span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
      8시부터~~퇴근은 자유 입니다
    </span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
      (돈욕심 있으신 분은 늦게까지 하겠죵!^^)
    </span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>&nbsp;</span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(255, 0, 0)" }}>▶★싸이즈★◀</span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
      인물은 따지지 않습니다.&nbsp;
    </span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
      술 손님등 시달리던 언니들..&nbsp;
    </span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
      사이즈,술NO,단기간 목돈 마련할 언니면OK
    </span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
      초보자분 이더라도 돈 욕심 있다면&nbsp;
    </span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
      언니들에겐 이보다 좋을순 없죠^^&nbsp;
    </span>
  </div>
  <div style={{ textAlign: "center" }} align="center">
    <br />
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(255, 0, 0)" }}>▶★연락처★◀</span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
       성빈실장{" "}
      <span style={{ color: "rgb(255, 0, 0)" }}>
        <b>
          <span style={{ fontSize: "15pt" }}>010-5656-7796</span>
        </b>
      </span>{" "}
      
    </span>
  </div>
  <div style={{ textAlign: "center" }} align="center">
    <br />
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(255, 0, 0)" }}>▶★분위기★◀</span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
      가게 분위기 젤루 고민되죠~!?
    </span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
      본인 성격만 괜찮으면 언니,동생들은
    </span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
      다들 너무좋아요 (가족같은 분위기..) &nbsp;
    </span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
      사람 때문에 힘들일은 절대 없을꺼에요&nbsp;
    </span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "9pt", color: "rgb(255, 0, 0)" }}>&nbsp;</span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(255, 0, 0)" }}>▶★선불★◀</span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
      적당한 선불은 가능하며&nbsp;
    </span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
      물론(100%)무이자 이에요
    </span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
      많은 돈은 해드릴순 없지만&nbsp;
    </span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
      정말필요하신 언니들껜&nbsp;
    </span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
      상담후 해결방법을 의논해 봐요
    </span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
      ◈근무 하시게되면 성형지원도 해드려요◈&nbsp;
    </span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "9pt", color: "rgb(0, 0, 0)" }}>&nbsp;</span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(255, 0, 0)" }}>
      ▶★페이,결제★◀
    </span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
      당일 마감시 결제&amp;주급등 모두 가능하구요
    </span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
      언니들 통장에 만족할만큼 금액약속드립니다
    </span>
  </div>
  <div style={{ textAlign: "center" }} align="center">
    <br />
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(255, 0, 0)" }}>▶★연락처★◀</span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
       성빈실장{" "}
    </span>
    <span style={{ fontSize: "9pt", color: "rgb(0, 0, 0)" }}>
      <span style={{ color: "rgb(255, 0, 0)" }}>
        <b>
          <span style={{ fontSize: "9pt" }}>010-5656-7796</span>
        </b>
      </span>{" "}
      
    </span>
  </div>
  <div style={{ textAlign: "center" }} align="center">
    <br />
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(255, 0, 0)" }}>
      ▶★업소경험★◀
    </span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
      일이 쉽다는건 아니지만 일 경험은 중요하진&nbsp;
    </span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
      않아요 정말 단기간 벌고자하는 언니들껜&nbsp;
    </span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
      하루하루 안정된 페이로 맞추도록 하며&nbsp;
    </span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
      가급적 언니들 입장과 조건에 노력중입니다
    </span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
      지방에 계신 언니들도 전화주세요&nbsp;
    </span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
      시설 &nbsp;개인숙식환영
    </span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "9pt", color: "rgb(0, 0, 0)" }}>&nbsp;</span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
      혹 통화하기 불편하시면 문자나 카톡&nbsp;
    </span>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span style={{ fontSize: "15pt", color: "rgb(0, 0, 0)" }}>
      남기시면 바로 연락 드리겠습니다
    </span>
  </div>
  <div style={{ textAlign: "center" }} align="center">
    <b>
      <br />
    </b>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <b>
      <span
        style={{
          fontSize: "9pt",
          backgroundColor: "rgb(255, 255, 255)",
          color: "rgb(255, 0, 0)"
        }}
      >
        &nbsp;
      </span>
    </b>
    <font
      style={{
        color: "rgb(51, 51, 51)",
        fontFamily: "돋움, Dotum, AppleGothic, sans-serif",
        widows: 1,
        lineHeight: "normal",
        backgroundColor: "rgb(249, 249, 249)"
      }}
    >
      <font style={{ lineHeight: "normal" }}>
        <font
          style={{
            color: "rgb(82, 82, 82)",
            fontFamily: "돋움, seoul, arial, helvetica",
            fontWeight: "bold"
          }}
        >
        </font>
      </font>
    </font>
    <b>
      <span
        style={{
          fontSize: "9pt",
          backgroundColor: "rgb(255, 255, 255)",
          color: "rgb(255, 0, 0)"
        }}
      >
        
      </span>
      <span
        style={{
          fontSize: "15pt",
          backgroundColor: "rgb(255, 255, 255)",
          color: "rgb(255, 0, 0)"
        }}
      >
        010-5656-7796
      </span>
    </b>
    <b
      style={{
        backgroundColor: "rgb(249, 249, 249)",
        widows: 1,
        color: "rgb(82, 82, 82)",
        fontFamily: "돋움, seoul, arial, helvetica"
      }}
    >
    </b>
  </div>
  <div style={{ textAlign: "center", lineHeight: "1.8" }} align="center">
    <span
      style={{
        fontSize: "18pt",
        backgroundColor: "rgb(255, 255, 255)",
        color: "rgb(255, 0, 0)"
      }}
    >
      <b>
        
      </b>
    </span>
  </div>
  <div>
    <span style={{ fontSize: "10pt" }}>
      <br />
    </span>
  </div>
  <div>
    <div
      align="center"
      style={{
        padding: 0,
        margin: 0,
        color: "rgb(51, 51, 51)",
        fontFamily: "돋움, Dotum, AppleGothic, sans-serif",
        lineHeight: 2,
        textAlign: "center"
      }}
    >
      <br />
    </div>
  </div>
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

export default Pro7Page