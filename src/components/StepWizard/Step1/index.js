import React, { Component } from "react";

class Step1 extends Component {
  componentDidMount() {
    console.log("step1 componentDidMount");
  }

  render() {
    return (
      <div style={{ height: 400, backgroundColor: "white" }}>
        <button className="button_style" onClick={() => this.props.prevStep()}>
          Back
        </button>
        Step1
        <button className="button_style" onClick={() => this.props.nextStep()}>
          Save & Continue
        </button>
      </div>
    );
  }
}

export default Step1;
