import React from 'react';
import logo from './logo.svg';
import './App.css';

import No from './Components/Buttons/No';
import Yes from './Components/Buttons/Yes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Yes> </Yes>
        <No></No>

      </header>
    </div>
  );
}

export default App;
