import React from 'react';
import GitIcon from './Icons/Github.js';
import LinkedIcon from './Icons/Linkedin.js'
import StravaIcon from './Icons/Strava.js'

import './customCSS/Footer.css';

const Footer = () => {

    
    return (
        <div className="Footer">
            
            <a href="https://github.com/Josh-Gotro"><GitIcon width="40px" height="40px" /></a>
            
            <a href="https://www.linkedin.com/in/josh-gauthreaux/"><LinkedIcon width="40px" height="40px" /></a>

            <a href="https://www.strava.com/athletes/25087475"><StravaIcon width="40px" height="40px" /></a>
        </div>
    );
}

export default Footer;
