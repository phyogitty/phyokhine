import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import TopNav from "./components/TopNav";
import Home from "./components/Home";
import "aos/dist/aos.css"; // You can also use <link> for styles

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
