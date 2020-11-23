import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar/index";
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Footer from "./components/Footer/footer";
import Contacts from "./components/Contacts/Form"


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
          <Route Path="/contacts" component={Contacts} />
        </Switch>
        <Contacts />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
