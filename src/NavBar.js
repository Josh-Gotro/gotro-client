import React from 'react';
import './customCSS/Nav.css';

const NavBar = () => {
    return (
        <div className="Nav">

            <a href="#gotro" className="NavMe">gotro</a>

            <label className="switch">
                <input type="checkbox"></input>
                <span className="slider"></span>
            </label>

            <a href="#RW" className="NavRW"> recent work </a>

            <a href="#hello" className="NavHi"> say hello </a>

        </div>
    );
}

export default NavBar;


