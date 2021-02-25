import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import TopNav from "./components/TopNav";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="main-font">
        {/* <TopNav /> */}
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
