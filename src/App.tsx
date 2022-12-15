import './App.css';

import React, { useState } from 'react';

import vitelogo from './assets/favicon.svg';
import reactlogo from './assets/logo.svg';

function App() {
  const [count, setcount] = useState(0);

  const increment = () => {
    setcount(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="logoes">
          <img src={vitelogo} className="App-logo" alt="logo" />
          <img src={reactlogo} className="App-logo" alt="logo" />
        </div>
        <p className="header">
          🚀 Vite + React + Typescript 🤘 & <br />
          Eslint 🔥+ Prettier
        </p>
        <button onClick={increment}>Click to Increment: {count}</button>
      </header>
    </div>
  );
}

export default App;
