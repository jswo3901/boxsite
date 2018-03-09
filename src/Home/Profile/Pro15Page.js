import React, { Component } from 'react';
import './Pro1Page.css'
//http://divtable.com/generator/
import pro15 from '../BoxLogo/15.jpg'
import room from './room.jpg'
import ad from './ad.jpg'
import bar from './bar.jpg'
import last_ad from './lastAdd.jpg'
import Global from '../Global'
import MainTop_ver2 from '../MainTop_ver2'

class Pro15Page extends Component {
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
          <div className="registerInfo">2018.02.21 18:30</div>
          <div className="viewTypeFullWidth">

            <div className="companyInfo infoBox">
              <div className="recruitInfo">
                <div className="company">
                  <span className="companyName">셔츠룸 이븐</span>
                </div>
                <h1>프로스티 손님많아요</h1>
                <div className="companyLogo">
                  <div className="logo">
                    <img src={pro15} alt="Smiley face"/>
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
                              18:00~13:00
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
                              eVen
                            </span>
                            <span></span>
                          </td>
                        </tr>
                        <tr>
                          <th>담당자</th>
                          <td>
                            <span>
                              김진겸
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
              <div align="center" style={{"lineHeight":"26px"}}>
  <br />
  <br />
  <font color="red" size={6}>
    <b>강남 No.1 셔츠룸</b>
  </font>
  <br />
  <br />
  <br />
  <font color="#525252">
    <strong />
    <li>
      <font size={5}>
        <p align="center" style={{ margin: 0 }}>
          <font color="#000000">
          </font>
          <font color="#000000">
            <br />
          </font>
        </p>
        <p align="center" style={{ margin: 0 }}>
          <font color="#e36c09">
            <br />
          </font>
          <font color="#e36c09" size={3}>
            <font style={{ backgroundColor: "#fdeada" }}>
              <font color="#974806">
                <font color="#ff0000" style={{ backgroundColor: "#ffffff" }}>
                  <font style={{ backgroundColor: "#ffffff" }}>
                    <font style={{ backgroundColor: "#ffffff" }}>&nbsp;<strong>
                        <font size={6}>초저녁일 늦일 독점!!</font>{" "}
                      </strong>
                    </font>
                  </font>
                </font>
              </font>
            </font>
          </font>
        </p>
      </font>
      <p align="center" style={{ margin: 0 }}>
        <br />
      </p>
      <p align="center" style={{ margin: 0 }}>
        <font size={5}>
          
        </font>
      </p>
      <p align="center" style={{ margin: 0 }}>
        <font size={5}>
          <strong>
            ★★강남/역삼{" "}
            이븐에서 같이 일하실<br />20대~30대 언니들 모십니다.~~!!★★
          </strong>
        </font>
      </p>
      <p style={{ margin: 0 }}>
        <strong>
          <br />
        </strong>
      </p>
      <font size={5}>
        <div align="center">
          <strong>
          </strong>
        </div>
        <div align="center">
        </div>
        <div align="center">
          <font size={6}>
            <strong>
              <font color="#000000">자격조건</font>
            </strong>
          </font>
        </div>
      </font>
      <font size={3}>
        <strong> </strong>
      </font>
      <p align="center" style={{ margin: 0 }}>
        <font size={5}>
          <strong>20~30대모두 환영!</strong>
        </font>
      </p>
      <font size={5}>
        <p align="center" style={{ margin: 0 }}>
          <strong>미성년자는 오면 큰일나요 ㅠㅠ</strong>
        </p>
        <p align="center" style={{ margin: 0 }}>
          <strong>
            <br />
          </strong>
        </p>
      </font>
      <font size={3}>
        <strong> </strong>
      </font>
      <p style={{ margin: 0 }}>
        <br />
      </p>
      <p style={{ margin: 0 }}>
        <font size={3}>
          <strong>
          </strong>
        </font>
      </p>
      <p style={{ margin: 0 }}>
        <font size={3}>
          <br />
          <strong />
        </font>
      </p>
      <font size={5}>
        <div align="center">
          <font size={6}>
            <font color="#000000">
              <strong>
                <font size={3}>
                </font>급여
              </strong>
            </font>
          </font>
        </div>
      </font>
      <font size={3}>
        <strong> </strong>
      </font>
      <div align="center" style={{ lineHeight: "1.15" }}>
        <font color="#ff0000" />
        <strong>&nbsp;</strong>
      </div>
      <p align="center" style={{ margin: 0 }}>
        <font size={5}>
          <strong>무조건 100% 당일지급합니다</strong>
        </font>
        <font size={5}>
          <br />
        </font>
      </p>
      <font size={5}>
        <p style={{ margin: 0 }}>
          <strong>
            <br />
          </strong>
        </p>
        <p style={{ margin: 0 }}>
          <strong>
          </strong>
        </p>
        <p style={{ margin: 0 }}>
          <strong>
            <br />
          </strong>
        </p>
      </font>
      <font size={3}>
        <strong> </strong>
      </font>
      <p align="center" style={{ margin: 0 }}>
        <font size={6}>
          <strong>
            <font size={3}>
            </font>근무시간{" "}
          </strong>
        </font>
      </p>
      <p align="center" style={{ margin: 0 }}>
        <font size={5}>
          <strong>
            7㏘시에서~아침 지칠때까지!<br />출퇴근 자유!
          </strong>
        </font>
      </p>
      <p style={{ margin: 0 }}>
        <font size={5}>
          <br />
          <strong />
        </font>
      </p>
      <font size={5}>
        <p style={{ margin: 0 }}>
          <strong>
            <br />
          </strong>
        </p>
      </font>
      <font size={3}>
        <strong> </strong>
      </font>
      <p align="center" style={{ margin: 0 }}>
        <br />
      </p>
      <p align="center" style={{ margin: 0 }}>
        <font size={6}>
          <strong>
            <font size={3}>
            </font>출근 시켜드려요
          </strong>
        </font>
      </p>
      <p align="center" style={{ margin: 0 }}>
        <font size={5}>
          <strong>
            출퇴근 집앞까지 정성~껏!! <br />절대 걱정하지마세요!!
          </strong>
        </font>
      </p>
      <p align="center" style={{ margin: 0 }}>
        <font size={5}>
          <strong>먹자(숙식제공) 도 가능해요!!</strong>
        </font>
      </p>
      <p align="center" style={{ margin: 0 }}>
        <font size={5}>
          <br />
          <strong />
        </font>
      </p>
      <p align="center" style={{ margin: 0 }}>
        <font size={5}>
          <strong>
          </strong>
        </font>
      </p>
      <p align="center" style={{ margin: 0 }}>
        <font size={5}>
          <strong />
        </font>
        <font size={5}>
          <br />
        </font>
      </p>
      <p align="center" style={{ margin: 0 }}>
        <font size={6}>
          <strong>&nbsp;외모{" "}
          </strong>
        </font>
      </p>
      <p align="center" style={{ margin: 0 }}>
        <font size={5}>
          <strong>착하고 자신감만 있다면 </strong>
        </font>
      </p>
      <p align="center" style={{ margin: 0 }}>
        <font size={5}>
          <strong>누구나 다 예뻐요</strong>
        </font>
      </p>
      <p align="center" style={{ margin: 0 }}>
        <font size={5}>
          <strong>이쁜사람보다는 </strong>
        </font>
      </p>
      <p align="center" style={{ margin: 0 }}>
        <font size={5}>
          <strong>
            애교많고 성실한 사람이 <br />딱이예요~~
          </strong>
        </font>
      </p>
      <p align="center" style={{ margin: 0 }}>
        <font size={5}>
          <br />
          <strong />
        </font>
      </p>
      <p align="center" style={{ margin: 0 }}>
        <strong>
        </strong>
      </p>
      <p style={{ margin: 0 }}>
        <font size={5}>
          <br />
          <strong />
        </font>
      </p>
      <p align="center" style={{ margin: 0 }}>
        <font size={6}>
          <strong>복장{" "}
          </strong>
        </font>
      </p>
    </li>
    <li>
      <p align="center" style={{ margin: 0 }}>
        <font size={6}>
        </font>
      </p>
      <p align="center" style={{ margin: 0 }}>
        <font size={5}>
          <strong>
            친구랑 놀러갈때! 클럽갈때!<br />치마만 입으신다면 OK!!<br />복장자유니까
            부담가지지마요
          </strong>
        </font>
      </p>
      <p align="center" style={{ margin: 0 }}>
        <font size={5}>
          <strong>(단, 청바지 운동화는 안되요!!)</strong>
        </font>
      </p>
      <p align="center" style={{ margin: 0 }}>
        <font size={5}>
          <br />
          <strong />
        </font>
      </p>
      <p align="center" style={{ margin: 0 }}>
        <font size={5}>
          <strong>
            <br />
          </strong>
        </font>
      </p>
      <p align="center" style={{ margin: 0 }}>
        <font size={5}>
          <br />
          <strong />
        </font>
      </p>
      <p align="center" style={{ margin: 0 }}>
        <font size={5}>
          <strong>
            <font size={6}>이런일이 처음이시라구요!?!?
            </font>
            <br />일단 한번 나와보세요~{" "}
          </strong>
        </font>
      </p>
      <p align="center" style={{ margin: 0 }}>
        <font size={5}>
          <strong>친절한 언니 동생들과 일해보면 </strong>
        </font>
      </p>
      <p align="center" style={{ margin: 0 }}>
        <font size={5}>
          <strong>
            매일!! 나오고 싶어질거에요.<br />처음인 언니들 더 신경써드립니다
          </strong>
        </font>
      </p>
      <p align="center" style={{ margin: 0 }}>
        <font size={5}>
          <strong>고민만 하시다가 좋은 일자리 놓쳐요!!</strong>
        </font>
      </p>
      <p align="center" style={{ margin: 0 }}>
        <br />
        <font size={5}>
          <strong>★★가족처럼 편안하게~~★★</strong>
        </font>
      </p>
      <p align="center" style={{ margin: 0 }}>
        <font size={5}>
          <strong>★★★돈은 확실하게!!★★★</strong>
        </font>
      </p>
      <p align="center" style={{ margin: 0 }}>
        <font size={5}>
          <strong>★★★★즉시 지급!!★★★★</strong>
        </font>
      </p>
    </li>
    <li>
      <p align="center" style={{ margin: 0 }}>
        <font size={5}>
        </font>
      </p>
      <p align="center" style={{ margin: 0 }}>
        <font size={5}>
          <strong>
            <br />
          </strong>
        </font>
      </p>
      <p align="center" style={{ margin: 0 }}>
        <font size={5}>
          <strong>010-5656-7796</strong>
        </font>
      </p>
      <p align="center" style={{ margin: 0 }}>
        <strong>
        </strong>
      </p>
    </li>
    <li>
      <strong />
    </li>
    <p align="center" style={{ margin: 0 }}>
      <font size={5}>
        <strong>연락주세욥!!</strong>
      </font>
    </p>
    <p align="center" style={{ margin: 0 }}>
      <strong>
        <br />
      </strong>
    </p>
    <p align="center" style={{ margin: 0 }}>
      <span style={{ fontSize: 24 }}>
        <font color="#ffe4b5">
          <strong>
          </strong>
        </font>
      </span>
    </p>
    <li>
      <p align="center" style={{ margin: 0 }} />
    </li>
    <p style={{ margin: 0, textAlign: "center", fontSize: "10pt" }}>
      <br />
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

export default Pro15Page