import React, { Component } from 'react';
import './Pro1Page.css'
//http://divtable.com/generator/
import pro22 from '../BoxLogo/22.jpg'
import room from './room.jpg'
import ad from './ad.jpg'
import bar from './bar.jpg'
import last_ad from './lastAdd.jpg'
import Global from '../Global'
import MainTop_ver2 from '../MainTop_ver2'

class Pro22Page extends Component {
  render() {
    return (
      <div>
        <Global />
        <MainTop_ver2 />
      <div className="allcontent">
        <div className="viewContent">
          <div className="registerInfo">2018.03.02 17:33</div>
          <div className="viewTypeFullWidth">

            <div className="companyInfo infoBox">
              <div className="recruitInfo">
                <div className="company">
                  <span className="companyName">청담 프린세스</span>
                </div>
                <h1>청담★연예인손님 많아요~</h1>
                <div className="companyLogo">
                  <div className="logo">
                    <img src={pro22} alt="Smiley face"/>
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
                              강남구 청담동
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
                              18:00 ~ 10:00
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
                              프린세스
                            </span>
                            <span></span>
                          </td>
                        </tr>
                        <tr>
                          <th>담당자</th>
                          <td>
                            <span>
                              김대표
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
              <div align="center" style={{"lineHeight":"26px"}}>
  <br />
  <br />
  <font color="red" size={6}>
    <b>◆청담 프린세스◆</b>
  </font>
  <br />
  <br />
  <br />
  <font color="#525252">
    <p align="center" style={{ margin: 0, textAlign: "center" }}>
      <font size={5}>
        <strong>
          <font color="#002060">◆강남청담 프린세스◆</font>
        </strong>
        <br />
      </font>
    </p>
    <p align="center" style={{ margin: 0, textAlign: "center" }}>
      <strong>
        <font size={4}>
          <font face="맑은 고딕">
            <br />
          </font>
        </font>
      </strong>
    </p>
    <p align="center" style={{ margin: 0, textAlign: "center" }}>
      <font size={4}>
        <font face="맑은 고딕">
          <strong>안녕하세요&nbsp;~</strong>
        </font>
      </font>
      <br />
      <span style={{ fontSize: "12pt" }}>
        <font color="#000000">
          <strong>돈없구 빽없구 요즘처럼 살기힘든 세상에</strong>
        </font>
      </span>
    </p>
    <p align="center" style={{ margin: 0, textAlign: "center" }}>
      <span style={{ fontSize: "12pt" }}>
        <font color="#000000">
          <strong>저와같이 일하신다면</strong>
        </font>
      </span>
    </p>
    <p align="center" style={{ margin: 0, textAlign: "center" }}>
      <span style={{ fontSize: "12pt" }}>
        <font color="#000000">
          <strong>든든한 빽이생기구 많은돈을 버실수있어요~!</strong>
        </font>
      </span>
    </p>
    <p align="center" style={{ margin: 0, textAlign: "center" }}>
      <span style={{ fontSize: "12pt" }}>
        <font color="#000000">
          <strong>이 업계에서도 빽이있으셔야하거든여~</strong>
        </font>
      </span>
    </p>
    <p align="center" style={{ margin: 0, textAlign: "center" }}>
      <span style={{ fontSize: "12pt" }} />
    </p>
    <p align="center" style={{ margin: 0, textAlign: "center" }}>
      <span style={{ fontSize: "12pt" }}>
        <font color="#000000">
          <strong>함께할 언니를 찾고 있습니다~!</strong>
        </font>
      </span>
    </p>
    <p align="center" style={{ margin: 0, textAlign: "center" }}>
      <span style={{ fontSize: "12pt" }}>
        <strong />
      </span>
    </p>
    <p align="center" style={{ margin: 0, textAlign: "center" }}>
      <span style={{ fontSize: "12pt" }}>
        <strong />
      </span>
    </p>
    <p align="center" style={{ margin: 0, textAlign: "center" }}>
      <span style={{ fontSize: "12pt" }}>
        <strong>이곳 저곳 알아봤는데 다 거기서거기,</strong>
      </span>
    </p>
    <p align="center" style={{ margin: 0, textAlign: "center" }}>
      <span style={{ fontSize: "12pt" }}>
        <font color="#000000">
          <strong>어디를 가봐야할지 모르겠다면</strong>
        </font>
      </span>
    </p>
    <p align="center" style={{ margin: 0, textAlign: "center" }}>
      <span style={{ fontSize: "12pt" }}>
        <font color="#000000">
          <strong>마지막으로 제 광고 잘봤어요~</strong>
        </font>
      </span>
    </p>
    <p align="center" style={{ margin: 0, textAlign: "center" }}>
      <span style={{ fontSize: "12pt" }}>
        <font color="#000000">
          <strong>다 비슷한 광고속에 비슷한 말들이라면</strong>
        </font>
      </span>
    </p>
    <p align="center" style={{ margin: 0, textAlign: "center" }}>
      <span style={{ fontSize: "12pt" }}>
        <font color="#000000">
          <strong>
            이왕이면{" "}
            <font color="#ff0000">
              <font size={4}>꼼꼼</font>하고 <font size={4}>세심</font>한김대표와
            </font>
          </strong>
        </font>
      </span>
    </p>
    <p align="center" style={{ margin: 0, textAlign: "center" }}>
      <span style={{ fontSize: "12pt" }}>
        <font color="#000000">
          <strong>함께해보시는건 어떨까요?~</strong>
        </font>
      </span>
    </p>
    <p align="center" style={{ margin: 0, textAlign: "center" }}>
      <span style={{ fontSize: "12pt" }}>
        <strong />
      </span>
    </p>
    <p align="center" style={{ margin: 0, textAlign: "center" }}>
      <span style={{ fontSize: "12pt" }}>
        <strong />
      </span>
    </p>
    <p align="center" style={{ margin: 0, textAlign: "center" }}>
      <span style={{ fontSize: "12pt" }}>
        <font color="#000000">
          <strong>
            저 <font color="#ff0000">청담</font>
            <font color="#ff0000">프린</font>
            <font color="#ff0000">세스</font>는
          </strong>
        </font>
      </span>
    </p>
    <p align="center" style={{ margin: 0, textAlign: "center" }}>
      <span style={{ fontSize: "12pt" }}>
        <font color="#000000">
          <strong>진실과 능력, 행동으로 승부 보겠습니다.</strong>
        </font>
      </span>
    </p>
    <p align="center" style={{ margin: 0, textAlign: "center" }}>
      <span style={{ fontSize: "12pt" }}>
        <font color="#000000">
          <strong>강남에서 언니들의 돈벌이와 사이즈는 결국</strong>
        </font>
      </span>
    </p>
    <p align="center" style={{ margin: 0, textAlign: "center" }}>
      <span style={{ fontSize: "12pt" }}>
        <font color="#000000">
          <strong>
            다 <font color="#ff0000">담당</font>
            <font color="#ff0000">실장</font>의 차이와{" "}
            <font color="#ff0000">능력</font>이랍니다~
          </strong>
        </font>
      </span>
    </p>
    <p align="center" style={{ margin: 0, textAlign: "center" }}>
      <span style={{ fontSize: "12pt" }}>
        <strong />
      </span>
    </p>
    <p align="center" style={{ margin: 0, textAlign: "center" }}>
      <span style={{ fontSize: "12pt" }} />
    </p>
    <font color="#525252">
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "12pt" }}>
          <u>
            <strong>
              <span
                style={{
                  color: "rgb(58, 50, 195)",
                  backgroundColor: "rgb(255, 255, 255)"
                }}
              >
                <u>강남돈벌이1등라인</u>
              </span>
            </strong>
          </u>
          <span
            style={{
              color: "rgb(0, 0, 0)",
              backgroundColor: "rgb(255, 255, 255)"
            }}
          >
            &nbsp;
          </span>
          <u>
            {" "}
            <strong>
              <font color="#c00000">◆청담</font>
              <font color="#ff0000">프린세스</font>
              <font color="#000000">인사드려여</font>
            </strong>
          </u>
          <font color="#000000">
            <strong> ^^*</strong>
          </font>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <br />
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <font face="맑은 고딕" size={4}>
          
        </font>
        &nbsp;
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <font style={{ fontSize: "12pt" }}>
          <font color="#ff0000" size={4}>
            <strong />
          </font>
        </font>&nbsp;
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <font style={{ fontSize: "12pt" }}>
          <font color="#ff0000" size={4}>
            <strong>◆청담 프린세스</strong>
          </font>
          <font color="#0000ff">
            <span style={{ fontSize: "14pt" }}>
              :&nbsp;<strong>010 5279 3901</strong>{" "}
            </span>
          </font>
        </font>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <font color="#0000ff" style={{ fontSize: "16pt" }}>
          &nbsp;카톡 ID : 카톡아이디
        </font>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <font color="#0000ff" />&nbsp;
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#000000">돈이 인생의 전부는 아니져?</font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <strong>
          <br />
        </strong>
        <font color="#000000" />
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#000000">하지만 행복하려면 돈이 필요해여~!</font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ color: "rgb(0, 117, 200)", fontSize: "11pt" }}>
          <strong>현재 강남최고 강남1등의 능력좋은</strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ color: "rgb(0, 117, 200)", fontSize: "11pt" }}>
          <strong>
            <u>
              <span style={{ color: "rgb(255, 0, 0)" }}>돈벌이1등 ◆청</span>
              <span style={{ color: "rgb(255, 0, 0)" }}>담</span>
              <font color="#ff0000">프린세스</font>에 연락주세여
            </u>{" "}
            ^^*
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ color: "rgb(0, 117, 200)", fontSize: "11pt" }}>
          <strong />
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <br />
      </p>
      <font color="#000000">
        <p align="center" style={{ margin: 0, textAlign: "center" }}>
          <br />
        </p>
        <font color="#000000">
          <strong>
            <span style={{ fontSize: "11pt" }} />
            <span style={{ fontSize: "11pt" }}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              편하게 돈많이 버실수있는 좋은가게와,&nbsp;
            </span>
          </strong>
        </font>
      </font>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <font color="#000000">
            <strong>김대표가</strong>{" "}
          </font>
          <strong>
            <font color="#000000">언니들에게 든든한 빽이되어드리겠어여~</font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#000000">
              청담 1등가게로써 강남최고의 대우를 해드리구여~
            </font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <span style={{ color: "rgb(0, 117, 200)" }}>언니의 </span>
            <span style={{ color: "rgb(0, 117, 200)" }}>고민</span>
            <font color="#000000">을 같이 </font>
            <span style={{ color: "rgb(255, 0, 0)" }}>해결</span>
            <font color="#000000">하구여~</font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <span style={{ color: "rgb(0, 117, 200)" }}>언니의 </span>
            <span style={{ color: "rgb(0, 117, 200)" }}>목표</span>
            <font color="#000000">를</font>
            <font color="#000000"> 같이 이루어나가여 ^^*</font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#000000" />
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#000000" />
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <font color="#000000">
            <strong>언니와 소중한 인연을 이어가고 싶습니다</strong>
          </font>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#000000">과장성과 거짓없는 내용으로써</font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#000000">지킬수있는 약속만 말씀드리겠어여</font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }} />
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <u>
              <font color="#c00000">◆청담</font>
              <font color="#ff0000">
                프린세스가 언니들에게 큰힘이 되어드리겠습니다~!
              </font>
            </u>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <br />
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <br />
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }} />
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#000000">*기존에 강남에서 일하시는 언니들</font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#000000">*강남진출이 처음인 지방에 있는 언니들</font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#000000">
              *일이 아예 처음이라 시작하려는 입문언니들
            </font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#000000">
              *낮에 하는일이 있어서 투잡으로 원하는 언니들
            </font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#000000">*다른 일해봤는데 업종변경 하려는 언니들</font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#000000">*이뻐지신후에 일하시고 싶은 언니들~</font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#000000">*현재일하는 가게가 잘안맞는 언니들</font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#000000">위 내용중에 언니에 글이 있으시면</font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#000000">저에게 연락주시면 되세여~</font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong />
        </span>&nbsp;
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <u>
              <font color="#ff0000">
                강남1등 ◆청담프린세스에 능력을 보여드릴께여~
              </font>
            </u>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <br />
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <br />
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        &nbsp;
        <font face="맑은 고딕" size={4}>
        </font>
        
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <font style={{ fontSize: "12pt" }}>
          <font color="#ff0000">
            <span style={{ fontSize: "14pt" }} />
          </font>
        </font>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <font style={{ fontSize: "12pt" }}>
          <font color="#ff0000">
            <span style={{ fontSize: "14pt" }}>
              ◆<strong>청담프린세스</strong>
            </span>
          </font>
          <font color="#0000ff">
            <span style={{ fontSize: "14pt" }}>
              :&nbsp;<strong>010 5279 3901</strong>{" "}
            </span>
          </font>
        </font>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <font color="#0000ff" style={{ fontSize: "16pt" }}>
          카톡 ID : 카톡아이디
        </font>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <font color="#0000ff">
          <br />
        </font>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        &nbsp;&nbsp;
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ color: "rgb(120, 32, 185)", fontSize: "14pt" }}>
          <strong>A) 일자리</strong>
        </span>
        <span style={{ fontSize: "14pt" }}>
          &nbsp;
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "14pt" }}>
          <br />
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <strong>
          <br />
        </strong>
        <font color="#000000" />
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }} />
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          *<strong>
            <font color="#000000">퍼블릭 &amp; 쎄미 </font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#000000" />
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#000000">*순수 테이블만 보는가게(5개~8개)&nbsp;</font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#000000">
              현재 tc 풀티 <font size={3}>이밴트중</font> *~
            </font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#000000" />
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <strong>
          <span style={{ fontSize: "11pt" }}>
            *<strong>
              <font color="#000000">까페 (갯수나 보장제) </font>
            </strong>
          </span>
        </strong>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <strong>
          <span style={{ fontSize: "11pt" }} />
          <strong>
            <br />
          </strong>
        </strong>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <strong>
          <br />
        </strong>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <span style={{ color: "rgb(255, 0, 0)" }}>◆청담프린세스와 </span>
            <font color="#000000">상담하시면서 커피한잔하시는 언니들은</font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#000000">
              <font color="#000000">&nbsp;</font>제가 관리하는{" "}
            </font>
          </strong>
        </span>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#000000">잘나가는 강남1등</font>{" "}
            <span style={{ color: "rgb(255, 0, 0)" }}>강남최고가게</span>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <span style={{ color: "rgb(255, 0, 0)" }}>
              25여곳을 개인의 성향 취향 근무시간등
            </span>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <span style={{ color: "rgb(255, 0, 0)" }}>
              복잡한 상황을 언니에게 최대한 편하게 해드리기위해서
            </span>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <span style={{ color: "rgb(255, 0, 0)" }}>
              여러가지 많은 시스템의 가게를 같이 상의하며
            </span>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <span style={{ color: "rgb(255, 0, 0)" }}>한번에 </span>
            <span style={{ color: "rgb(255, 0, 0)" }}>면접</span>
            <font color="#000000">보시는거예여~</font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <strong>
          <br />
        </strong>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <span style={{ color: "rgb(255, 0, 0)" }}>
              &nbsp;◆청담 프린세스 강남최고팀20명이{" "}
            </span>
            <font color="#000000">언니에게 1:1매니저가되어</font>
          </strong>
        </span>
        <font color="#000000">&nbsp;</font>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#000000">언니에게 최대한 잘맞는 가게에서</font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#000000">언니에게 강남</font>{" "}
            <span style={{ color: "rgb(255, 0, 0)" }}>최고의 페이를 </span>
            <font color="#000000">맞춰드려여 ^^*</font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#000000">하루하루&nbsp;마니마니 벌게해드려여~~</font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#000000">당연히 100% 당일지급이구여~</font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#000000">돈버는 재미를 확실히 알려드리겠어여~</font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ color: "rgb(0, 158, 37)", fontSize: "11pt" }}>
          <strong>제아가씨수입과 건강은 제가 확실히 챙깁니다~</strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        &nbsp;
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ color: "rgb(120, 32, 185)", fontSize: "14pt" }} />
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ color: "rgb(120, 32, 185)", fontSize: "14pt" }}>
          <strong>B) 선성형</strong>
        </span>
        <span style={{ fontSize: "14pt" }}>&nbsp;</span>
        
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ color: "rgb(120, 32, 185)", fontSize: "11pt" }}>
          <br />
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#000000">강남에서 이쁜 모습으로 살아가세여~!</font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <strong>
          <br />
        </strong>
        <font color="#000000" />
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#000000">
              세상에 처음부터 이쁜언니들이 얼마나될까여?~
            </font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#000000">외모나 스타일 이쁘게 변신하시구여~!</font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#000000">회복후에 자신있게 살아가세여~!</font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <strong>
          <br />
        </strong>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <span style={{ color: "rgb(255, 0, 0)" }}>
              <font color="#000000">이뻐진 모습으로</font>{" "}
            </span>
            <font color="#000000">살아가고싶은 언니들은</font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <font color="#000000">
            <strong>
              <img src />
              <font color="#c00000">◆청담</font>
              <font color="#ff0000">프린세스</font>가 얼마든지 만들어 드려여 ^^*
            </strong>
          </font>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#000000">면접후 초스피드로 빠르게 도와드립니다</font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <font color="#000000">
            <strong>자신감찾아 당당한 언니가 되세여~</strong>
          </font>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <font color="#000000">
          <strong>
            <span style={{ fontSize: "11pt" }}>
              언니에 <font color="#000000">외모와</font>
            </span>
            <span style={{ fontSize: "11pt" }}>
              <span style={{ color: "rgb(255, 0, 0)" }}>
                <font color="#000000">수입을 강남최고로 만들어 드립니다~</font>
              </span>
            </span>
          </strong>
        </font>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }} />
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#ff0000">강</font>
            <font color="#ff0000">남1등 ◆청담프린세스의&nbsp; 노하우로</font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }} />
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#ff0000">
              언니들의 콤플렉스와 고민을&nbsp;시원하게 해결해드려여{" "}
            </font>
            <font color="#000000">^^*</font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }} />
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#000000" />
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <br />
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        &nbsp;&nbsp;
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ color: "rgb(120, 32, 185)", fontSize: "14pt" }}>
          <strong>C) 원룸*선불금</strong>
        </span>
        <span style={{ color: "rgb(120, 32, 185)", fontSize: "14pt" }}>
          &nbsp;
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <br />
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#000000">
              지방에서 오시는분이나 방을 얻고싶은데 보증금이 없으면
            </font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#000000">좋은 풀옵션원룸 먼저 얻어 드리구여</font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <strong>
          <br />
        </strong>
        <font color="#000000" />
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#000000">
              다른곳에 선불금얘기와 생활비 얘기도&nbsp;이야기 나눈뒤
            </font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#000000">이제껏 어떻게 살았던 언니와 함께</font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#000000">앞으로 성실히 변해갈 언니라면</font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <font color="#000000">
              믿고 해결하게끔 도와드릴께여~&nbsp;&nbsp;
            </font>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }} />
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }} />
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }} />
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>&nbsp;</strong>
          <font face="맑은 고딕" size={4}>
            
          </font>
          
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <br />
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <font style={{ fontSize: "12pt" }}>
          <font color="#ff0000">
            <span style={{ fontSize: "14pt" }} />
          </font>
        </font>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <font style={{ fontSize: "12pt" }}>
          <font color="#ff0000">
            <span style={{ fontSize: "14pt" }}>
              ◆<strong>청담 프린세스</strong>
            </span>
          </font>
          <font color="#0000ff">
            <span style={{ fontSize: "14pt" }}>
              <font color="#ff0000"> </font>:&nbsp;010 5279 3901{" "}
            </span>
          </font>
        </font>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <font color="#0000ff" style={{ fontSize: "16pt" }}>
          <span style={{ color: "rgb(120, 32, 185)" }} />카톡 ID : 카톡아이디
        </font>&nbsp;
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <span style={{ color: "rgb(255, 0, 0)", fontSize: "14pt" }}>◆</span>
            <span style={{ color: "rgb(255, 0, 0)", fontSize: "14pt" }}>
              청담 프린세스
            </span>
            <span style={{ fontSize: "14pt" }}>
              <font color="#000000">의</font>{" "}
              <font color="#000000">폰은 24시간 활짝 열려있어여</font>~
            </span>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <u>
            <strong>
              <font color="#000000">언제든지 친한 친구에게 물어본다</font>
            </strong>
          </u>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <u>
            <strong>
              <font color="#000000">생각하시구 연락주세여 ^^*</font>
            </strong>
          </u>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <u>
            <strong>
              <font color="#000000">면접시 차비지원 해드려여 *~</font>
            </strong>
          </u>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "11pt" }}>
          <strong>
            <u>
              <font color="#000000" />
            </u>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "12pt" }}>
          <strong>
            <u>
              <span style={{ color: "rgb(0, 158, 37)" }} />
            </u>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "12pt" }}>
          <strong>
            <u>
              <span style={{ color: "rgb(0, 158, 37)" }}>
                <u>강남에서 전체1등이면서 항상 언니들편인</u>
              </span>
            </u>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "12pt" }}>
          <strong>
            <u>
              <span style={{ color: "rgb(0, 158, 37)" }} />
              <font color="#000000">
                &nbsp;<font color="#c00000">◆청담 프린세스</font>
              </font>
            </u>
          </strong>
          <strong>
            <u>
              <font color="#000000">가 </font>
            </u>
          </strong>
        </span>
        <span style={{ fontSize: "12pt" }}>
          <strong>
            <u>
              <font color="#000000">언니들의 꿈을 이뤄드리며</font>
            </u>
          </strong>
        </span>
      </p>
      <p align="center" style={{ margin: 0, textAlign: "center" }}>
        <span style={{ fontSize: "12pt" }}>
          <u>
            <strong>
              <font color="#000000">언니의 마음에쏙들게 맞춰드리겠어여 ~~</font>
            </strong>
          </u>
        </span>
      </p>
    </font>
    <p align="center" style={{ margin: 0, textAlign: "center" }} />
    <p align="center" style={{ margin: 0, textAlign: "center" }}>
      <br />
    </p>
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

export default Pro22Page