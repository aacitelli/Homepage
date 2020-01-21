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

          <button onClick={readBoard}>Get Board Contents</button>
          <button onClick={addBoard}>Add Board</button>      
          <button onClick={deleteBoard}>Delete Board</button>

          <button onClick={addListToBoard}>Add List To Board</button>
          <button onClick={deleteListFromBoard}>Remove List From Board</button>

          <button onClick={addTaskToList}>Add Task To List</button>
          <button onClick={deleteTaskFromList}>Remove Task From List</button>

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

// Get board data from the server 
// TODO: Finish implementation 
async function readBoard() {
  const response = await fetch("/api/kanban/board"); 
}

// Add an entirely new board to the database 
// TODO: Finish implementation
async function addBoard() {
  let data = {};
  const response = await fetch("/api/kanban/board", {
    method: "POST", 
    mode: "cors", 
    credentials: "same-origin", 
    headers: {
      "Content-Type": "application/json"
    }, 
    body: JSON.stringify(data)
  });
}

// Remove a board from the database 
// TODO: Finish implementation
async function deleteBoard() {
  let data = {};
  const response = await fetch("/api/kanban/board", {
    method: "DELETE", 
    mode: "cors", 
    credentials: "same-origin", 
    headers: {
      "Content-Type": "application/json"
    }, 
    body: JSON.stringify(data)
  });
}

// Add a list to the current board 
// TODO: Finish implementation 
async function addListToBoard() {
  let data = {};
  const response = await fetch("/api/kanban/list", {
    method: "POST", 
    mode: "cors", 
    credentials: "same-origin", 
    headers: {
      "Content-Type": "application/json"
    }, 
    body: JSON.stringify(data)
  });
}

// Remove a list from the current board 
// TODO: Finish implementation
async function deleteListFromBoard() {
  let data = {};
  const response = await fetch("/api/kanban/list", {
    method: "DELETE", 
    mode: "cors", 
    credentials: "same-origin", 
    headers: {
      "Content-Type": "application/json"
    }, 
    body: JSON.stringify(data)
  });
}

// Add a task to a list 
// TODO: Finish implementation
async function addTaskToList() {
  let data = {};
  const response = await fetch("/api/kanban/task", {
    method: "POST", 
    mode: "cors", 
    credentials: "same-origin", 
    headers: {
      "Content-Type": "application/json"
    }, 
    body: JSON.stringify(data)
  });
}

// Remove a task from a list 
// TODO: Finish implementation
async function deleteTaskFromList() {
  let data = {};
  const response = await fetch("/api/kanban/task", {
    method: "DELETE", 
    mode: "cors", 
    credentials: "same-origin", 
    headers: {
      "Content-Type": "application/json"
    }, 
    body: JSON.stringify(data)
  });
}