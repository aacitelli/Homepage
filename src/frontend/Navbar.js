import React from "react"; 
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
    return (
        <nav>
            <div class="navbarLeftContent"></div>
            <div class="navbarRightContent">

                <Link to="/c">
                    <div id="calendarButtonContainer">
                        <p>Calendar</p>
                    </div> 
                </Link>               
            </div>
      </nav>
    )
}