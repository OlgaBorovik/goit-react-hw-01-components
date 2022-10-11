import React from 'react'
import logo from './logo.svg';
import './App.css';

const element = <div>Heolloo world</div>
const span1 = <span>AAAAAA</span>
console.log(element)
console.log(span1)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
