import React from 'react';

import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import MovieIndex from './Components/Movies/Index';

import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/pokemon">Pokemon</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/pokemon">
              <MovieIndex />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
