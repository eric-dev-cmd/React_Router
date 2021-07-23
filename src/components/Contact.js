import React, { Component } from "react";
import { Prompt } from "react-router-dom";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }
  onHandleClick = (isChecked) => {
    this.setState({
      isChecked: isChecked,
    });
    console.log(isChecked);
  };
  render() {
    var { isChecked } = this.state;

    return (
      <div className="container">
        <h1 className="text-danger mt-3 text-center mb-3">Contact</h1>
        <div class="row">
          <div class="col-2"></div>
          <div class="col-4">
            <button
              type="button"
              class="btn btn-outline-warning form-control text-dark fw-bold"
              onClick={() => this.onHandleClick(false)}
            >
              Allow
            </button>
          </div>
          <div class="col-4">
            <button
              type="button"
              class="btn btn-outline-danger form-control fw-bold"
              onClick={() => this.onHandleClick(true)}
            >
              Do not allow
            </button>
          </div>
          <div class="col-2"></div>
        </div>
        <Prompt
          when={isChecked}
          message={(location) => `Are u sure to leave to ${location.pathname}`}
        />
      </div>
    );
  }
}

export default Contact;
