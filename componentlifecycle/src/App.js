import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import UseEffectHooks from './components/useEffectHooks';
import UseEffectExample from './components/useEffectExample';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <UseEffectHooks></UseEffectHooks>
        <UseEffectExample></UseEffectExample>
      </header>
    </div>
  );
}

export default App;
