import React from "react"; 
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar(props) {

    let buttonText = props.id === "kanban" ? "Calendar" : "Kanban"; 
    return (
        <nav>
            <div class="navbarLeftContent"></div>
            <div class="navbarRightContent">
                <Link to="/c">
                    <div id="calendarButtonContainer">
                        <p>{buttonText}</p>
                    </div> 
                </Link>               
            </div>
      </nav>
    )
}