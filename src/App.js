import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AboutMe from './aboutmefile';
import Experience from './aboutmeexperience';
import Project from './aboutmeprojects';
import Education from './aboutmeeducation'
import Skills from './aboutmeskills';
import Connect from './aboutmeconnect'
import 'font-awesome/css/font-awesome.min.css';
class App extends Component {
  render(){
    return (
      <div className="App">
        <AboutMe />
        <Experience />
        <Project />
        <Education />
        <Skills />
        <Connect />
        <header className="App-header">
          <div className = "columnsreact">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          </div>
        </header>
      </div>


    );
  }
}

export default App;
