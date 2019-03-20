import React, { Component } from 'react';
import logo from './rkmTubeLogo.svg';
import './App.css';
import Youtube from './Api/Youtube';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <p>
            Welcome to Rkm-Tube
          </p>

          <h2>
            <Link to="/how-to">How To Use</Link>
          </h2>
        </header>

        <Youtube />
      </div>
    );
  }
}

export default App;
