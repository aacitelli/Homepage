import React from "react";
import "./kanban.css";

export default class Kanban extends React.Component 
{
  render() {
    return (
      <div>

        <div class="list">

          <div class="listTitle">List 1</div>

          <div class="card">
            <div class="cardDescription">Card 1 Description</div>            
            <div class="cardBottomContent">
              <div class="cardDueDate">1/1/20</div>
            </div>
          </div>

        </div>

      </div>
    )
  }
}