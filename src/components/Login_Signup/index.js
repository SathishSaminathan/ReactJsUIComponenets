import React, { Component } from "react";

import "./login.scss";

export default class Login extends Component {
  state = {
    isSignIn: false
  };
  render() {
    const { isSignIn } = this.state;
    return (
      <div className="container-area">
        <div className={`main ${isSignIn ? "active" : "inActive"}`}>
          <div className="description">desc</div>
          <div className="interface">
            <button
              onClick={() => this.setState({ isSignIn: !this.state.isSignIn })}
            >
              Click
            </button>
          </div>
        </div>
      </div>
    );
  }
}
