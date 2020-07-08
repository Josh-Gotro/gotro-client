import React from 'react';
import './customCSS/App.css';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar';
import Feature from './Feature';
import Intro from './Intro';
import RecentWork from './RecentWork';
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
          <SayHi />
          {/* <Switch>
            <Route path="/" exact component={Feature} />
            <Route path="/projects" exact component={RecentWork} />
            <Route path="/sayhi" component={SayHi} />
          </Switch> */}
          <Footer />
        </RecoilRoot>
      </Router>
    </>
  );
}
export default App;
