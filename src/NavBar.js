import React, { useState } from 'react';
import './customCSS/Nav.css';
import { useRecoilState } from 'recoil';
import { isBlackandGold } from './services/Atom.js';


const NavBar = () => {
    // Recoil and standard hooks in place for future darkmode feature
    // const [dm, setDM] = useRecoilState(isBlackandGold);
    // const [darkMode, setDarkMode] = useState(true);

    return (
        <div className="Nav">

            <a href="#gotro" className="NavMe" >gotro</a>
            <a href="#RW" className="NavRW"> recent <br/> work </a>

            {/* DarkMode Toggle  - - -  uncommont code below to see visual toggle function*/}
            {/* <label className="switch">
                <input type="checkbox"></input>
                <span className="slider"></span>
            </label> */}

            
            <a href="#blog" className="NavBlog">blog</a>
            <a href="#hello" className="NavHi"> say <br />hello </a>

        </div>
    );
}

export default NavBar;


