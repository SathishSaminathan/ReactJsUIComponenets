import React, { Component } from "react";

class Step2 extends Component {
  render() {
    return (
      <div style={{ height: 400, backgroundColor: "white" }}>
        Step2 <button className="button_style" onClick={() => this.props.nextStep()}>Save & Continue</button>
      </div>
    );
  }
}

export default Step2;
