import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar/index";
import Home from "./pages/Home"

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact page={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
