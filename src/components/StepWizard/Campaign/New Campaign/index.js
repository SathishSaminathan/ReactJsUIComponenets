import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class NewCampaign extends Component {
  render() {
    const { selectTemplate } = this.props;
    return (
      <div className="new_product_container">
        <Row>
          <Col>New Product</Col>
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
        </Row>
      </div>
    );
  }
}

export default NewCampaign;
