import React, { Component } from "react";

class Step3 extends Component {
  render() {
    return (
      <div style={{ height: 400, backgroundColor: "white" }}>
        Step3
        <button className="button_style" onClick={() => this.props.nextStep()}>
          Save & Continue
        </button>
      </div>
    );
  }
}

export default Step3;
