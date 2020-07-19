import React from 'react';
import GitIcon from './Icons/Github.js';
import LinkedIcon from './Icons/Linkedin.js'
import StravaIcon from './Icons/Strava.js'

import './customCSS/Footer.css';

const Footer = () => {
    
    return (
        <div className="Footer">
            <div className="Social sOne"><a href="https://github.com/Josh-Gotro" target="_blank" ><GitIcon width="24px" height="24px" /></a></div>
            <div className="Social sTwo"><a href="https://www.linkedin.com/in/josh-gauthreaux/" target="_blank"><LinkedIcon width="24px" height="24px" /></a></div>
            <div className="Social sThree"><a href="https://www.strava.com/athletes/25087475" target="_blank"><StravaIcon width="24px" height="24px" /></a></div>
        </div>
    );
}

export default Footer;
