import React from 'react';
import logo from './logo.svg';
import './App.css';

import Welcome from './Welcome'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome title="Varma"/>
        <Welcome title="Ram"/>
      </header>
    </div>
  );
}

export default App;
