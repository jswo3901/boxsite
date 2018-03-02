import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './index.css'


import boxInfo from './boxInfo.jpg'
import logo1 from './BoxLogo/1.jpg'
import logo2 from './BoxLogo/2.jpg'
import logo3 from './BoxLogo/3.png'
import logo4 from './BoxLogo/4.png'
import logo5 from './BoxLogo/5.png'
import logo6 from './BoxLogo/6.png'
import logo7 from './BoxLogo/7.jpg'
import logo8 from './BoxLogo/8.jpg'
import logo9 from './BoxLogo/9.jpg'
import logo10 from './BoxLogo/10.jpg'

import logo11 from './BoxLogo/11.jpg'
import logo12 from './BoxLogo/12.jpg'
import logo13 from './BoxLogo/13.jpg'
import logo14 from './BoxLogo/14.jpg'
import logo15 from './BoxLogo/15.jpg'
import logo16 from './BoxLogo/16.jpg'
import logo17 from './BoxLogo/17.jpg'
import logo18 from './BoxLogo/18.jpg'
import logo19 from './BoxLogo/19.jpg'
import logo20 from './BoxLogo/20.png'

import logo21 from './BoxLogo/21.jpg'
import logo22 from './BoxLogo/22.jpg'
import logo23 from './BoxLogo/23.jpg'
import logo24 from './BoxLogo/24.jpg'
import logo25 from './BoxLogo/25.jpg'
import logo26 from './BoxLogo/26.jpg'
import logo27 from './BoxLogo/27.jpg'
import logo28 from './BoxLogo/28.jpg'
import logo29 from './BoxLogo/29.jpg'

import logo30 from './BoxLogo/30.jpg'
import logo31 from './BoxLogo/31.jpg'
import logo32 from './BoxLogo/32.jpg'
import logo33 from './BoxLogo/33.jpg'
import logo34 from './BoxLogo/34.jpg'
import logo35 from './BoxLogo/35.jpg'
import logo36 from './BoxLogo/36.jpg'
import logo37 from './BoxLogo/37.jpg'
import logo38 from './BoxLogo/38.png'
import logo39 from './BoxLogo/39.jpg'
import logo40 from './BoxLogo/40.jpg'
import logo41 from './BoxLogo/41.jpg'
import logo42 from './BoxLogo/42.jpg'
import logo43 from './BoxLogo/43.jpg'
import logo44 from './BoxLogo/44.jpg'
import logo45 from './BoxLogo/45.jpg'
import logo46 from './BoxLogo/46.jpg'


class BoxMainBrand extends Component {
  render() {
    return (
        <div className="box_main">
        <div className="box_1">
          <Link to="/pro1">
            <div className="img_1">
              
            <img src={logo1} alt="Smiley face" />
            </div>
          </Link>
          <div className="boxfont_1">
            파트너
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
               <Link to="/pro1">당신의 최고의 파트너</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
              [TC] 110,000원(룸)
              </p>
            </b>
          </div>
        </div>

        <div className="box_1">
          <Link to="/pro2">
            <div className="img_1">
              <img src={logo2} alt="Smiley face" />
            </div>
          </Link>
          <div className="boxfont_1">
            ▶▶쥬만지
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro2">고페이 초보환영</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [TC] 110,000원(룸)
              </p>
            </b>
          </div>
        </div>

        <div className="box_1">
          <Link to="/pro3">
            <div className="img_1">
              <img src={logo3} alt="Smiley face" />
            </div>
          </Link>
          <div className="boxfont_1">
            로즈
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro3">테이블만 11만 초보가능</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [TC] 110,000원(룸)
              </p>
            </b>
          </div>
        </div>          

        <div className="box_1">
          <Link to="/pro4">
            <div className="img_1">
              <img src={logo4} alt="Smiley face" />
            </div>
          </Link>
          <div className="boxfont_1">
            빨간반지
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro4">외모안봄/갯수폭발</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [협의]면접후결정(주점)
              </p>
            </b>
          </div>
        </div>

        <div className="box_1">
          <Link to="/pro5">
            <div className="img_1">
              <img src={logo5} alt="Smiley face" />
            </div>
          </Link>
          <div className="boxfont_1">
            역삼위트
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro5">역삼1등◆훈남실장◆</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [협의]면접후결정(룸)
              </p>
            </b>
          </div>
        </div>  

        <div className="box_1">
          <Link to="/pro6">
            <div className="img_1">
              <img src={logo6} alt="Smiley face"/>
            </div>
          </Link>
          <div className="boxfont_1">
            선릉링컨
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro6">테이블만 오세요</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [TC] 100,000원(룸)
              </p>
            </b>
          </div>
        </div>

        <div className="box_1">
          <Link to="/pro7">
            <div className="img_1">
              <img src={logo7} alt="Smiley face" />
            </div>
          </Link>
          <div className="boxfont_1">
            White
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro7">논현화이트 갯수폭발</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [TC] 110,000원(룸)
              </p>
            </b>
          </div>
        </div>

        <div className="box_1">
          <Link to="/pro8">
            <div className="img_1">
              <img src={logo8} alt="Smiley face" />
            </div>
          </Link>
          <div className="boxfont_1">
            케이크
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro8">24시 연중무휴</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [TC] 110,000원(룸)
              </p>
            </b>
          </div>
        </div>          

        <div className="box_1">
          <Link to="/pro9">
            <div className="img_1">
              <img src={logo9} alt="Smiley face" />
            </div>
          </Link>
          <div className="boxfont_1">
            퀸즈
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro9">★1시간25분★TC11</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [TC] 110,000원(룸)
              </p>
            </b>
          </div>
        </div>

        <div className="box_1">
          <Link to="/pro10">
            <div className="img_1">
              <img src={logo10} alt="Smiley face" />
            </div>
          </Link>
          <div className="boxfont_1">
            셔츠룸 펀펀
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro10">1~1시간30분 5개이상</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [협의]면접후결정(룸)
              </p>
            </b>
          </div>
        </div>           
        <div className="box_1">
          <Link to="/pro11">
            <div className="img_1">
              <img src={logo11} alt="Smiley face"/>
            </div>
          </Link>
          <div className="boxfont_1">
            디오픈
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro11">강남1번 디오픈</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [협의]면접후결정(룸)
              </p>
            </b>
          </div>
        </div>

        <div className="box_1">
          <Link to="/pro12">
            <div className="img_1">
              <img src={logo12} alt="Smiley face" />
            </div>
          </Link>
          <div className="boxfont_1">
            논현쎄븐
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro12">논현동 쎄븐입니다</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
              [TC] 100,000원(룸)
              </p>              
            </b>
          </div>
        </div>

        <div className="box_1">
          <Link to="/pro13">
            <div className="img_1">
              <img src={logo13} alt="Smiley face" />
            </div>
          </Link>
          <div className="boxfont_1">
            강남 골드
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro13">술안먹고 짧은테이블</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [TC] 100,000원(룸)
              </p>
            </b>
          </div>
        </div>          

        <div className="box_1">
          <Link to="/pro14">
            <div className="img_1">
              <img src={logo14} alt="Smiley face" />
            </div>
          </Link>
          <div className="boxfont_1">
            프로스티
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro14">프로스티 손님많아요</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [시급]110,000원(룸)
              </p>
            </b>
          </div>
        </div>

        <div className="box_1">
          <Link to="/pro15">
            <div className="img_1">
              <img src={logo15} alt="Smiley face" />
            </div>
          </Link>
          <div className="boxfont_1">
            eVEN
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro15">역삼 전통룸 이븐</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [TC] 110,000원(룸)
              </p>
            </b>
          </div>
        </div>           
        <div className="box_1">
          <Link to="/pro16">
            <div className="img_1">
              <img src={logo16} alt="Smiley face"/>
            </div>
          </Link>
          <div className="boxfont_1">
            신사 메이저
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro16">★셔츠퍼블릭★티씨11만</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [협의]면접후결정(룸)
              </p>
            </b>
          </div>
        </div>

        <div className="box_1">
          <Link to="/pro17">
            <div className="img_1">
              <img src={logo17} alt="Smiley face" />
            </div>
          </Link>
          <div className="boxfont_1">
            노래와
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro17">노래와에서 직원구해요</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [시급]35,000원(주점)
              </p>
            </b>
          </div>
        </div>

        <div className="box_1">
          <Link to="/pro18">
            <div className="img_1">
              <img src={logo18} alt="Smiley face" />
            </div>
          </Link>
          <div className="boxfont_1">
            스프링
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro18">손님 골라받는가게</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [TC] 110,000원(룸)
              </p>
            </b>
          </div>
        </div>          

        <div className="box_1">
          <Link to="/pro19">
            <div className="img_1">
              <img src={logo19} alt="Smiley face" />
            </div>
          </Link>
          <div className="boxfont_1">
          리얼텐
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro19">강남일등가게!빨리와여.</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [TC] 110,000원(룸)
              </p>
            </b>
          </div>
        </div>

        <div className="box_1">
          <Link to="/pro20">
            <div className="img_1">
              <img src={logo20} alt="Smiley face" />
            </div>
          </Link>
          <div className="boxfont_1">
          믹스
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro20">신사가라오케 믹스</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [TC] 100,000원(룸)
              </p>
            </b>
          </div>
        </div>           
        <div className="box_1">
          <Link to="/pro21">
            <div className="img_1">
              <img src={logo21} alt="Smiley face"/>
            </div>
          </Link>
          <div className="boxfont_1">
          One
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro21">tc10 빠른회전</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [TC] 100,000원(룸)
              </p>
            </b>
          </div>
        </div>

        <div className="box_1">
          <Link to="/pro22">
            <div className="img_1">
              <img src={logo22} alt="Smiley face" />
            </div>
          </Link>
          <div className="boxfont_1">
            프린세스
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro22">청담★연예인손님많아..</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [TC] 110,000원(룸)
              </p>
            </b>
          </div>
        </div>

        <div className="box_1">
          <Link to="/pro23">
            <div className="img_1">
              <img src={logo23} alt="Smiley face" />
            </div>
          </Link>
          <div className="boxfont_1">
            압구정캔디
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro23">하루최소 5개보장합니다</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [TC] 110,000원(룸)
              </p>
            </b>
          </div>
        </div>          

        <div className="box_1">
          <Link to="/pro24">
            <div className="img_1">
              <img src={logo25} alt="Smiley face" />
            </div>
          </Link>
          <div className="boxfont_1">
            Flick
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro24">★강남논현★갯수NO1★</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [시급]35,000원(주점)
              </p>
            </b>
          </div>
        </div>

        <div className="box_1">
          <Link to="/pro25">
            <div className="img_1">
              <img src={logo26} alt="Smiley face" />
            </div>
          </Link>
          <div className="boxfont_1">
            큐피트
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro25">강남구 최상위 업소</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [TC] 110,000원(룸)
              </p>
            </b>
          </div>
        </div>           
        <div className="box_1">
          <Link to="/pro26">
            <div className="img_1">
              <img src={logo27} alt="Smiley face"/>
            </div>
          </Link>
          <div className="boxfont_1">
            역삼 W
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro26">★순수테이블★11만!</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [TC] 110,000원(룸)
              </p>
            </b>
          </div>
        </div>

        <div className="box_1">
          <Link to="/pro27">
            <div className="img_1">
              <img src={logo28} alt="Smiley face" />
            </div>
          </Link>
          <div className="boxfont_1">
            유앤미
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro27">룸80/24시/대형업소</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [TC] 110,000원(룸)
              </p>
            </b>
          </div>
        </div>

        <div className="box_1">
          <Link to="/pro28">
            <div className="img_1">
              <img src={logo29} alt="Smiley face" />
            </div>
          </Link>
          <div className="boxfont_1">
            영계손님
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro28">테이블60분/tc10만</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [TC] 100,000원(룸)
              </p>
            </b>
          </div>
        </div>          

        <div className="box_1">
          <Link to="/pro29">
            <div className="img_1">
              <img src={logo30} alt="Smiley face" />
            </div>
          </Link>
          <div className="boxfont_1">
            The Nine
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro29">순수 테이블 알바</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [TC] 100,000원(룸)
              </p>
            </b>
          </div>
        </div>

        <div className="box_1">
          <Link to="/pro30">
            <div className="img_1">
              <img src={logo31} alt="Smiley face" />
            </div>
          </Link>
          <div className="boxfont_1">
            Fire
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro30">주점 직원급구</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [시급]35,000원(주점)
              </p>
              
            </b>
          </div>
        </div>           
        <div className="box_1">
          <Link to="/pro31">
            <div className="img_1">
              <img src={logo32} alt="Smiley face"/>
            </div>
          </Link>
          <div className="boxfont_1">
            스페이스
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro31">강남 셔츠룸,카페 퍼블릭</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [TC] 110,000원(룸)
              </p>
            </b>
          </div>
        </div>

        <div className="box_1">
          <Link to="/pro32">
            <div className="img_1">
              <img src={logo33} alt="Smiley face" />
            </div>
          </Link>
          <div className="boxfont_1">
            라인
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro32">역삼 최다손님보유</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [TC] 100,000원(룸)
              </p>
            </b>
          </div>
        </div>

        <div className="box_1">
          <Link to="/pro33">
            <div className="img_1">
              <img src={logo34} alt="Smiley face" />
            </div>
          </Link>
          <div className="boxfont_1">
            블랙티
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro33">안녕하세요?블랙팁니다</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [TC] 110,000원(룸)
              </p>
            </b>
          </div>
        </div>          

        <div className="box_1">
          <Link to="/pro34">
            <div className="img_1">
              <img src={logo35} alt="Smiley face" />
            </div>
          </Link>
          <div className="boxfont_1">
            핫핑크
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro34">신사역/가로수길/핫핑크</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [TC] 110,000원(룸)
              </p>
            </b>
          </div>
        </div>

        <div className="box_1">
          <Link to="/pro35">
            <div className="img_1">
              <img src={logo36} alt="Smiley face" />
            </div>
          </Link>
          <div className="boxfont_1">
            박보검실장
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro35">덕선아 빨리와..</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [TC] 110,000원(룸)
              </p>
            </b>
          </div>
        </div>    

        <div className="box_1">
          <Link to="/pro36">
            <div className="img_1">
              <img src={logo37} alt="Smiley face"/>
            </div>
          </Link>
          <div className="boxfont_1">
            BlackTea
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro36">BlackTea/하루80만</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [TC] 110,000원(룸)
              </p>
            </b>
          </div>
        </div>

        <div className="box_1">
          <Link to="/pro37">
            <div className="img_1">
              <img src={logo38} alt="Smiley face" />
            </div>
          </Link>
          <div className="boxfont_1">
            논현M
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro37">차량지원,콜비지원!!</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [TC] 110,000원(룸)
              </p>
            </b>
          </div>
        </div>

        <div className="box_1">
          <Link to="/pro38">
            <div className="img_1">
              <img src={logo39} alt="Smiley face" />
            </div>
          </Link>
          <div className="boxfont_1">
            선릉역
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro38">(수요비옆)선수손님多</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [TC] 100,000원(룸)
              </p>
            </b>
          </div>
        </div>          

        <div className="box_1">
          <Link to="/pro39">
            <div className="img_1">
              <img src={logo40} alt="Smiley face" />
            </div>
          </Link>
          <div className="boxfont_1">
            논현꽃돈
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro39">주점의 끝판왕/시간티</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [시급]40,000원(주점)
              </p>
            </b>
          </div>
        </div>

        <div className="box_1">
          <Link to="/pro40">
            <div className="img_1">
              <img src={logo41} alt="Smiley face" />
            </div>
          </Link>
          <div className="boxfont_1">
            역삼 레이저
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro40">1시간30분10만퍼블릭..</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [TC] 100,000원(룸)
              </p>
            </b>
          </div>
        </div>           
        <div className="box_1">
          <Link to="/pro41">
            <div className="img_1">
              <img src={logo42} alt="Smiley face"/>
            </div>
          </Link>
          <div className="boxfont_1">
            영천스타
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro41">서초동 영천스타~</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [TC] 100,000원(룸)
              </p>
            </b>
          </div>
        </div>

        <div className="box_1">
          <Link to="/pro42">
            <div className="img_1">
              <img src={logo43} alt="Smiley face" />
            </div>
          </Link>
          <div className="boxfont_1">
            영미
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro42">영미어딨니!!영미야!!</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [TC] 110,000원(룸)
              </p>
            </b>
          </div>
        </div>

        <div className="box_1">
          <Link to="/pro43">
            <div className="img_1">
              <img src={logo44} alt="Smiley face" />
            </div>
          </Link>
          <div className="boxfont_1">
            서초텐25
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro43">★서초!역삼!강남!룸알바</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [TC] 110,000원(룸)
              </p>
            </b>
          </div>
        </div>          

        <div className="box_1">
          <Link to="/pro44">
            <div className="img_1">
              <img src={logo45} alt="Smiley face" />
            </div>
          </Link>
          <div className="boxfont_1">
            gas통
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro44">즐기면서 가스통~</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [TC] 110,000원(룸)
              </p>
            </b>
          </div>
        </div>

        <div className="box_1">
          <Link to="/pro45">
            <div className="img_1">
              <img src={logo46} alt="Smiley face" />
            </div>
          </Link>
          <div className="boxfont_1">
            DoPen
          </div>
          <div className="boxfont_bar">
          </div>
          <div className="boxfontBottom_1">
            <b>
              <p>
              <Link to="/pro45">테이블외모걱정제발ㄴ..</Link>
              </p>
              <p style={{"color":"rgb(128, 128, 128)"}}>
                [TC] 110,000원(룸)
              </p>
            </b>
          </div>
        </div>
      </div>
    );
  }
}

export default BoxMainBrand;
