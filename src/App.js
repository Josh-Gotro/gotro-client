import React from 'react';
import { Helmet } from 'react-helmet';
import previewPic from './images/joshPF.png'
import './customCSS/App.css';
import { RecoilRoot } from 'recoil';
import NavBar from './NavBar';
import Feature from './Feature';
import Intro from './Intro';
import RecentWork from './RecentWork';
import Blog from './Blog';
import SayHi from './SayHi';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Helmet>
        <title>Gotro</title>
        <meta property="og:title" content="Josh Gauthreaux's Portfolio" />
        <meta property="og:description" content="Welcome! Check out my recent work, my weekly blog, or say hello!" />
        <meta name="image" property="og:image" content={previewPic} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://joshgotro.com" />
      </Helmet>
        <RecoilRoot>
          <NavBar />
          <Feature />
          <Intro />
          <RecentWork />
          <Blog />
          <SayHi />
          <Footer />
        </RecoilRoot>
    </div>
  );
}
export default App;

// Recoil Root in place for future DarkMode 

// Browser Router is installed for this project for future use. (hosting projects on this server)
// Add code below to imports, then wrap <Recoil Root> with <Router>, and then add a <switch> around routed components.
// import { BrowserRouter as Router } from 'react-router-dom';	