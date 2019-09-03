import React, { Component } from "react";

class Campaign extends Component {
  state = {
    isLoading: false
  };
  componentDidMount() {
    console.log("step1 componentDidMount");
  }

  handleSave = () => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.props.nextStep();
    }, 1000);
  };

  render() {
    return (
      <div
        style={{
          minHeight: 405,
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <button
            className="button_style"
            style={{ width: 256, height: 40 }}
            onClick={() => this.props.prevStep()}
          >
            SELECT EXISTING CAMPAIGN
          </button>
          <button
            className="button_style"
            style={{ width: 256, height: 40, marginTop: 19 }}
            onClick={() => this.props.prevStep()}
          >
            CREATE NEW CAMPAIGN
          </button>
        </div>
      </div>
    );
  }
}

export default Campaign;
