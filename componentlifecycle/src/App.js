import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import UseEffectHooks from './components/useEffectHooks';
import UseEffectExample from './components/useEffectExample';
import FetchDataAsync from './components/dataFetchAsync';
import Memoization from './components/memoization';
import UsePreviousHook from './components/usePreviousHooks';

function App() {
  
  return (
    <div className="App">
      <header >
        <UseEffectHooks></UseEffectHooks>
        <UseEffectExample></UseEffectExample>
        <FetchDataAsync></FetchDataAsync>
        <Memoization></Memoization>
        <UsePreviousHook></UsePreviousHook>
      </header>
    </div>
  );
}

export default App;
