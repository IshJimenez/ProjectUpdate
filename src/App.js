import React from 'react';
import './App.css';
import Home from './Components/Homepage.js';
import { Switch, Route } from 'react-router-dom';
import Testor from './Components/Testor.js';

function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/testor' component={Testor} />
      </Switch>
    </div>
  );
}

export default App;
