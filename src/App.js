import { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* Menu */}
          <Menu />

          {/* Content */}

          <Switch>
            {/* <Route path="/" exact component={Home}></Route> */}
            {this.showRoutes(routes)}
          </Switch>
        </div>
      </Router>
    );
  }
  showRoutes = (routes) => {
    // console.log(routes);
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            path={route.path}
            exact={route.exact}
            component={route.main}
          ></Route>
        );
      });
    }
    return result;
  };
}

export default App;
