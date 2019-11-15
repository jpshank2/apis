import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './Navigation/Header';
import { Home } from './Navigation/Home';
import News from './Navigation/News';
import About from './Navigation/About';
import Ghibli from './Navigation/Ghibli';
import Forum from './Navigation/Forum';
import Posts from './Navigation/Posts';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Route exact path="/" render={() => (
          <React.Fragment>
            <Home />
          </React.Fragment>
        )} />
        <Route exact path="/news" render={() => (
          <News />
        )} />
        <Route exact path="/about" render={() => (
          <About />
        )} />
        <Route exact path="/forum" render={() => (
          <React.Fragment>
            <Forum />
            <Posts />
          </React.Fragment>
        )} />
        <Route exact path="/studio-ghibli" render={() => (
          <Ghibli />
        )} />
      </Router>
    </React.Fragment>
  );
}

export default App;
