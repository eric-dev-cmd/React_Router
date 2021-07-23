import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";
import Login from "./components/Login";

import React from "react";
{
  /* <Route path="/" exact component={Home}></Route> */
}
const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/about",
    exact: false,
    main: () => <About />,
  },
  {
    path: "/dashboard",
    exact: false,
    main: () => <Dashboard />,
  },
  {
    path: "/products",
    exact: false,
    main: ({ match, location }) => (
      <Products match={match} location={location} />
    ),
  },
  {
    path: "/contact",
    exact: false,
    main: () => <Contact />,
  },
  {
    path: "/login",
    exact: false,
    main: ({ location }) => <Login location={location} />,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />,
  },
];

export default routes;
