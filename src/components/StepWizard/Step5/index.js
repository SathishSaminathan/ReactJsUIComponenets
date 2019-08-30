import React, { Component } from "react";

class Step5 extends Component {
  render() {
    return (
      <div style={{ height: 400, backgroundColor: "white" }}>
        Step5
        <button className="button_style" onClick={() => this.props.nextStep()}>
          Save & Continue
        </button>
      </div>
    );
  }
}

export default Step5;
