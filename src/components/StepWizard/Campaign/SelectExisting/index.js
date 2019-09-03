import React, { Component } from "react";

import "../../styles.css";

class SelectExistingTemplate extends Component {
  render() {
    const { selectTemplate } = this.props;
    return (
      <div className="select_existing_container">
        <div>
          <div className="select_label">Select Existing Template</div>
          <div className="select_save_area">
            <select
              className="form-control custom_select"
              style={{ width: 641 }}
            >
              <option>Campaign 1137</option>
            </select>
            <button
              className="button_style"
              style={{ width: 154, marginLeft: 10 }}
            >
              <div className="button_text_area">
                <span
                // className={`${this.state.isLoading ? "loading_spinner" : ""}`}
                ></span>
                <span>Save & Continue</span>
              </div>
            </button>
          </div>
          <div
            style={{
              marginTop: 10,
              display: "flex"
            }}
          >
            <button className="button_style" onClick={selectTemplate()}>
              <div className="button_text_area">
                <span
                // className={`${this.state.isLoading ? "loading_spinner" : ""}`}
                ></span>
                <span>Create New Campaign</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectExistingTemplate;
