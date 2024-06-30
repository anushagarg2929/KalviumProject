import React from 'react';
import './App.css';

const languages = {
  C: 'c',
  CPP: 'cpp',
  PYTHON: 'python',
  JAVA: 'java',
  NODEJS: 'nodejs',
  RUBY: 'ruby',
  PROMPTV1: 'promptv1',
  PROMPTV2: 'promptv2',
  MULTIFILE: 'multifile',
  SQLITE3: 'sqlite3',
  TS: 'ts',
  GO: 'go',
  KOTLIN: 'kotlin',
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Supported Programming Languages</h1>
        <ul>
          {Object.keys(languages).map((key) => (
            <li key={key}>
              <strong>{key}</strong>: {languages[key]}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
