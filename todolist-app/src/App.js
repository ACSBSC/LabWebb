import React from 'react';

import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import ToDoList from './Components/ToDoList/ToDoList';

import panda from './redpanda_lazy.webp';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div>
      
        <div className="app">
        <img src={panda} alt=""/>
        <h1>To do List</h1>
          <div className="todo-list">
            <Switch>
              <Route exact path="/">
                <ToDoList />
              </Route>
              
            </Switch>
          </div>
          
        </div>
        
      </div>
      
    </BrowserRouter>
    
  );
}

export default App;
