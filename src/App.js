import React from 'react';
import './customCSS/App.css';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar';
import Feature from './Feature';
import Intro from './Intro';
import RecentWork from './RecentWork';
import Blog from './Blog';
import SayHi from './SayHi';
import Footer from './Footer';

function App() {
  return (
    <>
      <Router>
        <RecoilRoot>
          <NavBar />
          <Feature />
          <Intro />
          <RecentWork />
          <Blog />
          <SayHi />
          <Footer />
        </RecoilRoot>
      </Router>
    </>
  );
}
export default App;
