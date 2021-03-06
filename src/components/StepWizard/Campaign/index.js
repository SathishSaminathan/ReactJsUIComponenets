import React, { Component } from "react";
import NewCampaign from "./New Campaign";
import SelectExistingTemplate from "./SelectExisting";

class Campaign extends Component {
  state = {
    isLoading: false,
    activeComponent: null
  };
  componentDidMount() {
    console.log("step1 componentDidMount");
  }

  handleSave = () => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.props.moveStep("NEXT");
    }, 1000);
  };

  renderTemplate = () => {
    const { activeComponent } = this.state;
    switch (activeComponent) {
      case "NEW":
        return <NewCampaign selectTemplate={this.selectTemplate} />;
      case "EXISTING":
        return (
          <SelectExistingTemplate selectTemplate={this.selectTemplate} />
        );
    }
  };

  selectTemplate = value => {
    this.setState({
      activeComponent: value
    });
  };

  render() {
    const { activeComponent } = this.state;
    return (
      <div
        style={{
          minHeight: 405,
          backgroundColor: "white",
          display: "flex"
          // alignItems: "center",
          // justifyContent: "center"
        }}
      >
        {activeComponent ? (
          <div className="template_Area">{this.renderTemplate()}</div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%"
            }}
          >
            <button
              className="button_style"
              style={{ width: 256, height: 40 }}
              onClick={() => this.setState({ activeComponent: "EXISTING" })}
            >
              SELECT EXISTING CAMPAIGN
            </button>
            <button
              className="button_style"
              style={{ width: 256, height: 40, marginTop: 19 }}
              onClick={() => this.setState({ activeComponent: "NEW" })}
            >
              CREATE NEW CAMPAIGN
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Campaign;
