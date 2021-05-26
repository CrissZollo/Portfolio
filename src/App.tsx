import React, { Component } from 'react';
import './App.css';

import Navbar from './components/navbar/navbar'
import DisplayProjects from './components/projectDisplay/projectDisplay'

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Navbar></Navbar>
        <DisplayProjects></DisplayProjects>

      </div>
    );
  }
}

export default App;
