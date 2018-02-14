import React, { Component } from 'react';
import './Pro1Page.css'
//http://divtable.com/generator/
class Pro1Page extends Component {
  render() {
    return (
      <div className="test">

        <div class="divTable infoTable">
          <div class="divTableBody">
          
            <div class="divTableRow">
              <div class="divTableCell">
                업소명  
              </div>
              <div class="divTableCell">모집업종</div>
            </div>
            <div class="divTableRow">
              <div class="divTableCell">담당자</div>
              <div class="divTableCell">주소</div>
            </div>
            <div class="divTableRow">
              <div class="divTableCell">연락처</div>
              <div class="divTableCell"></div>
            </div>

          </div>
        </div>

        <div class="divTable infoTable">
          <div class="divTableBody">
            <div class="divTableRow">
              <div class="divTableCell">근무 시간</div>
              <div class="divTableCell">급여</div>
            </div>
            <div class="divTableRow">
              <div class="divTableCell">성별</div>
              <div class="divTableCell">나이</div>
            </div>

          </div>
        </div>

        <div class="divTable infoTable">
          <div class="divTableBody">
            <div class="divTableRow">
              <div class="divTableCell">상세모집요강</div>
            </div>
          </div>
        </div>

        <div>
          광고내용
        </div>

      </div>
    )
  }
}

export default Pro1Page