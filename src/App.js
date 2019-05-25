import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'
import Counter from './Counter'
import Todos from './Todos'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome title={6} year={2017}/>
        <Welcome title="Ram" year={2017}/>
        <Welcome title="Rani"/>
      </header>
      <Todos/>
    </div>
  );
}

export default App;
