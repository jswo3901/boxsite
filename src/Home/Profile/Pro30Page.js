import React, { Component } from 'react';
import './Pro1Page.css'
//http://divtable.com/generator/
import pro30 from '../BoxLogo/30.jpg'
import room from './room.jpg'
import ad from './ad.jpg'
import bar from './bar.jpg'
import last_ad from './lastAdd.jpg'
import Global from '../Global'
import MainTop_ver2 from '../MainTop_ver2'

class Pro30Page extends Component {
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
                  <span className="companyName">파이어</span>
                </div>
                <h1>직원급구 </h1>
                <div className="companyLogo">
                  <div className="logo">
                    <img src={pro30} alt="Smiley face"/>
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
                              주점
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
                              18:00~11:00
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
                              파이어
                            </span>
                            <span></span>
                          </td>
                        </tr>
                        <tr>
                          <th>담당자</th>
                          <td>
                            <span>
                              민화
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
              <div
  id="ct"
  style={{ marginTop: 10, borderBottom: "1px solid #e0e0e0", padding: 10 }}
>
  <font size={6}>
    {" "}
    <p align="center" style={{ margin: 0, lineHeight: 2 }}>
      <strong>
        <font color="#0070c0"></font>{" "}
      </strong>
      &nbsp;<font color="#c00000">
        <strong>010-6833-3612 </strong>
      </font>{" "}
    </p>
    <p align="center" style={{ margin: 0, lineHeight: 2 }}>
      <font color="#c00000">
        <strong>
          <font color="#00b0f0" size={6}>
          </font>
        </strong>
      </font>
    </p>
    <p style={{ margin: 0, lineHeight: 2 }}>&nbsp;</p>
  </font>
  <p align="center" style={{ margin: 0, lineHeight: 2 }}>
    &nbsp;
  </p>
  <p align="center" style={{ margin: 0, lineHeight: 2 }}>
    <br />
    <font size={5}>
      <strong>
        <font color="#ff0000" style={{ backgroundColor: "rgb(255,255,255)" }}>
          출근시간
        </font>{" "}
      </strong>
      <font color="#7030a0">
        <strong>▶ </strong>
      </font>
      <strong>&nbsp;평균 7~9시 사이 출퇴근 </strong>
    </font>
  </p>
  <p align="center" style={{ margin: 0, lineHeight: 2 }}>
    <font size={5}>
      <strong>다 시켜드립니다.</strong>
    </font>
  </p>
  <p align="center" style={{ margin: 0 }}>
    <strong>
      <font size={5}>
        <br />
      </font>
    </strong>
  </p>
  <p align="center" style={{ margin: 0, lineHeight: 2 }}>
    <br />
    <font size={5}>
      <strong>
        <font color="#ff0000">일하는복장</font>{" "}
      </strong>
      <font color="#ffc000">
        <strong>
          ▶{" "}
          <font size={5}>
            <font color="#ffc000">
            </font>
            <strong>&nbsp;</strong>
          </font>
        </strong>
      </font>
    </font>
  </p>
  <p align="center" style={{ margin: 0, lineHeight: 2 }}>
    <font size={5}>
      <font color="#ffc000">
        <strong>
          <font size={5}>
            <strong>
              <font size={5}>
                <strong>
                  <font color="#000000">트레이닝복 </font>No
                </strong>
              </font>
            </strong>
          </font>
        </strong>
      </font>
    </font>
  </p>
  <p align="center" style={{ margin: 0, lineHeight: 2 }}>
    <font size={5}>
      <font color="#ffc000">
        <strong>
          <font size={5}>
            <strong>
              <font size={5}>
                <strong>
                  <font size={5}>
                    <strong>
                      <font color="#000000">편한외출복 </font>No{" "}
                    </strong>
                  </font>
                </strong>
              </font>
            </strong>
          </font>
        </strong>
      </font>
    </font>
  </p>
  <p align="center" style={{ margin: 0, lineHeight: 2 }}>
    <font size={5}>
      <strong>어느정도의 정성만.^^</strong>
    </font>
  </p>
  <p align="center" style={{ margin: 0 }}>
    <strong>
      <font size={5}>
        <br />
      </font>
    </strong>
  </p>
  <p align="center" style={{ margin: 0, lineHeight: 2 }}>
    <br />
    <font size={5}>
      <strong>
        <font color="#00b0f0">갯수강요</font> ▶&nbsp;{" "}
        Don"t touch{" "}
      </strong>
    </font>
  </p>
  <p align="center" style={{ margin: 0, lineHeight: 2 }}>
    <font size={5}>
      <strong>일을 많이 하고싶다! 무조건 오세요! </strong>
    </font>
  </p>
  <p align="center" style={{ margin: 0, lineHeight: 2 }}>
    <font size={5}>
      <strong>오후까지 시켜드립니다. 약속하겠습니다.</strong>
    </font>
  </p>
  <p align="center" style={{ margin: 0 }}>
    <strong>
      <font size={5}>
        <br />
      </font>
    </strong>
  </p>
  <p align="center" style={{ margin: 0, lineHeight: 2 }}>
    <br />
    <font size={5}>
      <strong>
        <font color="#7030a0" style={{ backgroundColor: "rgb(255,255,255)" }}>
          페이
        </font>{" "}
        ▶ 무조건{" "}
      </strong>
      <strong>100%</strong>
      <strong> 당일!!!!!</strong>
    </font>
  </p>
  <p align="center" style={{ margin: 0, lineHeight: 2 }}>
    <font size={5}>
      <strong>&nbsp;지급입니다.</strong>
    </font>
  </p>
  <p align="center" style={{ margin: 0, lineHeight: 2 }}>
    &nbsp;
  </p>
  <p align="center" style={{ margin: 0, lineHeight: 2 }}>
    &nbsp;
  </p>
  <p align="center" style={{ margin: 0, lineHeight: 2 }}>
    <br />
    <font size={5}>
      <strong>
        <font color="#974806">자격 </font>▶{" "}
      </strong>
      <strong>20~29까지 환영합니다.</strong>
    </font>
  </p>
  <p align="center" style={{ margin: 0, lineHeight: 2 }}>
    <font size={5}>
      <strong>&nbsp;대학생 . 알바 . 급전필요 다 환영합니다.</strong>
    </font>
  </p>
  <p align="center" style={{ margin: 0, lineHeight: 2 }}>
    <font size={5}>
      <strong>^^*</strong>
    </font>
  </p>
  <p align="center" style={{ margin: 0 }}>
    <font size={5}>
      <br />
    </font>
  </p>
  <p align="center" style={{ margin: 0, lineHeight: 2 }}>
    <font size={5}>
      <strong>
        <font color="#00b050">위치</font> ▶{" "}
      </strong>
      <strong>저희는 강남구 논현동에</strong>
    </font>
  </p>
  <p align="center" style={{ margin: 0, lineHeight: 2 }}>
    <font size={5}>
      <strong>&nbsp;위치해 있어요~</strong>
    </font>
  </p>
  <p align="center" style={{ margin: 0 }}>
    <font size={5}>
      <br />
    </font>
  </p>
  <p align="center" style={{ margin: 0, lineHeight: 2 }}>
    &nbsp;
  </p>
  <font size={6}>
    <p align="center" style={{ margin: 0, lineHeight: 2 }}>
      &nbsp;
    </p>
    <font color="#00b0f0">
      <p align="center" style={{ margin: 0, lineHeight: 2 }}>
        <strong>
          <font color="#0070c0"></font>
          <font color="#000000">
            {" "}
          </font>
        </strong>
        <font color="#000000">&nbsp;</font>
        <strong>
          <font color="#c00000">010-6833-3612</font>
        </strong>
        <font color="#c00000">
        </font>
      </p>
      <p align="center" style={{ margin: 0, lineHeight: 2 }}>
        <font color="#c00000">
          <strong>
            <font color="#00b0f0" size={6}>
            </font>
          </strong>
        </font>
      </p>
      <font color="#ff0000" />
    </font>
    <p style={{ margin: 0, lineHeight: 2 }}>&nbsp;</p>
  </font>
  <p align="center" style={{ margin: 0 }}>
    <strong>
      <br />
    </strong>
  </p>
  <p align="center" style={{ margin: 0, lineHeight: 2 }}>
    <strong>
      <font size={5} />
    </strong>&nbsp;
  </p>
  <p align="center" style={{ margin: 0, lineHeight: 2 }}>
    &nbsp;
  </p>
  <p align="center" style={{ margin: 0, lineHeight: 2 }}>
    <font size={5}>
      <strong>편한 언니들이랑 일도 편하게~ </strong>
    </font>
  </p>
  <p align="center" style={{ margin: 0 }}>
    <font size={5}>
      <br />
    </font>
  </p>
  <p align="center" style={{ margin: 0, lineHeight: 2 }}>
    <font size={5}>
      <strong>할 수 있게 도와드리겠습니다.</strong>
    </font>
  </p>
  <p align="center" style={{ margin: 0 }}>
    <font size={5}>
      <br />
    </font>
  </p>
  <p align="center" style={{ margin: 0, lineHeight: 2 }}>
    <font size={5}>
      <strong>갯수 걱정NoNo</strong>
    </font>
  </p>
  <p align="center" style={{ margin: 0 }}>
    <font size={5}>
      <br />
    </font>
  </p>
  <p align="center" style={{ margin: 0, lineHeight: 2 }}>
    <font size={5}>
      <strong>제가 발로 뛰어 갯수</strong>
      <strong> </strong>
    </font>
  </p>
  <p align="center" style={{ margin: 0 }}>
    <strong>
      <font size={5}>
        <br />
      </font>
    </strong>
  </p>
  <p align="center" style={{ margin: 0, lineHeight: 2 }}>
    <font size={5}>
      <strong>열심히 채우도록 노력하겠습니다.</strong>
    </font>
  </p>
  <p align="center" style={{ margin: 0 }}>
    <font size={5}>
      <br />
    </font>
  </p>
  <p align="center" style={{ margin: 0, lineHeight: 2 }}>
    <font size={5}>
      <strong>보통 저녁8시 부터 ~ 오후늦게까지 일하고 </strong>
    </font>
  </p>
  <p align="center" style={{ margin: 0, lineHeight: 2 }}>
    <font size={5}>
      <strong>늦게까지 일하고싶은</strong>
      <strong> </strong>
    </font>
  </p>
  <p align="center" style={{ margin: 0 }}>
    <strong>
      <font size={5}>
        <br />
      </font>
    </strong>
  </p>
  <p align="center" style={{ margin: 0, lineHeight: 2 }}>
    <font size={5}>
      <strong>언니들 ★☆ 대 환 영 ☆★</strong>
    </font>
  </p>
  <p align="center" style={{ margin: 0 }}>
    <font size={5}>
      <br />
    </font>
  </p>
  <p align="center" style={{ margin: 0, lineHeight: 2 }}>
    <font size={5}>
      <strong>여기만큼 편한곳이 없다는걸</strong>
    </font>
  </p>
  <p align="center" style={{ margin: 0 }}>
    <font size={5}>
      <br />
    </font>
  </p>
  <p align="center" style={{ margin: 0, lineHeight: 2 }}>
    <font size={5}>
      <strong>느끼게 해드릴게요 !</strong>
      <strong> </strong>
    </font>
  </p>
  <p align="center" style={{ margin: 0 }}>
    <strong>
      <font size={5}>
        <br />
      </font>
    </strong>
  </p>
  <p align="center" style={{ margin: 0, lineHeight: 2 }}>
    <font size={5}>
      <strong>제가 말이 너무 많았네요..</strong>
    </font>
  </p>
  <p align="center" style={{ margin: 0 }}>
    <font size={5}>
      <br />
    </font>
  </p>
  <p align="center" style={{ margin: 0, lineHeight: 2 }}>
    <font size={5}>
      <strong>&nbsp;</strong>
      <strong>궁금하신게 있으시면 언제든 문의주세요 ^^</strong>
    </font>
  </p>
  <p align="center" style={{ margin: 0 }}>
    <font size={5}>
      <br />
    </font>
  </p>
  <p align="center" style={{ margin: 0, lineHeight: 2 }}>
    <font size={5}>
      <strong>천사같은 마음으로 친절하게</strong>
    </font>
  </p>
  <p align="center" style={{ margin: 0 }}>
    <font size={5}>
      <br />
    </font>
  </p>
  <p align="center" style={{ margin: 0, lineHeight: 2 }}>
    <font size={5}>
      <strong>설명해드리겠습니다.</strong>
    </font>
  </p>
  <p align="center" style={{ margin: 0, lineHeight: 2 }}>
    <font size={5}>
      <br />
    </font>&nbsp;
  </p>
  <p align="center" style={{ margin: 0 }}>
    <font size={7}>
      <font color="#ff0000" />
    </font>
  </p>
  <p align="center" style={{ margin: 0, lineHeight: 2 }}>
    <font size={7}>
      <font color="#ff0000">
        <font size={6}>
          <strong>
            <font color="#0070c0">민화</font>
            <font color="#000000">
              {" "}
            </font>
          </strong>
          <font color="#000000">&nbsp;</font>
          <strong>
            <font color="#c00000">010-6833-3612</font>
          </strong>
          <font color="#c00000">
          </font>
        </font>
      </font>
    </font>
  </p>
  <p align="center" style={{ margin: 0, lineHeight: 2 }}>
    <font size={7}>
      <font color="#ff0000">
        <font color="#c00000">
          <strong>
            <font color="#00b0f0" size={6}>
            </font>
          </strong>
        </font>
      </font>
    </font>
  </p>
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

export default Pro30Page