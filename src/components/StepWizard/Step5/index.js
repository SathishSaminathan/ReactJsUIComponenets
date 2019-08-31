import React, { Component } from "react";

class Step5 extends Component {
  componentDidMount() {
    console.log("step5 componentDidMount");
  }
  render() {
    return (
      <div style={{ height: 400, backgroundColor: "white" }}>
        <button className="button_style" onClick={() => this.props.prevStep()}>
          Back
        </button>
        Step5
        <button className="button_style" onClick={() => this.props.nextStep()}>
          Save & Continue
        </button>
      </div>
    );
  }
}

export default Step5;
