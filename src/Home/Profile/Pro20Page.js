import React, { Component } from 'react';
import './Pro1Page.css'
//http://divtable.com/generator/
import pro20 from '../BoxLogo/20.png'
import room from './room.jpg'
import ad from './ad.jpg'
import bar from './bar.jpg'
import last_ad from './lastAdd.jpg'
import Global from '../Global'
import MainTop_ver2 from '../MainTop_ver2'

class Pro20Page extends Component {
  render() {
    return (
      <div>
        <Global />
        <MainTop_ver2 />
      <div className="allcontent">
        <div className="viewContent">
          <div className="registerInfo">2018.02.25 03:46</div>
          <div className="viewTypeFullWidth">

            <div className="companyInfo infoBox">
              <div className="recruitInfo">
                <div className="company">
                  <span className="companyName">신사 믹스</span>
                </div>
                <h1>신사/청담 넘버원 가라오케 믹스</h1>
                <div className="companyLogo">
                  <div className="logo">
                    <img src={pro20} alt="Smiley face"/>
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
                              항상
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
                            [TC] 100,000원
                            </span>
                            <span></span>
                          </td>
                        </tr>
                        <tr>
                          <th>업종</th>
                          <td>
                            <span>
                              가라오케
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
                              18:00 ~ 08:00
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
                              신사동 믹스
                            </span>
                            <span></span>
                          </td>
                        </tr>
                        <tr>
                          <th>담당자</th>
                          <td>
                            <span>
                              서민호
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
              <div align="center">
  <br />
  <br />
  <font color="red" size={6}>
    <b>♥♥믹스♥♥</b>
  </font>
  <br />
  <br />
  <br />
  <font color="#525252">
    <p align="center" style={{ margin: 0 }}>
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font size={6}>
        <br />
      </font>
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font size={6}>&nbsp;서민호 상무</font>
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font size={6}>
        <br />
      </font>
    </p>
    <p align="center" style={{ margin: 0, "fontSize":"15px", "lineHeight":"200%" }}>
      <font size={6}>
        <font color="#ff0000">010-5656-7796</font>
        <br />
        <br />
        <br />
        <br />
      </font>항상 고생하시는 우리 이쁜언니들<br />죽어라 일하는데 돈은 안되고<br />술진상
      몸진상에 열받아서 끝나고 또 술먹고<br />매일 반복되는 일상이 지겹지않나요?<br />
      <br />언니들 나랑 같이 가요<br />
      <br />이 업계에서 졸업은 최단기로 돈은 최고로 벌어갈수있게 해줄게요<br />내
      손잡고 나 믿고 우리 지금부터라도 다시 열심히 해봅시다&nbsp;<br />서민호상무
      한번만 믿어주세요
    </p>
    <p align="center" style={{ margin: 0 , "fontSize":"15px", "lineHeight":"200%"}}>
      <br />
      서민호 상무
      <br />
      전화 010-5656-7796{" "}
      {" "}
      <br />
      <br />
      <br __jindo__id="e113604278184328851289" />
      <br />
      <br />1. 평균 2시간씩 지루하게 일하는 가게들과는 달리<br />
      <font color="#0070c0">1시간10분 </font>이라는 깔끔함에{" "}
      <font color="#ff0000">TC 10만원</font> 이라는 고급진 페이<br />( +Plus
      출근률 좋은언니들 만근비 내지갑에서 빼줍니다.)<br />
      <br />
      -서민호 상무-
      <br />
      전화 010-5656-7796{" "}
      {" "}
      <br />
      
    </p>
    <p align="center" style={{ margin: 0 }}>
      <br />
    </p>
    <p align="center" style={{ margin: 0 }}>
      <br />
      <br />
    </p>
    <p align="center" style={{ margin: 0,"fontSize":"15px", "lineHeight":"200%" }}>
      2. 언니들이 강남 이라 걱정하는 외모!!
    </p>
    <p align="center" style={{ margin: 0 }}>
      <br />
    </p>
    <p align="center" style={{ margin: 0,"fontSize":"15px", "lineHeight":"200%" }}>
      <font color="#ff0000">절대 걱정할실 필요가 없습니다.</font>
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font color="#ff0000">
        <br />
      </font>
    </p>
    <p align="center" style={{ margin: 0,"fontSize":"15px", "lineHeight":"200%" }}>
      <font color="#0070c0">밝은 성격만 갖추면 완전 OK !!</font>
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font color="#0070c0">
        <br />
      </font>
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font color="#0070c0">
        <br />
      </font>
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font color="#0070c0">
        <br />
      </font>
    </p>
    <p align="center" style={{ margin: 0,"fontSize":"15px", "lineHeight":"200%" }}>
      <br />
      <br />
      <br />
      <br />3. 이 타임에 언니들 우리가게 자랑좀 하자면<br />룸 80개 대형업소에
      연중무휴 언니들이 없어서 못받습니다<br />그 이유가 뭘까요?<br />가게측에서
      언니들의 배려하는 센스들에 의해서<br />언니들의 컨디션을 최상으로 올려주기
      때문이죠<br />
      <br />언니들이 편안하게 쉴수 있는 넓은 대기실과<br />밥,간식 등 먹고싶은거
      언제든 먹을수 있는 맛있는 매점<br />가게 안에
      개인사물함/미용실/메이크업/홀복렌탈 이<br />상주해있습니다<br />이런
      가게는 저희 가게 밖에없을걸요??<br />직접 와서 보세요! 입이 떡 벌어집니다<br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />4. 2017년 기준 1998=20살<br />언니들 미성년자는 안된다는거 알고
      계시죠~?<br />저희 가게는 20살부터 나이제한없이 받고있어요<br />나이가
      많아 이제 초이스가 안될거 같다는 언니들!<br />일단 와서 나랑 면접한번봐여<br />내가
      할수 있는데까지 밀어드릴게요<br />대학생,직장인,투잡 모두 환영합니다~<br />
      <br />

      <br />
      <br />
      
      <br />
      <br />
      <br />언니들 지금까지 긴 글 읽어줘서 너무 감사해요♡<br />난 이 넓은
      강남바닥에서 우리 같이 욕심과 성실과 끈기라면<br />못해 낼꺼 없다고
      생각해요<br />한때 언니들과 같은 아가씨였던 마음으로 돌아가서<br />언니들의
      힘든일들 더 귀기울여 들을게요<br />저랑 함께 가요 언니들♡<br />
      <br />
      <br />
      <br />
      <br />
      <font size={6}>&nbsp;&nbsp;</font>
      <font size={6}>
      </font>
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font size={6}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </font>{" "}
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font size={6}>서민호 상무</font>
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font size={6}>
        <br />
      </font>
    </p>
    <p align="center" style={{ margin: 0 }}>
      <font color="#ff0000" size={6}>
      010-5656-7796
      </font>
    </p>
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

export default Pro20Page