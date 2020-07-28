import React from "react";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import "./App.css";

import AboutPage from "./pages/AboutPage";
import UserPage from "./pages/UserPage";

function App() {
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
          <Route
            path="/user/:username"
            exact
            render={({ match }) => {
              return <h1>Welcome {match.params.username}</h1>;
            }}
          ></Route>
          {/* <Route path="/user/:firstname/:lastname" exact 
        render={({match})=>{
          return <h1>Welcome {match.params.firstname} {match.params.lastname}</h1>
        }}></Route> */}
          <Route
            path="/user/:firstname/:lastname"
            exact
            component={UserPage}
          ></Route>

          {/* Router links */}
          <ul>
            <li>
              <NavLink
                className="App-link"
                to="/" exact
                activeClassName="Link-active-style"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="App-link"
                to="/about" exact
                activeClassName="Link-active-style"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className="App-link"
                to="/user/padma/chockalingam" exact
                activeStyle={{ color: "green" }}
              >
                User Page
              </NavLink>
            </li>
          </ul>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
