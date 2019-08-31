import React, { Component } from "react";

class Step4 extends Component {
  componentDidMount() {
    console.log("step4 componentDidMount");
  }
  render() {
    return (
      <div style={{ height: 400, backgroundColor: "white" }}>
        <button className="button_style" onClick={() => this.props.prevStep()}>
          Back
        </button>
        Step4
        <button className="button_style" onClick={() => this.props.nextStep()}>
          Save & Continue
        </button>
      </div>
    );
  }
}

export default Step4;
