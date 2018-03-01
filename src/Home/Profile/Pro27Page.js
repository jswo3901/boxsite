import React, { Component } from 'react';
import './Pro1Page.css'
//http://divtable.com/generator/
import pro1 from './pro1.gif'
import room from './room.jpg'
import ad from './ad.jpg'
import bar from './bar.jpg'
import last_ad from './lastAdd.jpg'
import Global from '../Global'
import MainTop_ver2 from '../MainTop_ver2'

class Pro27Page extends Component {
  render() {
    return (
      <div>
        <Global />
        <MainTop_ver2 />
      <div className="allcontent">
        <div className="viewContent">
          <div className="registerInfo">2018.02.26 13:16</div>
          <div className="viewTypeFullWidth">

            <div className="companyInfo infoBox">
              <div className="recruitInfo">
                <div className="company">
                  <span className="companyName">강남역 유앤미</span>
                </div>
                <h1>룸80/24시/대형업소</h1>
                <div className="companyLogo">
                  <div className="logo">
                    <img src={pro1} alt="Smiley face"/>
                  </div>
                </div>
              </div>
              <div className="thumbnailContainer">
                <div className="viewThumbnail">
                  <div className="thumbnailImage">
                    <img src={room} alt="Smiley face"/>
                  </div>
                </div>
                <div className="viewWorkInfo">

                </div>
              </div>
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
                              없음
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
                              24시
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
                              역삼 유앤미
                            </span>
                            <span></span>
                          </td>
                        </tr>
                        <tr>
                          <th>담당자</th>
                          <td>
                            <span>
                              얼짱 태수실장
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
  <p
    align="center"
    style={{
      marginBottom: "0.26cm",
      borderTop: "medium none",
      borderRight: "medium none",
      borderBottom: "1px solid",
      paddingBottom: "0.26cm",
      paddingTop: "0cm",
      paddingLeft: "0cm",
      borderLeft: "medium none",
      paddingRight: "0cm"
    }}
  >
    <u style={{ color: "rgb(255, 0, 0)", fontSize: "xx-large" }}>
      유앤미&nbsp;
    </u>
  </p>
  <h1
    align="center"
    className="cjk"
    lang="ko-KR"
    style={{
      marginBottom: "0.26cm",
      borderTop: "medium none",
      borderRight: "medium none",
      borderBottom: "1px solid",
      fontWeight: "normal",
      paddingBottom: "0.26cm",
      paddingTop: "0cm",
      paddingLeft: "0cm",
      borderLeft: "medium none",
      marginTop: "0cm",
      paddingRight: "0cm"
    }}
  >
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <br />
      <strong>
        <font
          color="#ffffff"
          size={5}
          style={{ backgroundColor: "rgb(0,0,0)" }}
        >
          초보자대환영
        </font>
      </strong>&nbsp;
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font color="#2843c8">&nbsp;
        </font>
      </strong>
      <strong>
        <font color="#2843c8">
          <font face="arial black">
            <font size={5}>
              <u>안녕하세요</u>{" "}
              
            </font>
          </font>
        </font>
      </strong>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font size={4} style={{ fontSize: "15pt" }}>
          <span lang="ko-KR">역삼동에서 </span>
        </font>
      </strong>
      <strong>
        <font size={4} style={{ fontSize: "15pt" }}>
          <span lang="ko-KR">3년경력 20대 초보 훈남실장이에요</span>
        </font>
      </strong>
      <font face="Times New Roman, serif">
        <strong>
          <font size={4} style={{ fontSize: "15pt" }}>
            .^_^
          </font>
        </strong>
      </font>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="Times New Roman" />
      </strong>&nbsp;
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <font color="#000000">
        <font color="#ffffff">
          <font color="#ffffff">
            <font color="#ffffff">
              <font size={6}>
                <font size={7}>
                  <font size={1}>
                    <strong>&nbsp; </strong>
                    <font face="Times New Roman, serif">
                      <strong>
                        <font
                          color="#ffffff"
                          size={4}
                          style={{
                            fontSize: "15pt",
                            backgroundColor: "rgb(0,176,240)"
                          }}
                        >
                          010-5279-3901
                        </font>
                      </strong>
                    </font>
                  </font>
                </font>
              </font>
            </font>
          </font>
        </font>
      </font>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <font color="#000000">
        <font color="#ffffff">
          <strong>&nbsp;</strong>
          <font style={{ backgroundColor: "rgb(255,255,0)" }}>
            <font face="Times New Roman, serif">
              <strong>
                <font
                  color="#000000"
                  size={4}
                  style={{ fontSize: "15pt", backgroundColor: "rgb(255,0,0)" }}
                >
                  010-5279-3901
                </font>
              </strong>
            </font>
          </font>
        </font>
      </font>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        &nbsp;<font style={{ backgroundColor: "rgb(255,255,0)" }}>
          <font face="Times New Roman, serif">
            <font
              color="#ffff00"
              size={4}
              style={{ fontSize: "15pt", backgroundColor: "rgb(0,0,0)" }}
            >
              010-5279-3901
            </font>
          </font>
        </font>
      </strong>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font size={3}>카톡아이디:</font>
        <font face="Times New Roman">
          <font color="#c9279f" size={4}>
            {" "}
          </font>
          <font color="#ff0000" size={5}>
            <u>
              카톡아이디
            </u>
          </font>
        </font>
      </strong>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      &nbsp;
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="arial black">
          <font size={4}>
            <span lang="ko-KR">역삼동 유앤미 </span>
          </font>
        </font>
      </strong>
      <strong>
        <font face="arial black">
          <font size={4}>퍼블릭 룸 입니다</font>
        </font>
      </strong>
      <font face="Times New Roman, serif">
        <strong>
          <font face="arial black">
            <font size={4}>.</font>
          </font>
        </strong>
      </font>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="arial black">
          <font size={4}>저희 </font>
        </font>
      </strong>
      <strong>
        <font face="arial black">
          <font size={4}>
            <span lang="ko-KR">위트</span>
          </font>
        </font>
      </strong>
      <strong>
        <font face="arial black">
          <font size={4}>업소는 강남에서도&nbsp;손꼽히는 </font>
        </font>
      </strong>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="arial black">
          <font size={4}>메이저 </font>
        </font>
      </strong>
      <strong>
        <font face="arial black">
          <font size={4}>룸이에요 ㅎㅎ</font>
        </font>
      </strong>
      <font face="Times New Roman, serif">
        <strong>
          <font face="arial black">
            <font size={4}>.</font>
          </font>
        </strong>
      </font>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="arial black">
          <font size={4}>손님테이블&nbsp;</font>
        </font>
      </strong>
      <strong>
        <font face="arial black">
          <font size={4}>저녁</font>
        </font>
      </strong>
      <font face="Times New Roman, serif">
        <strong>
          <font face="arial black">
            <font size={4}>9</font>
          </font>
        </strong>
      </font>
      <strong>
        <font face="arial black">
          <font size={4}>시만되면 룸7</font>
        </font>
      </strong>
      <font face="Times New Roman, serif">
        <strong>
          <font face="arial black">
            <font size={4}>5</font>
          </font>
        </strong>
      </font>
      <strong>
        <font face="arial black">
          <font size={4}>개가 가득찹니다</font>
        </font>
      </strong>
      <font face="Times New Roman, serif">
        <strong>
          <font face="arial black">
            <font size={4}>
            </font>
          </font>
        </strong>
      </font>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="arial black">
          <font size={4}>강남에서 제일 장사 잘되는 가게에요(아마 들어보신분들 있으시죠??)</font>
        </font>
      </strong>
      <font face="Times New Roman, serif">
        <strong>
          <font face="arial black">
            <font size={4}>.</font>
          </font>
        </strong>
      </font>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="arial black">
          <font size={4}>초이스또한 그렇게 심하지도 않으며</font>
        </font>
      </strong>
      <font face="Times New Roman, serif">
        <strong>
          <font face="arial black">
            <font size={4}>, </font>
          </font>
        </strong>
      </font>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="arial black">
          <font size={4}>손님이 많아서 바쁜시간에는 초이스 없이 손님이 </font>
        </font>
      </strong>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="arial black">
          <font size={4}>아가씨들 </font>
        </font>
      </strong>
      <strong>
        <font face="arial black">
          <font size={4}>복귀할때까지</font>
        </font>
      </strong>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="arial black">
          <font size={4}>&nbsp;기다리는 상황이에요ㅠㅠ(얼른와줘잉!!)</font>
        </font>
      </strong>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="arial black">
          <font size={4}> 돈 많이 벌 수 있으니 연락주세요.</font>
        </font>
      </strong>&nbsp;&nbsp;
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <font size={4}>
        <strong>
          <font face="Arial Black">
            가끔 이쁜 누나들 많지 않냐고 묻는경우가 많은데
          </font>
        </strong>
      </font>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <font size={4}>
        <strong>
          <font face="Arial Black">묻는 언니들 아~</font>
        </strong>
        <font face="Times New Roman, serif">
          <strong>
            <font face="Arial Black">
              <font style={{ fontSize: "13pt" }}>~</font>
            </font>
          </strong>
        </font>
        <strong>
          <font face="Arial Black">
            <font style={{ fontSize: "13pt" }}>
              잘왔다 이런 소리 많이 합니다.
            </font>
          </font>
        </strong>
      </font>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="Arial Black" size={4}>
          적응하기도 쉽고 돈벌기도 쉽고 돈벌이도 되고{" "}
        </font>
      </strong>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="Arial Black" size={4}>
          하니까 와서{" "}
        </font>
      </strong>
      <strong>
        <font face="Arial Black" size={4}>
          정착하는 누나들
        </font>
      </strong>
    </p>
    <p align="center" style={{ margin: 0, lineHeight: 1 }}>
      <font size={4}>
        <strong>
          <font face="Arial Black">엄청 많습니다</font>
        </strong>
        <font face="Times New Roman, serif">
          <strong>
            <font face="Arial Black">
              <font style={{ fontSize: "13pt" }}>.</font>
            </font>
          </strong>
        </font>
      </font>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <font size={4}>
        <strong>
          <font face="Arial Black">주저마시고 한번 와보세요</font>
        </strong>
        <font face="Times New Roman, serif">
          <strong>
            <font face="Arial Black">
              <font style={{ fontSize: "13pt" }}>...</font>
            </font>
          </strong>
        </font>
        <strong>
          <font face="Arial Black">
            <font style={{ fontSize: "13pt" }}>절대 후회 안합니다</font>
          </font>
        </strong>
        <font face="Times New Roman, serif">
          <strong>
            <font face="Arial Black">
              <font style={{ fontSize: "13pt" }}>!!!^_^</font>
            </font>
          </strong>
        </font>
      </font>
      <font face="Times New Roman, serif">
        <strong>
          <font face="Arial Black">
            <font style={{ fontSize: "13pt" }}>
              <br />
            </font>
          </font>
        </strong>
      </font>
      <font size={4}>
        <font face="Times New Roman, serif">
          <strong>
            <font face="Arial Black">
              일단 일주일간 오셔서 직접일을해보시고 직접 판단하시고
            </font>
          </strong>
        </font>
      </font>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <font face="Times New Roman, serif">
        <strong>
          <font
            color="#ff0000"
            face="Arial Black"
            size={4}
            style={{ backgroundColor: "rgb(0,0,0)" }}
          >
            선택하세요!!
          </font>
        </strong>
      </font>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font
          color="#ff0000"
          face="Arial Black"
          size={4}
          style={{ backgroundColor: "#000000" }}
        />
      </strong>
      <br />
      <strong>
        <font face="Arial Black">
          <font
            color="#ff0000"
            size={4}
            style={{ backgroundColor: "rgb(0,0,0)" }}
          >
            그만큼 자신있습니다
          </font>
          <font style={{ fontSize: "13pt" }}>
            !!
          </font>
        </font>
      </strong>
    </p>
    <p align="center" style={{ margin: 0, lineHeight: 1 }}>
      &nbsp;
    </p>
    <p align="center" style={{ margin: 0, lineHeight: 1 }}>
      &nbsp;
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font color="#2843c8">
          <font face="arial black">
            <font size={5}>
              <font color="#ffffff">
                <font style={{ backgroundColor: "rgb(0,0,0)" }}>
                  <font style={{ backgroundColor: "rgb(31,73,125)" }}>
                    <font style={{ backgroundColor: "rgb(247,150,70)" }}>
                      <font style={{ backgroundColor: "rgb(0,176,80)" }}>
                        <font style={{ backgroundColor: "rgb(127,127,127)" }}>
                          자<font color="#ff0000">격</font>
                          <font color="#00b050">조</font>
                          <font color="#e36c09">건</font>
                        </font>
                      </font>
                    </font>
                  </font>
                </font>&nbsp;
              </font>
            </font>
          </font>
        </font>
      </strong>
      <strong>
        <font color="#2843c8" face="Arial Black" size={5}>
          <br />
        </font>
      </strong>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <span style={{ color: "#ffffff", backgroundColor: "#ff0000" }}>﻿</span>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>&nbsp;</strong>
      <font face="Times New Roman, serif">
        <strong>
          <font face="arial black">
            <font size={4}>20</font>
          </font>
        </strong>
      </font>
      <strong>
        <font face="arial black">
          <font size={4}>세</font>
        </font>
      </strong>
      <font face="Times New Roman, serif">
        <strong>
          <font face="arial black">
            <font size={4}>~ 30</font>
          </font>
        </strong>
      </font>
      <strong>
        <font face="arial black">
          <font size={4}>대 대환영</font>
        </font>
      </strong>
      <font face="Times New Roman, serif">
        <strong>
          <font face="arial black">
            <font size={4}>!!미성년자만 아니면 되</font>
          </font>
        </strong>
      </font>
      <strong>
        <font face="arial black">
          <font size={4}>요</font>
        </font>
      </strong>
      <font face="Times New Roman, serif">
        <strong>
          <font face="arial black">
            <font size={4}>^_^)</font>
          </font>
        </strong>
      </font>&nbsp;
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="arial black">
          <font size={4}>초보분들 상관없습니다</font>
        </font>
      </strong>
      <font face="Times New Roman, serif">
        <strong>
          <font face="arial black">
            <font size={4}>. </font>
          </font>
        </strong>
      </font>
      <strong>
        <font face="arial black">
          <font size={4}>첫세팅부터 그후 까지 모든걸 다</font>
        </font>
      </strong>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="arial black">
          <font size={4}>&nbsp;알려드릴게요</font>
        </font>
      </strong>
      <font face="Times New Roman, serif">
        <strong>
          <font face="arial black">
            <font size={4}>.</font>
          </font>
        </strong>
      </font>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <font color="#ff0000">
        <strong>
          <font face="arial black">
            <font size={4}>대학생</font>
          </font>
        </strong>
        <font face="Times New Roman, serif">
          <strong>
            <font face="arial black">
              <font size={4}>,</font>
            </font>
          </strong>
        </font>
        <strong>
          <font face="arial black">
            <font size={4}>직장인</font>
          </font>
        </strong>
        <font face="Times New Roman, serif">
          <strong>
            <font face="arial black">
              <font size={4}>,</font>
            </font>
          </strong>
        </font>
      </font>
      <strong>
        <font face="arial black">
          <font size={4}>
            <font color="#ff0000">투잡하시는분들도 </font>다 가능합니다
          </font>
        </font>
      </strong>
      <font face="Times New Roman, serif">
        <strong>
          <font face="arial black">
            <font size={4}>.</font>
          </font>
        </strong>
      </font>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <font color="#ff0000">
        <strong>
          <font face="arial black">
            <font size={4}>주말알바</font>
          </font>
        </strong>
        <font face="Times New Roman, serif">
          <strong>
            <font face="arial black">
              <font size={4}>, </font>
            </font>
          </strong>
        </font>
      </font>
      <strong>
        <font face="arial black">
          <font size={4}>
            <font color="#ff0000">불규칙알바 단기알바 상관없이 </font>다
            가능합니다
          </font>
        </font>
      </strong>
      <font face="Times New Roman, serif">
        <strong>
          <font face="arial black">
            <font size={4}>.</font>
          </font>
        </strong>
      </font>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <font face="Times New Roman, serif">
        <strong>
          <font face="arial black">
            <font size={4}>
              <span style={{ color: "#f5f4e0", backgroundColor: "#ff0000" }}>
                (
              </span>
            </font>
          </font>
        </strong>
      </font>
      <strong>
        <font face="arial black">
          <font size={4}>
            <span style={{ color: "#f5f4e0", backgroundColor: "#ff0000" }}>
              출근압박없음
            </span>
          </font>
        </font>
      </strong>
      <font face="Times New Roman, serif">
        <strong>
          <font face="arial black">
            <font size={4}>
              <span style={{ backgroundColor: "#777777" }}>
                <span style={{ color: "#f5f4e0", backgroundColor: "#ff0000" }}>
                  )
                </span>
                <span style={{ color: "#000000", backgroundColor: "#777777" }}>

                </span>
              </span>
            </font>
          </font>
        </strong>
      </font>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="Arial Black" size={4} />
      </strong>
      <span style={{ color: "#000000" }}>&nbsp;</span>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font color="#2843c8">
        </font>
      </strong>
      <strong>
        <font color="#2843c8">&nbsp;</font>
      </strong>
      <strong>
        <font color="#2843c8">
          <font face="arial black">
            <font size={5}>
              <font style={{ backgroundColor: "rgb(255,255,0)" }}>
                일<font color="#262626">하</font>
                <font color="#ff0000">는</font> <font color="#002060">환</font>
                <font color="#7f7f7f">경</font>
              </font>{" "}
            </font>
          </font>
        </font>
      </strong>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font color="#2843c8" face="Arial Black" />
      </strong>&nbsp;
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="arial black">
          <font size={4}>초객보다는 부장들</font>
        </font>
        <font face="Times New Roman, serif">
          <font face="arial black">
            <font size={4}>(70</font>
          </font>
        </font>
        <font face="arial black">
          <font size={4}>여명</font>
        </font>
        <font face="Times New Roman, serif">
          <font face="arial black">
            <font size={4}>)</font>
          </font>
        </font>
      </strong>
      <font face="arial black">
        <font size={4}>
          <strong>과 </strong>
          <strong>단골 </strong>
          <font face="arial black">
            <font size={4}>
              <strong>손님이 많아서</strong>
            </font>
            <strong />
          </font>
          <strong />{" "}
        </font>
      </font>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="Arial Black">
          <font size={4}>이름있는 룸이다보니 손님층이</font>
        </font>
      </strong>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="Arial Black">
          <font size={4}>&nbsp;정말 깔끔하십니다</font>
        </font>
      </strong>
      <font face="Times New Roman, serif">
        <strong>
          <font face="Arial Black">
            <font size={4}>.</font>
          </font>
        </strong>
      </font>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="arial black">
          <font size={4}>정말 편하게 일할수 있게 해드리겠습니다</font>
        </font>
      </strong>
      <font face="Times New Roman, serif">
        <strong>
          <font face="arial black">
            <font size={4}>.</font>
          </font>
        </strong>
      </font>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        paddingRight: "0cm"
      }}
    >
      &nbsp;
    </p>
    <p align="center" style={{ margin: 0, lineHeight: 1 }}>
      <font face="Times New Roman, serif">
        <font size={2} style={{ fontSize: "10pt" }}>
          <br />
        </font>
        <strong>
          <font color="#2843c8">
          </font>
        </strong>
      </font>
      <strong>
        <font color="#2843c8">
          <font face="arial black">
            <font size={5}>
              <font style={{ backgroundColor: "rgb(112,48,160)" }}>
                <font color="#ffffff">의</font>{" "}
                <font style={{ backgroundColor: "rgb(255,0,0)" }}>상</font>
              </font>{" "}
            </font>
          </font>
        </font>
      </strong>
      <strong>
        <font color="#2843c8">
          <font face="arial black">
            <font size={5}>
            </font>
          </font>
        </font>
      </strong>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        paddingRight: "0cm"
      }}
    >
      &nbsp;
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="arial black">
          <font size={4}>
            <span lang="ko-KR">복장은 스타일에 맞게 원피스든 투피스든</span>
          </font>
        </font>
      </strong>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="arial black">
          <font size={4}>개성을 살려 깔끔하고 이쁘신 옷만 입으시면 됩니다</font>
        </font>
      </strong>
      <font face="Times New Roman, serif">
        <strong>
          <font face="arial black">
            <font size={4}>.</font>
          </font>
        </strong>
      </font>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="arial black">
          <font size={4}>
            자기 스타일에 잘 맞게 입으시면{" "}
            <img
              name="그림13"
              width={22}
              height={18}
              align="bottom"
              alt
              src="http://www.catalba.com/Editor/img/emotions/45.gif"
              border={0}
            />
          </font>
        </font>
      </strong>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="arial black">
          <font size={4}>
            초이스가 더 잘된다는건 비밀<img
              name="그림14"
              width={19}
              height={19}
              align="bottom"
              alt
              src="http://www.cocoalba.kr/wys2/editor/images/smiley/msn/wink_smile.gif"
              border={0}
            />
          </font>
        </font>
      </strong>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        paddingRight: "0cm"
      }}
    >
      &nbsp;
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font color="#2843c8">
        </font>
      </strong>
      <strong>
        <font color="#2843c8">&nbsp;</font>
      </strong>
      <strong>
        <font color="#2843c8">
          <font face="arial black">
            <font size={5}>
              <font style={{ backgroundColor: "rgb(0,112,192)" }}>
                <font color="#ffffff">시</font> <font color="#ff0000">간</font>
              </font>{" "}
            </font>
          </font>
        </font>
      </strong>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      &nbsp;
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="arial black">
          <font size={4}>저녁6</font>
        </font>
      </strong>
      <strong>
        <font face="arial black">
          <font size={4}>시 이후부터 마음대로 나오십시요 </font>
        </font>
      </strong>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="arial black">
          <font size={4}>오고싶을때오고 가고 싶을때 가십시요</font>
        </font>
      </strong>&nbsp;
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="arial black">
          <font size={4}>어차피 돈욕심있으면 가라고 해도 안가시게 됩니다.</font>
        </font>
      </strong>&nbsp;
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="arial black">
          <font size={4}>
            혹 속쓰리거나 약속있거나 술이많이 취하면 무조건 퇴근시켜드립니다
          </font>
        </font>
      </strong>
      <font face="Times New Roman, serif">
        <strong>
          <font face="arial black">
            <font size={4}>.</font>
          </font>
        </strong>
      </font>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="arial black">
          <font size={4}>출근압박 퇴근지연 절대 없습니다</font>
        </font>
      </strong>
      <font face="Times New Roman, serif">
        <strong>
          <font face="arial black">
            <font size={4}>!</font>
          </font>
        </strong>
      </font>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        paddingRight: "0cm"
      }}
    >
      &nbsp;
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font color="#e90419">
        </font>
      </strong>
      <strong>
        <font color="#e90419">
          <font face="arial black">
            <font size={6}>
              <font style={{ backgroundColor: "rgb(0,0,0)" }}>
                페<font color="#00b0f0"> 이</font>
              </font>
            </font>
          </font>
        </font>
      </strong>
      <strong>
        <font face="arial black">
          <font size={4}>&nbsp;</font>
        </font>
      </strong>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        paddingRight: "0cm"
      }}
    >
      &nbsp;
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="arial black">
          <font size={4} style={{ backgroundColor: "rgb(255,255,0)" }}>
            %<font color="#ff0000">출근비</font>없습니다%
          </font>
        </font>
      </strong>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font
          face="Arial Black"
          size={4}
          style={{ backgroundColor: "rgb(255,255,0)" }}
        >
          %<font color="#ff0000" style={{ backgroundColor: "rgb(255,255,0)" }}>
            봉사료지급대장
          </font>절대신경쓰지마세요%
        </font>
      </strong>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="arial black">
          <font size={4} style={{ backgroundColor: "rgb(255,255,0)" }}>
            <font color="#ff0000">페이는 당일 </font>원하하는데로 바로바로{" "}
          </font>
        </font>
      </strong>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="arial black">
          <font size={4}>
            <font style={{ backgroundColor: "rgb(255,255,0)" }}>
              <font color="#ff0000">현금or통장결제</font>나갑니다
            </font>
          </font>
        </font>
      </strong>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="arial black">
          <font size={4}>제일 중요한 부분이죠</font>
        </font>
      </strong>
      <font face="Times New Roman, serif">
        <strong>
          <font face="arial black">
            <font size={4}>!!</font>
          </font>
        </strong>
      </font>&nbsp;
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="arial black">
          <font size={4}>외모랑 일하시는거에 따라 차이 나겠지만</font>
        </font>
      </strong>
      <font face="Times New Roman, serif">
        <strong>
          <font face="arial black">
            <font size={4}>,</font>
          </font>
        </strong>
      </font>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      &nbsp;
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <font style={{ backgroundColor: "rgb(255,255,0)" }}>
        <strong>
          <font face="arial black">
            <font size={4}>온니</font>
          </font>
        </strong>
        <font face="Times New Roman, serif">
          <strong>
            <font face="arial black">
              <font size={4}>!</font>
            </font>
          </strong>
        </font>
        <strong>
          <font face="arial black">
            <font size={4}>네버</font>
          </font>
        </strong>
        <font face="Times New Roman, serif">
          <strong>
            <font face="arial black">
              <font size={4}>! </font>
            </font>
          </strong>
        </font>
        <font color="#00b0f0">
          <font color="#0070c0">
            <strong>
              <font face="arial black">
                <font size={4}>당일결재 </font>
              </font>
            </strong>
            <font face="Times New Roman, serif">
              <strong>
                <font face="arial black">
                  <font size={4}>100%</font>
                </font>
              </strong>
            </font>
          </font>
        </font>
        <strong>
          <font face="arial black">
            <font size={4}>입니다</font>
          </font>
        </strong>
        <font face="Times New Roman, serif">
          <strong>
            <font face="arial black">
              <font size={4}>.</font>
            </font>
          </strong>
        </font>
      </font>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      &nbsp;
    </p>
    <p align="center" style={{ margin: 0, lineHeight: 1 }}>
      &nbsp;
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <font face="Times New Roman, serif">
        <font size={2} style={{ fontSize: "10pt" }}>
          <font color="#ffff00" />
          <br />
        </font>
        <strong>
          <font color="#973101">
            <font size={2} style={{ fontSize: "10pt" }}>
              &nbsp;
            </font>
          </font>
        </strong>
      </font>
      <strong>
        <font color="#973101">
          <font face="arial black">
            <font
              color="#ffff00"
              size={5}
              style={{ backgroundColor: "rgb(255,0,0)" }}
            >
              절대주의사항
            </font>
          </font>
        </font>
      </strong>
      <font face="Times New Roman, serif">
        <strong>
          <font color="#973101">
            <font face="arial black">
              <font size={5}>
                !!!
              </font>
            </font>
          </font>
        </strong>
      </font>
      <br />&nbsp;
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="arial black">
          <font size={4}>과장광고가 난무하고 있으니</font>
        </font>
      </strong>
      <font face="Times New Roman, serif">
        <strong>
          <font face="arial black">
            <font size={4}>, </font>
          </font>
        </strong>
      </font>
      <strong>
        <font face="arial black">
          <font size={4}>
            어떤가게인지 시스템은 정확한지 꼼꼼이 확인하시고 면접보시기 바랍니다
          </font>
        </font>
      </strong>
      <font face="Times New Roman, serif">
        <strong>
          <font face="arial black">
            <font size={4}>
              .<br />
            </font>
          </font>
        </strong>
      </font>
      <strong>
        <font face="arial black">
          <font size={4}>잘못 가셔서 아</font>
        </font>
      </strong>
      <font face="Times New Roman, serif">
        <strong>
          <font face="arial black">
            <font size={4}>~ 역삼동에서</font>
          </font>
        </strong>
      </font>
      <strong>
        <font face="arial black">
          <font size={4}> 두번다신 일안한다 하면 저희도 곤란하거든요</font>
        </font>
      </strong>
      <font face="Times New Roman, serif">
        <strong>
          <font face="arial black">
            <font size={4}>.</font>
          </font>
        </strong>
      </font>
      <strong>
        <font face="arial black">
          <font size={4}>ㅠㅠ</font>
        </font>
      </strong>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="arial black">
          <font size={4}>언니들 과장광고에 절대 낚이지 맙시다</font>
        </font>
      </strong>
      <font face="Times New Roman, serif">
        <strong>
          <font face="arial black">
            <font size={4}>!!</font>
          </font>
        </strong>
      </font>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="arial black">
          <font size={4}>이쁘면 특히 더욱 환영하겠습니다</font>
        </font>
      </strong>
      <font face="Times New Roman, serif">
        <strong>
          <font face="arial black">
            <font size={4}>.</font>
          </font>
        </strong>
      </font>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="Arial Black">
          <font
            color="#ffff00"
            size={4}
            style={{ backgroundColor: "rgb(0,0,0)" }}
          >
            확실히 밀어드리겠습니다
          </font>
        </font>
      </strong>
      <font face="Times New Roman, serif">
        <strong>
          <font face="Arial Black">
            <font size={4}>!!!</font>
          </font>
        </strong>
      </font>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <font style={{ backgroundColor: "rgb(255,255,0)" }}>
        <strong>
          <font face="arial black">
            <font size={4}>
              결제 무조건<font
                color="#ffffff"
                style={{ backgroundColor: "rgb(255,0,0)" }}
              >
                {" "}
                당일 결제
              </font>입니다
            </font>
          </font>
        </strong>
        <font face="Times New Roman, serif">
          <strong>
            <font face="arial black">
              <font size={4}>.!!!</font>
            </font>
          </strong>
        </font>
      </font>&nbsp;
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="Arial Black" size={4}>
          그리고 업소는 지역이 다른곳도 있으니&nbsp;
        </font>
      </strong>&nbsp;
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="Arial Black" size={4}>
          상담후 선택하셔도 됩니다^^
        </font>
      </strong>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
      </strong>&nbsp;
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="arial black">
          <font size={4}>더이상 길게 말하지 않겠습니다</font>
        </font>
      </strong>
      <font face="Times New Roman, serif">
        <strong>
          <font face="arial black">
            <font size={4}>.</font>
          </font>
        </strong>
      </font>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="arial black">
          <font size={4}>
            백마디의 글보다 한번의 통화가 더 이해하시기 편하실겁니다
          </font>
        </font>
      </strong>
      <font face="Times New Roman, serif">
        <strong>
          <font face="arial black">
            <font size={4}>.</font>
          </font>
        </strong>
      </font>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="arial black">
          <font size={4}>전화비가 부담되시면 제가 걸겠습니다</font>
        </font>
      </strong>
      <font face="Times New Roman, serif">
        <strong>
          <font face="arial black">
            <font size={4}>.</font>
          </font>
        </strong>
      </font>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="arial black">
          <font size={4}>문자주셔도 제가 걸겠습니다</font>
        </font>
      </strong>
      <font face="Times New Roman, serif">
        <strong>
          <font face="arial black">
            <font size={4}>.</font>
          </font>
        </strong>
      </font>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="arial black">
          <font size={4}>발신표시 없이하셔도 좋습니다</font>
        </font>
      </strong>
      <font face="Times New Roman, serif">
        <strong>
          <font face="arial black">
            <font size={4}>.</font>
          </font>
        </strong>
      </font>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font face="arial black">
          <font size={4}>
            일단 전화상담하시면 탁월한 선택이었다라는 생각하실겁니다
          </font>
        </font>
      </strong>
      <font face="Times New Roman, serif">
        <strong>
          <font face="arial black">
            <font size={4}>.</font>
          </font>
        </strong>
      </font>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <font style={{ backgroundColor: "rgb(255,255,0)" }}>
        <strong>
          <font face="arial black">
            <font size={4}>주저하지 마시고 바로 연락주세요</font>
          </font>
        </strong>
        <font face="Times New Roman, serif">
          <strong>
            <font face="arial black">
              <font size={4}>^.^γ</font>
            </font>
          </strong>
        </font>
      </font>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font
          face="Arial Black"
          size={4}
          style={{ backgroundColor: "rgb(255,255,0)" }}
        />
      </strong>&nbsp;
    </p>
    <p align="center" style={{ margin: 0, lineHeight: 1 }}>
      <font style={{ backgroundColor: "rgb(255,255,255)" }}>
        <br />
      </font>
    </p>
    <font style={{ backgroundColor: "rgb(255,255,255)" }} />
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <font style={{ backgroundColor: "rgb(255,255,255)" }}>
      </font>
      <font color="#2843c8">
        <font size={5}>
          <span lang="ko-KR">
            <font style={{ backgroundColor: "rgb(255,255,255)" }}>
            </font>
          </span>
        </font>
        <font face="Times New Roman, serif">
          <font size={5}>
            <strong>
              <font style={{ backgroundColor: "rgb(192,0,0)" }}>
                010-5279-3901
              </font>
            </strong>
          </font>
        </font>
      </font>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font color="#2843c8">
          <font face="Times New Roman, serif">
            <font size={5}>
              <font
                color="#ff0000"
                style={{ backgroundColor: "rgb(0,176,80)" }}
              >
                010-5279-3901
              </font>
            </font>
          </font>
        </font>
      </strong>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font color="#2843c8">
          <font face="Times New Roman, serif">
            <font size={5}>
              <font
                color="#00b0f0"
                style={{ backgroundColor: "rgb(112,48,160)" }}
              >
                010-5279-3901
              </font>
            </font>
          </font>
        </font>
      </strong>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font size={5} style={{ backgroundColor: "rgb(255,192,0)" }}>
          초보자대환영
        </font>
      </strong>
    </p>
    <p
      align="center"
      style={{
        marginBottom: "0.26cm",
        borderTop: "medium none",
        borderRight: "medium none",
        borderBottom: "1px solid",
        paddingBottom: "0.26cm",
        paddingTop: "0cm",
        paddingLeft: "0cm",
        borderLeft: "medium none",
        lineHeight: 1,
        paddingRight: "0cm"
      }}
    >
      <strong>
        <font color="#2843c8">
        </font>
        <font color="#c9279f">
          <span style={{ background: "rgb(255,255,255)" }}>
            <font size={5}>카톡아이디</font>
          </span>
        </font>
      </strong>
      <font face="Times New Roman, serif">
        <font color="#c9279f">
          <font size={5}>
            <span style={{ background: "rgb(255,255,255)" }}>
              <strong>:</strong>
              <strong>
                <font size={4}> </font>
                <font size={5}>카톡아이디</font>
              </strong>
            </span>
          </font>
        </font>
      </font>
    </p>
  </h1>
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

export default Pro27Page