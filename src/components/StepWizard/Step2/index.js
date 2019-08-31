import React, { Component } from "react";

class Step2 extends Component {
  state = {
    isLoading: false
  };
  componentDidMount() {
    console.log("step2 componentDidMount");
  }

  handleSave = () => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.props.nextStep();
    }, 1000);
  };

  render() {
    return (
      <div style={{ height: 400, backgroundColor: "white" }}>
        Step2
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <button
            className="button_style"
            onClick={() => this.props.prevStep()}
          >
            Back
          </button>
          <button className="button_style" onClick={() => this.handleSave()}>
            <div className="button_text_area">
              <span
                className={`${this.state.isLoading ? "loading_spinner" : ""}`}
              ></span>
              <span>Save & Continue</span>
            </div>
          </button>
        </div>
      </div>
    );
  }
}

export default Step2;
