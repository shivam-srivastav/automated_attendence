import React from "react";
import Home from "./Component/Home/Home";
import { Link } from "react-router-dom";
import "./App.css";
// import Homepage from './Component/Homepage/Homepage';
import Registration from "./Component/Registration/Registration";
import Login from "./Component/Login/Login";
import Profile from "./Component/Profile/Profile";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/registration">
            <Registration />
          </Route>
          <Route exact path="/signin">
            <Login />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
