import React from 'react';
import logo from './logo.svg';
import Countdown from './components/Countdown';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Countdown />
      </header>
    </div>
  );
}

export default App;
