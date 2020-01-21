import React from "react";
import "./kanban.css";
import Navbar from "./Navbar";

export default class Kanban extends React.Component 
{
  render() {
    return (

      <div>
        <Navbar id="kanban" />     
        <div id="wrapper">
          <button onClick={exampleRequest}>Click Me!</button>
          <div className="list">
            <div className="listTitle">List 1</div>
            <div className="card">
              <div className="cardDescription">Card 1 Description</div>            
              <div className="cardBottomContent">
                <div className="cardDueDate">1/1/20</div>
              </div>
            </div>
          </div>

          <div className="list">
            <div className="listTitle">List 1</div>
            <div className="card">
              <div className="cardDescription">Card 1 Description</div>            
              <div className="cardBottomContent">
                <div className="cardDueDate">1/1/20</div>
              </div>
            </div>
          </div>

          <div className="list">
            <div className="listTitle">List 1</div>
            <div className="card">
              <div className="cardDescription">Card 1 Description</div>            
              <div className="cardBottomContent">
                <div className="cardDueDate">1/1/20</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}

async function exampleRequest() {
  const data = {
    firstName: "Anden", 
    lastName: "Acitelli"
  };

  const response = await fetch("/api/kanban/board", {
    method: "POST", 
    mode: "cors", 
    credentials: "same-origin", 
    headers: {
      "Content-Type": "application/json"
    }, 
    body: JSON.stringify(data)
  });

  console.log("Server Response: " + response);
}