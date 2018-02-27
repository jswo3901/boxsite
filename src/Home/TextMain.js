import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './index.css'
import textInfo from './textInfo.jpg'
import fastIcon from './fast.gif'
import newIcon from './new.gif'

class TextMain extends Component {
    render() {
        return (
            <div className="text_main">
                <img className="textInfo" src={textInfo} />
                <div className="text-left-main">
                    <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                        <a>20살이상누구나가능남구달서구 </a>
                    </div>
                    {/* <div className="text-clear">
                    </div> */}
                    <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                    <a>♥인천여우환영♥2030대모집♥</a>
                    </div> 
                    <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                        <img className="fastIcon" src={fastIcon} /> 술안먹고 갯수폭발<img className="newIcon" src={newIcon} />
                    </div> 

                    <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                    <a>┏◆꿀알바◆착한실장◆쓰리땅가즈아◆┓</a>
                    </div> <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                    <a>동종업계NO1■♡■당일페이■♡■</a>
                    </div> 
                    <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                    <a style={{"color":"red"}}>★안양평촌 최고의대우 1등업소 더블유..</a>
                    </div> <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                    <a>강서1등!!♥자유로운 출퇴근♥ 술NO♥안.</a>
                    </div> <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                    <a style={{"backgroundColor":"yellow"}}>▶야간매니저 급구◀업계최고대우●가족같은분.. </a>
                    </div> <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                    <a>술 안먹고 돈 많이 벌수 있는곳~!!</a>
                    </div> <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                    <a>♥강남식스♥1시간10만원♥1등상무</a>
                    </div> <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                    <a>텐프로쩜오  </a>
                    </div> <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                    <a style={{"backgroundColor":"#D3F9FF"}}>■1순위 안전 ■2순위 갯수 </a>
                    </div> <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                    <a>3분만 시간주세요(최고대우)</a>
                    </div> <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                    <a>퍼블릭★쎄미★클럽 </a>
                    </div> <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                    <a>퍼블릭★클럽</a>
                    </div> <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                    <a>3분만 시간주세요(최고대우)</a>
                    </div> <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                    <a>3분만 시간주세요(최고대우)</a>
                    </div> <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                    <a>달서구 최고TC 책임 보장</a>
                    </div> 
                    

                    

                </div>

                <div className="text-left-main">
                    <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                        <a>100분 TC8★ 당일지급 ★출퇴근 자유..</a>
                    </div>
                    <div className="text-clear">
                    </div>
                    <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                    <a>부천 이쁜누나들 이거한번 읽어봐바</a>
                    </div> 
                    <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                    <a>20살이상누구나가능남구달서구</a>
                    </div> <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                    <a>역삼동 삼성동 정통룸 탈의 NO</a>
                    </div> <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                    <a style={{"color":"blue"}}>↖↖술x진상x텃새x↗↗고페이보장↗↗</a>
                    </div> <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                    <a>♥노원셔츠룸 1시간당 TC12만원♥순수테.</a>
                    </div> <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                    <a>★여우★부천상동★ 따당기본 당일페이 출퇴.. </a>
                    </div> <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                    <a>100분 TC8★ 당일지급 ★출퇴근 자유..</a>
                    </div> <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                    <a>부천 이쁜누나들 이거한번 읽어봐바</a>
                    </div> <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                    <a>♥♥순수테이블♥1시간♥술NO!!!♥♥ </a>
                    </div> <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                    <a>퍼블릭★쎄미★클럽 </a>
                    </div> <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                    <a>강남(까페ㅡ클럽ㅡ퍼블릭)당일지급</a>
                    </div> <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                    <a>창원최고대우!갯수보장</a>
                    </div> <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                    <a>텐프로쩜오</a>
                    </div> <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                    <a>♥♥고페이♥♥ </a>
                    </div> <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                    <a>창원최고대우!갯수보장</a>
                    </div> <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                    <a>▶젠틀맨◀Free 텃세No진상No술No방..</a>
                    </div> 
                    <div className="text-left-loca">
                        강남구 서초동
                    </div>
                    <div className="text-left-content">
                    <a>언능와여...</a>
                    </div> 
                    
                </div>
            </div>
        )
    }
}

export default TextMain;