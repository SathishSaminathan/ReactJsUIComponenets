import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Overlay,
  Tooltip,
  ButtonToolbar,
  OverlayTrigger,
  Button,
  Row,
  Col
} from "react-bootstrap";

class NewCampaign extends Component {
  state = {
    isQualityAssuranceEnable: null,
    isPinlessDebitEnable: null
  };
  render() {
    const { selectTemplate } = this.props;
    return (
      <div className="new_product_container">
        <div className="container-fluid page">
          <h4 className="campaign-heading" style={{}}>
            Create New Campaign
          </h4>
          <div className="row">
            <div className="col-xl-9">
              <Form>
                <FormGroup>
                  <ControlLabel className="primary-black">
                    Campaign Name
                  </ControlLabel>
                  <FormControl placeholder="Enter campaign" />
                </FormGroup>
              </Form>
            </div>
            <div className="col-xl-3">
              <button
                className="button_style"
                style={{ marginLeft: 10 }}
                onClick={() => {
                  selectTemplate();
                }}
              >
                <div className="button_text_area">
                  <span
                  // className={`${this.state.isLoading ? "loading_spinner" : ""}`}
                  ></span>
                  <span>Cancel</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewCampaign;
