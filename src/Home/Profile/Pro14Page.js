import React, { Component } from 'react';
import './Pro1Page.css'
//http://divtable.com/generator/
import pro14 from '../BoxLogo/14.jpg'
import room from './room.jpg'
import ad from './ad.jpg'
import bar from './bar.jpg'
import last_ad from './lastAdd.jpg'
import Global from '../Global'
import MainTop_ver2 from '../MainTop_ver2'

class Pro14Page extends Component {
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
                  <span className="companyName">프로스티</span>
                </div>
                <h1>프로스티 손님많아요</h1>
                <div className="companyLogo">
                  <div className="logo">
                    <img src={pro14} alt="Smiley face"/>
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
                              23명
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
                            [시급]110,000원
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
                              프로스티
                            </span>
                            <span></span>
                          </td>
                        </tr>
                        <tr>
                          <th>담당자</th>
                          <td>
                            <span>
                              오상식
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
    <b>강남 프로스티</b>
  </font>
  <br />
  <br />
  <br />
  <font color="#525252">
    <div style={{ textAlign: "center" }}>
      <font face="batang">
        <span style={{ fontSize: 24 }}>
          <b>안녕하세요&nbsp;</b>
        </span>
      </font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font color="#ff0000" size={5}>
      프로스티 오상식입니다
      </font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>항상 고생하시는 우리 이쁜 언니들</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>죽어라 일하는데 돈은 안되고</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>술진상 몸진상에 열받아서 </font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>끝나고 또 술먹고</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>매일 반복되는 일상이 지겹지 않나요?</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>언니들 나랑 같이 가요</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>이 업계에서 졸업은 최단기로&nbsp;돈은 최고로 </font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>벌어갈수 있게 해줄게요</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>내손잡고 나 믿고 우리 지금부터라도 </font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>다시 열심히 해봅시다</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <br />
    </div>
    <div style={{ textAlign: "center" }}>
      <font color="#0070c0" size={4}>
        오상식이 한번만 믿어주세요
      </font>
    </div>
    <div style={{ textAlign: "center" }}>
      <br />
    </div>
    <div style={{ textAlign: "center" }}>
      <font color="#7030a0" size={4}>
        1.평균 2시간씩 지루하게 일하는
      </font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font color="#7030a0" size={4}>
        가게들과는 달리 1시간이라는{" "}
      </font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font color="#7030a0" size={4}>
        깔끔함에 TC10만원이라는 고급진 페이
      </font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font color="#7030a0" size={4}>
        (+PLUS출근율 좋은 언니들
      </font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font color="#7030a0" size={4}>
        만근비 내지갑에서 빼줍니다)
      </font>
    </div>
    <div style={{ textAlign: "center" }}>
      <br />
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>2.언니들이 강남이라 걱정하는 외모!!!!!!</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>내얼굴이 오징어 쭈꾸미 해삼 말마질이다!!!</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>
        !!!!!!!!!!!!!!!!괜찮아요 언니 진심으로!!!!!!!!!!!!!!!!!!!!!!
      </font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>나도 어디빻아논 얼굴이었는데</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>돈 오질라게 벌어서 당당히 졸업했습니다</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>우리가게는 mind와 자기 소신만 있다면</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>그 어떤 언니들보다 ACE로 손님들께</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>예쁨받는 곳입니다</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>거짓하나 안 보태고</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>평균방5방 갯수는 </font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>보장할께요</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>부지런떨어서 8시전까지만와도</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>8~10방 나옵니다</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <br />
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>3.이타임에 언니들</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>우리가게 자랑좀 하자면</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>룸80개 대형업소에 연중무휴</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>언니들이 없어서 못받습니다</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>그이유가 멀까요????</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>가게측에서 언니들을 배려하는</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>센스들에 의해서 언니들의 컨디션을 </font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>최상으로 올려주기 때문이죠</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>언니들이 편안하게 쉴수 있는</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>넓은 대기실과</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>밥,간식등 먹고싶은거 언제든 먹을수 있는</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>맛있는 매점 가게안에 개인사물함/헤어</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>메이크업/홀복렌탈이 상주해 있습니다</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>이런 가게는 저희 가게 밖에 없을껄요??</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>직접와서 보세요!!!</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>입이 벌어집니다</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>
        <br />
      </font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font color="#ff0000" size={4}>
        4.2017년 기준1998=20살
      </font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font color="#ff0000" size={4}>
        언니들 미성년자는 안된다는거{" "}
      </font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font color="#ff0000" size={4}>
        알고있죠??
      </font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>저희 가게는 20살부터</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>나이제한없이 받고 있어요</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>나이가 많아 이제 초이스가 </font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>안될거 같다는 언니들</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>일단 와서 나랑 면접한번봐여 내가 할수 </font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>있는데까지 밀어드릴께요</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>대학생, 직장인,투잡 모두 환영해요</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>언니들 지금까지 긴글 읽어줘서 </font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>너무 감사해요~^^</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>난 이 넓은 강남바닥에서 우리 같이 </font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>욕심과 성실과 끈기라면</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>못해낼꺼 없다고 생각해요</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>한때 언니들과 같은 아가씨였던 </font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>마음으로&nbsp; 돌아가서 </font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>언니들의 힘든일들 </font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>더 귀기울여 들을게요</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>저랑 함께 가요 언니들~</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>
        <br />
      </font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>친절상담</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>
        <br />
      </font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font color="#17365d" size={4}>
        오 상 식
      </font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>
        <br />
      </font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font color="#17365d" size={4}>
        카카오
      </font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>
        <font color="#17365d" size={4}>
          카톡아이디
        </font>
      </font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>
        <br />
      </font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>010-5279-3901</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <font size={4}>이번호로 연락주세요</font>
    </div>
    <div style={{ textAlign: "center" }}>
      <br />
    </div>
    <div style={{ textAlign: "center" }}>
      <br />
    </div>
    <div style={{ textAlign: "center" }}>
      <br />
    </div>
    <div style={{ textAlign: "center" }}>
      <br />
    </div>
    <div style={{ textAlign: "center" }}>
      <br />
    </div>
    <div style={{ textAlign: "center" }}>
      <br />
    </div>
    <div style={{ textAlign: "center" }}>
      <br />
    </div>
    <div style={{ textAlign: "center" }}>
      <br />
    </div>
    <div style={{ textAlign: "center" }}>
      <br />
    </div>
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

export default Pro14Page