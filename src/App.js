import React from 'react';
import './App.css';
import Home from './Components/Homepage.js';
import { Switch, Route } from 'react-router-dom';
import Testor from './Components/Testor.js';
import Weather from './Components/Weather.js'
import Stars from './Components/Stars.js'
import Header from './Components/Header.js'

function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/testor' component={Testor} />
      <Route path='/weather' component={Weather} />
      <Route path="/stars" component={Stars} />
      </Switch>
    </div>
  );
}

export default App;
