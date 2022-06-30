import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
type ServerData = {
  foo: string
}
function App() {
  const [data, setData] = useState<ServerData|null>({foo: 'default'});
  const fetchData= () => {
    fetch('http://localhost:3001/', {})
    .then(res=> res.json())
    .then(data=>setData(data))
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button onClick={fetchData}>
          GET SOME DATA
        </button>
        <p style={{fontFamily: 'monospace'}}>{data && JSON.stringify(data)}</p>
      </header>
    </div>
  );
}

export default App;
