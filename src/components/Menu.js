import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

const menus = [
  {
    name: "Home",
    to: "/",
    exact: true,
  },
  {
    name: "About",
    to: "/about",
    exact: false,
  },
  {
    name: "Dashboard",
    to: "/dashboard",
    exact: false,
  },

  {
    name: "Products",
    to: "/products",
    exact: false,
  },
  {
    name: "Contact",
    to: "/contact",
    exact: false,
  },
  {
    name: "Login",
    to: "/login",
    exact: false,
  },
];
console.log(menus);

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active nav-item abc" : "";
        var active1 = match ? "active" : "";
        return (
          <li className={`nav-item ${active}`}>
            <Link to={to} className={`nav-link ${active1}`}>
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};
class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-danger">OWEN</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {this.showMenus(menus)}
              {/* <MenuLink
                label="Home"
                to="/"
                activeOnlyWhenExact={true}
              ></MenuLink>
              <MenuLink
                label="About"
                to="/about"
                activeOnlyWhenExact={false}
              ></MenuLink>
              <MenuLink
                label="Dashboard"
                to="/dashboard"
                activeOnlyWhenExact={false}
              ></MenuLink> */}
              {/* <li className="nav-item">
                {/* <a href="/" className="nav-link active" aria-current="page">
                Home
              </a> 
                <NavLink exact to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                 <a href="/about" className="nav-link"></a>
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                 <a href="/dashboard" className="nav-link">
                Dashboard
              </a> 
                <NavLink to="/dashboard" className="nav-link">
                  Dashboard
                </NavLink>
              </li> */}
              {/* <li className="nav-item">
               <a href="/dashboard" className="nav-link">
                Dashboard
              </a> 
              <NavLink to="/page-404" className="nav-link">
                Not Found
              </NavLink>
            </li>*/}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item">To do list</a>
                  </li>
                  <li>
                    <a className="dropdown-item">Product in cart</a>
                  </li>
                  <li>
                    <a className="dropdown-item">Something else here</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  showMenus = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          ></MenuLink>
        );
      });
    }
    return result;
  };
}

export default Menu;
