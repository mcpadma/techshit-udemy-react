import React from 'react';
import logo from './logo.svg';
import './App.scss';
import NameTag from './components/nameTag';
import Fragment from './components/fragments';
import Input from './components/input';
import CondRender from './components/conditionalRendering';

const nameStyle = {
  color:"Grey",
  border:"1px solid #fff",
  paddingTop:"5px",
  paddingBottom:"5px",
  width:"300px"
};

const nameTagTitle = {
  color:"yellow",
  border:"1px dotted yellow"
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1 style={{...nameStyle, ...nameTagTitle}}>Names List</h1>
        <h3 style={nameStyle}>Ganapathi</h3>
        <h3 style={nameStyle}>Padma</h3>
        <h3 style={nameStyle}>Dughu</h3> */}
        <h1 className="name title">Names List</h1>
        {/* <h3 className="name">Ganapathi</h3>
        <h3 className="name">Padma</h3>
        <h3 className="name">Dughu</h3> */}
        <h1>Reusable components</h1>
        {/* Passing name as props value  */}
        {/* <NameTag name="Ganapathi"></NameTag>
        <NameTag name="Padma"></NameTag>
        <NameTag name="Dughu"></NameTag> */}
         {/* Passing name as props children  */}
        <NameTag>Ganapathi</NameTag>
        <NameTag>Padma</NameTag>
        <NameTag>Dughu</NameTag>

        <h1>passing as fragments</h1> 
        <Fragment firstName="Ganapathi" lastName="Padma"></Fragment>
        <Fragment firstName="Padma" lastName="Ganapathi"></Fragment>
        <Fragment firstName="Dughu" lastName="Ganapathi"></Fragment>
       
        <h1>Destructuring Props</h1>
        <Input placeholder="Enter Here" type="text"></Input>

        <h1>Conditional Rendering</h1>
        <CondRender firstName="Ganapathi" lastName="Padma"></CondRender>
        <CondRender firstName="Padma" lastName="Ganapathi"></CondRender>
        <CondRender firstName="Dughu" lastName="Ganapathi"></CondRender>
        <CondRender></CondRender>
      </header>
    </div>
  );
}

export default App;
