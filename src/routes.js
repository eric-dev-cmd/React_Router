import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard";
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
    path: "",
    exact: false,
    main: () => <NotFound />,
  },
];

export default routes;
