import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';

import HomePage from './pages/HomePage';
import WithdrawPage from './pages/WithdrawPage';
import DepositPage from './pages/DepositPage';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      <ul className="ul-style">
        <li className="li-style"><NavLink className="App-link" to="/" exact>Home</NavLink></li>
        <li className="li-style"><NavLink className="App-link" to="/deposit" exact>Deposit</NavLink></li>
        <li className="li-style"><NavLink  className="App-link" to="/withdraw" exact>Withdraw</NavLink></li>
      </ul>
        <Route path="/" component={HomePage} exact/>
        <Route path="/deposit" component={DepositPage} exact/>
        <Route path="/withdraw" component={WithdrawPage} exact/>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
