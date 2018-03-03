import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './index.css'
import fastIcon from './fast.gif'
import newIcon from './new.gif'

class TextMain extends Component {
    render() {
        return (
            <div className="text_main">
            
            <div>
            
            <h4> &nbsp;</h4>
              <h3 className="textInfo">
              
                ◎일반 채용정보
              </h3>
            </div>
                <div className="text-left-main">
                    <div className="text-left-loca">
                        강남구 역삼동
                    </div>
                    <div className="text-left-content">
                        <Link to="/pro1" style={{"backgroundColor":"#D3F9FF"}}>20살이상누구나 가능*역삼동*</Link>
                    </div>
                    {/* <div className="text-clear">
                    </div> */}
                    <div className="text-left-loca">
                        강남구 역삼동
                    </div>
                    <div className="text-left-content">
                      <Link to="/pro2">♥강남여우환영♥2030대모집♥</Link>
                    </div> 
                    <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                      <Link to="/pro3">술안먹고 갯수폭발</Link>
                    </div> 

                    <div className="text-left-loca">
                        강남구 논현동
                    </div>
                    <div className="text-left-content">
                      <Link to="/pro4" style={{"backgroundColor":"rgb(162, 204, 211)"}}>>┏◆꿀알바◆착한실장◆쓰리땅가즈아◆┓</Link>
                    </div> 
                    <div className="text-left-loca">
                        강남구 역삼동
                    </div>
                    <div className="text-left-content">
                      <Link to="/pro5">동종업계NO1■♡■당일페이■♡■</Link>
                    </div> 
                    <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                      <Link to="/pro6" style={{"color":"red"}}>[강남역] 최고의대우 1등업소 링컨..</Link>
                    </div>
                     <div className="text-left-loca">
                        강남구 논현동
                    </div>
                    <div className="text-left-content">
                      <Link to="/pro7">강남1등!!♥자유로운 출퇴근♥ 술NO♥.</Link>
                    </div>
                    <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                      <Link to="/pro8" style={{"backgroundColor":"yellow"}}>▶야간매니저 급구◀업계최고대우●가족같은분.. </Link>
                    </div>
                    <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                      <Link to="/pro9">술 안먹고 돈 많이 벌수 있는곳~!!</Link>
                    </div>
                    <div className="text-left-loca">
                        강남구 역삼동
                    </div>
                    <div className="text-left-content">
                      <Link to="/pro10" style={{"backgroundColor":"rgb(236, 156, 232)"}}>♥셔츠룸♥1시간11만원♥1등상무</Link>
                    </div>
                     <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                      <Link to="/pro11">텐프로쩜오</Link>
                    </div> <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                    <Link to="/pro11"><a style={{"backgroundColor":"#D3F9FF"}}>■1순위 안전 ■2순위 갯수 </a></Link>
                    </div>
                     <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                    <Link to="/pro12">3분만 시간주세요(최고대우)</Link>
                    </div> 
                    <div className="text-left-loca">
                        강남구 역삼동
                    </div>
                    <div className="text-left-content">
                      <Link to="/pro13" style={{"backgroundColor":"rgb(229, 241, 57)"}}>퍼블릭★쎄미★클럽 </Link>
                    </div> 
                    <div className="text-left-loca">
                        강남구 역삼동
                    </div>
                    <div className="text-left-content">
                    <Link to="/pro14">◈매일 따당 가능◈ 1시간 11만원 지급...</Link>
                    </div>
                    <div className="text-left-loca">
                        강남구 역삼동
                    </div>
                    <div className="text-left-content">
                    <Link to="/pro15">역삼동 초이스xxxxxx</Link>
                    </div>
                    <div className="text-left-loca">
                        강남구 신사동
                    </div>
                    <div className="text-left-content">
                      <Link to="/pro16" style={{"backgroundColor":"rgb(229, 241, 57)"}}>메이저 신사동 최고의클럽</Link>
                    </div> 
                    <div className="text-left-loca">
                        강남구 대치동
                    </div>
                    <div className="text-left-content">
                      <Link to="/pro17">선릉 최고TC 책임 보장</Link>
                    </div> 
                    <div className="text-left-loca">
                        강남구 역삼동
                    </div>
                    <div className="text-left-content">
                      <Link to="/pro18">★확실한케어★당일지급★테이블★알바...</Link>
                    </div> 
                    <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                      <Link to="/pro19">20대♥갯수보장♥일 열라많음♥착한실장</Link>
                    </div> 
                    <div className="text-left-loca">
                        강남구 신사동
                    </div>
                    <div className="text-left-content">
                      <Link to="/pro20" style={{"color":"rgb(129, 196, 223)"}}>●하루8~9개 이상●일 욕심 많은 알바...</Link>
                    </div> 
                    <div className="text-left-loca">
                        강남구 역삼동
                    </div>
                    <div className="text-left-content">
                      <Link to="/pro21">＃비밀이 제일 우선아닌가요?＃</Link>
                    </div> 

                </div>

                <div className="text-left-main">
                    <div className="text-left-loca">
                        강남구 압구정
                    </div>
                    <div className="text-left-content">
                        <Link to="/pro23" style={{"backgroundColor":"rgb(129, 196, 223)"}}>하루최소 5개보장합니다</Link>
                    </div>
                    <div className="text-clear">
                    </div>
                    <div className="text-left-loca">
                        강남구 논현동
                    </div>
                    <div className="text-left-content">
                      <Link to="/pro24">이쁜누나들만..못생기면 보지마..미안</Link>
                    </div> 
                    <div className="text-left-loca">
                        강남구 역삼동
                    </div>
                    <div className="text-left-content">
                      <Link to="/pro25">당신이 원하는 모든것! 강남 여기어때!</Link>
                    </div>
                    <div className="text-left-loca">
                        강남구 역삼동
                    </div>
                    <div className="text-left-content">
                      <Link to="/pro26">역삼동 삼성동 정통룸 탈의 NO</Link>
                    </div>
                    <div className="text-left-loca">
                        강남구 역삼동
                    </div>
                    <div className="text-left-content">
                      <Link to="/pro27" style={{"color":"blue"}}>↖↖술x진상x텃새x↗↗고페이보장↗↗</Link>
                    </div>
                    <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                      <Link to="/pro28"><a>♥강남셔츠룸 1시간당 TC12만원♥순수테이블 가능.</a></Link>
                    </div>
                    <div className="text-left-loca">
                        강남구 논현동
                    </div>
                    <div className="text-left-content">
                      <Link to="/pro29">철실장 인사드립니다.</Link>
                    </div>
                    <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                      <Link to="/pro30">100분 TC11★ 당일지급 ★출퇴근 자유..</Link>
                    </div>
                    <div className="text-left-loca">
                        강남구 역삼동
                    </div>
                    <div className="text-left-content">
                    <Link to="/pro31" style={{"color":"blue"}}>★1시간25분★TC11</Link>
                    </div>
                    <div className="text-left-loca">
                        강남구 역삼동
                    </div>
                    <div className="text-left-content">
                    <Link to="/pro32">♥♥순수테이블♥1시간10분♥술NO!!!♥♥</Link>
                    </div>
                    <div className="text-left-loca">
                        강남구 역삼동
                    </div>
                    <div className="text-left-content">
                      <Link to="/pro33" style={{"color":"red"}}>★란제리 끝판왕★ </Link>
                    </div>
                    <div className="text-left-loca">
                        강남구 신사동
                    </div>
                    <div className="text-left-content">
                      <Link to="/pro34">강남(클럽ㅡ퍼블릭ㅡ신사동)당일지급</Link>
                    </div>
                    <div className="text-left-loca">
                        강남구 역삼동
                    </div>
                    <div className="text-left-content">
                      <Link to="/pro35" style={{"color":"pink"}}>♥20~30대 전문♥ 젊은실장과함께 일하실분</Link>
                    </div>
                    <div className="text-left-loca">
                        강남구 역삼동
                    </div>
                    <div className="text-left-content">
                    <Link to="/pro36">블랙티..형이 왜 거기서 나와?</Link>
                    </div>
                    <div className="text-left-loca">
                        강남구 논현동
                    </div>
                    <div className="text-left-content">
                      <Link to="/pro37" style={{"color":"purple"}}>차량지원,콜비지원!! 논현M으로 오세요~~~~</Link>
                    </div>
                    <div className="text-left-loca">
                        강남구 역삼동
                    </div>
                    <div className="text-left-content">
                      <Link to="/pro38">젊은손님多多</Link>
                    </div>
                    <div className="text-left-loca">
                        강남구 논현동
                    </div>
                    <div className="text-left-content">
                      <Link to="/pro39">▶꽃보다돈◀Free 텃세No진상No술No방..</Link>
                    </div> 
                    <div className="text-left-loca">
                        강남구 역삼동
                    </div>
                    <div className="text-left-content">
                      <Link to="/pro40" style={{"color":"rgb(255, 102, 102)"}}>1시간30분 10만 퍼블릭 정통룸</Link>
                    </div> 
                    <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                      <Link to="/pro41">강남역 혜선실장♥</Link>
                    </div> 
                    <div className="text-left-loca">
                        강남구 신사동
                    </div>
                    <div className="text-left-content">
                      <Link to="/pro42" style={{"color":"rgb(179, 102, 255)"}}>＞신사동 가라오케＜§테리§</Link>
                    </div> 
                    <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                      <Link to="/pro43">★서초!역삼!강남!룸알바</Link>
                    </div> 
                    <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                      <Link to="/pro43" style={{"color":"rgb(169, 77, 255)"}}>꺅.. 가스통이당!!</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default TextMain;