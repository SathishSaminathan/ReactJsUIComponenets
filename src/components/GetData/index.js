import React, { Component } from "react";
import "./style.scss";

export default class GetData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null
    };
  }

  handleSubmit = () => {
    // alert("working " + this.state.email);
  };

  render() {
    return (
      <div className="container-style">
        <div className="left">
          <div className="parent">
            <div>
              <span className="aroma">
                We are <span className="black">aroma</span>
              </span>
              <div>Welcome Back, Please login to your account</div>
            </div>
            <div className="inputArea">
              <div className="input">
                <label>Email Address</label>
                <input
                  maxLength={20}
                  onChange={e => this.setState({ email: e.target.value })}
                ></input>
              </div>
            </div>
            <div>
              <button onClick={() => this.handleSubmit()}>Remember me</button>
            </div>
          </div>
          <button className="button-style"> ></button>
        </div>
        <div className="right"></div>
      </div>
    );
  }
}
