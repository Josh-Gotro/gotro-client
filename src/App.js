import React from 'react';
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