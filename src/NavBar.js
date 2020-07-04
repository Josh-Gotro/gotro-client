import React from 'react';
import './customCSS/Nav.css';

const NavBar = () => {
    return (
        <div className="Nav">

            <div className="NavMe">gotro</div>

            <label class="switch">
                <input type="checkbox"></input>
                <span class="slider"></span>
            </label>

            <div className="NavRW"> recent work </div>

            <div className="NavHi"> say hello </div>

        </div>
    );
}

export default NavBar;


