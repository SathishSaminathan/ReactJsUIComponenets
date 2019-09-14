import React, { Component } from "react";

class Step3 extends Component {
  componentDidMount() {
    console.log("step3 componentDidMount");
  }
  render() {
    return (
      <div style={{ height: 400, backgroundColor: "white" }}>
        <button className="button_style" onClick={() => this.props.moveStep("PREV")}>
          Back
        </button>
        Step3
        <button className="button_style" onClick={() => this.props.moveStep("NEXT")}>
          Save & Continue
        </button>
      </div>
    );
  }
}

export default Step3;
