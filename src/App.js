import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './views/Navbar';
import Home from './views/Home';
import About from './views/About';

function App() {
  return (
    <div className="App">
    <Router>
      <div>
      <Navbar /><hr/>
            <Route exact path='/' component={Home}/>
            <Route path='/About' render={ () => <About name={'Tom'}/> }/>
      </div>
    </Router>
  </div>
  );
}

export default App;
