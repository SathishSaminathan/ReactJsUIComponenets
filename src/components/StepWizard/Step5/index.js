import React, { Component } from "react";

class Step5 extends Component {
  componentDidMount() {
    console.log("step5 componentDidMount");
  }
  render() {
    return (
      <div style={{ height: 400, backgroundColor: "white" }}>
        <button className="button_style" onClick={() => this.props.moveStep("PREV")}>
          Back
        </button>
        Step5
        <button className="button_style" onClick={() => this.props.moveStep("NEXT")}>
          Save & Continue
        </button>
      </div>
    );
  }
}

export default Step5;
