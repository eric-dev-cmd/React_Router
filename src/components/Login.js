import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: "admin",
      txtPassword: "admin",
    };
  }
  onHandleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };
  onHandleSubmit = (event) => {
    var { txtUsername, txtPassword } = this.state;
    event.preventDefault();
    if (txtUsername === "admin" && txtPassword === "admin") {
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: txtUsername,
          password: txtPassword,
        })
      );
    }
  };
  render() {
    var { txtUsername, txtPassword } = this.state;
    var loggedInUser = localStorage.getItem("user");
    if (loggedInUser !== null) {
      console.log("chuyen sang trang products");
      var { location } = this.props;
      return (
        <Redirect
          to={{
            pathname: "/products",
            state: {
              from: location,
            },
          }}
        />
      );
    }
    var { location } = this.props;
    console.log(location);
    return (
      <div className="container">
        <h1 className="text-danger mt-3 text-center mb-3">Form Login</h1>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <form onSubmit={this.onHandleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-bold ">Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="zunggzing"
                  name="txtUsername"
                  value={txtUsername}
                  onChange={this.onHandleChange}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your username with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="txtPassword"
                  placeholder="123"
                  value={txtPassword}
                  onChange={this.onHandleChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-danger form-control form-control-sm"
              >
                Login
              </button>
            </form>
          </div>

          <div className="col-3"></div>
        </div>
      </div>
    );
  }
}

export default Login;
