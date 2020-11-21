import React from "react";
import Navbar from "./components/Navbar/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
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
