import React, { Component } from "react";

class Step1 extends Component {
  render() {
    return (
      <div style={{ height: 400, backgroundColor: "white" }}>
        Step1
        <button className="button_style" onClick={() => this.props.nextStep()}>
          Save & Continue
        </button>
      </div>
    );
  }
}

export default Step1;
