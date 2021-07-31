import React from "react";
import "../css/NavBar.css";

function NavBar() {
    return (
        <div className="navbar">
            
            <div className="navbar__logo">
                <img
                    src="https://insidepulse.com/wp-content/uploads/2019/08/Ghost-Rider-logo-flaming-skull-1-300x300.png"
                    alt="logo"
                />
            </div>
            <ul className="navbar__links">
                <li>
                    <a href="#history">History</a>
                </li>
                <li>
                    <a href="#powers">Powers</a>
                </li>
                
            </ul>
        </div>
    );
}

export default NavBar;
