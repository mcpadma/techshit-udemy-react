import React, { useState } from "react";
import {
  BrowserRouter,
  Route,
  Link,
  NavLink,
  Redirect,
  Prompt
} from "react-router-dom";
import "./App.css";

import AboutPage from "./pages/AboutPage";
import UserPage from "./pages/UserPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [age, setAge] = useState('');

  function loginHandle() {
    setLoggedIn(!loggedIn);
  }
  function onChangeHandle(e) {
    setAge(e.target.value);
  }
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Route
            path="/"
            exact
            render={() => {
              return <h1>Welcome Home</h1>;
            }}
          ></Route>
          {/* <Route path="/about" exact render={()=>{
          return<h1>Welcome About Page</h1>
        }}></Route> */}
          <Route path="/about" exact component={AboutPage}></Route>
          {/* <Route
            path="/user/:username"
            exact
            render={({ match }) => {
              return <h1>Welcome {match.params.username}</h1>;
            }}
          ></Route> */}
          <Prompt
            when={loggedIn && !age}
            message={location => {
              return location.pathname.startsWith("/user")
                ? true
                : "Are you sure?";
            }}
          ></Prompt>
          <Route
            path="/user/:firstname/:lastname"
            exact
            render={({ match }) => {
              return loggedIn ? (
                <div>
                  <h2>age: {age}</h2>
                  <input
                    type="text"
                    value={age}
                    onChange={onChangeHandle}
                  ></input>
                  <h1>Welcome {match.params.firstname} {match.params.lastname} </h1>
                </div>
              ) : (
                <Redirect to="/"></Redirect>
              );
            }}
          ></Route>
          {/* <Route
            path="/user/:firstname/:lastname"
            exact
            component={UserPage}
          ></Route> */}

          {/* Router links */}
          <ul className="ul-style">
            <li className="li-style">
              <NavLink
                className="App-link"
                to="/"
                exact
                activeClassName="Link-active-style"
              >
                Home
              </NavLink>
            </li>
            <li className="li-style">
              <NavLink
                className="App-link"
                to="/about"
                exact
                activeClassName="Link-active-style"
              >
                About
              </NavLink>
            </li>
            <li className="li-style">
              <NavLink
                className="App-link"
                to="/user/padma/chockalingam"
                exact
                activeStyle={{ color: "green" }}
              >
                User Page
              </NavLink>
            </li>
          </ul>
          
          {/* {loggedIn.toString()} */}
          <button className="button" onClick={loginHandle}>
            {loggedIn ? "LogOut" : "Login"}
          </button>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
