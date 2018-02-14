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
              <div class="divTableCell">업소명 : 나비</div>
              <div class="divTableCell">모집업종</div>
            </div>
            <div class="divTableRow">
              <div class="divTableCell">담당자</div>
              <div class="divTableCell">주소</div>
            </div>
            <div class="divTableRow">
              <div class="divTableCell">연락처</div>
              <div class="divTableCell">cell2_3</div>
            </div>
            <div class="divTableRow">
              <div class="divTableCell">cell1_4</div>
              <div class="divTableCell">cell2_4</div>
            </div>
            <div class="divTableRow">
              <div class="divTableCell">cell1_5</div>
              <div class="divTableCell">cell2_5</div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Pro1Page