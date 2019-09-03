import React, { Component } from "react";

import "../../styles.css";

class SelectExistingTemplate extends Component {
  render() {
    return (
      <div className="select_existing_container">
        <div className="select_label">Select Existing Template</div>
        <div className="select_save_area">
          <select className="form-control custom_select">
            <option>Campaign 1137</option>
            <option>hai</option>
            <option>hai</option>
            <option>hai</option>
            <option>hai</option>
            <option>hai</option>
          </select>
          <button className="button_style">
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
          <button className="button_style">
            <div className="button_text_area">
              <span
              // className={`${this.state.isLoading ? "loading_spinner" : ""}`}
              ></span>
              <span>Create New Campaign</span>
            </div>
          </button>
        </div>
      </div>
    );
  }
}

export default SelectExistingTemplate;
