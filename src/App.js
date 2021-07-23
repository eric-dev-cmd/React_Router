import { Component } from "react";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* Menu */}
          <Menu />

          {/* Content */}

          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/dashboard" component={Dashboard}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
