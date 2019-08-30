import React, { Component } from "react";
import { Row, Col, Input, Form, Button, Select, Checkbox, Tag } from "antd";
import "./form.css";

class FormSample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isQualityAssuranceEnabled: false,
      isPinlessDebit: false
    };
  }

  componentDidMount() {}

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("values", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { Option } = Select;
    return (
      <div>
        <Row type="flex" justify="center">
          <Col xl={22}>
            <h2>Create New Campaign</h2>
            <Row gutter={16}>
              <Col xl={16}>
                <label
                  style={{
                    fontSize: 16,
                    color: "#000",
                    fontWeight: 600
                  }}
                >
                  Campaign Name
                </label>
                <Form.Item className="m-0">
                  {getFieldDecorator("campaginName", {
                    rules: [
                      { required: true, message: "Enter your Campaign Name!" }
                    ]
                  })(<Input placeholder="Campaign Name" />)}
                </Form.Item>
              </Col>
              <Col xl={8}>
                <label
                  style={{
                    fontSize: 16,
                    color: "#000",
                    fontWeight: 600
                  }}
                >
                  Currency
                </label>
                <Form.Item className="m-0">
                  {getFieldDecorator("currency", {
                    rules: [{ required: true, message: "Select Currency!" }]
                  })(
                    <Select
                      placeholder="Select Currency"
                      style={{ width: "100%" }}
                    >
                      <Option value="USD">USD Us Dollar</Option>
                      <Option value="INR">INR Indian Rupee</Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col xl={8}>
                <Row
                  style={{
                    backgroundColor: "rgba(233, 233, 233, 1)",
                    width: "fit-content",
                    padding: "8px 16px",
                    marginBottom: 20
                  }}
                >
                  <h3>Basic Options</h3>
                </Row>

                <Row className="pb-15">
                  <Checkbox
                    onChange={e =>
                      this.setState(
                        {
                          isQualityAssuranceEnabled: e.target.checked
                        },
                        () => console.log(this.state.isQualityAssuranceEnabled)
                      )
                    }
                  >
                    Quality Assurance
                  </Checkbox>
                </Row>
                {this.state.isQualityAssuranceEnabled && (
                  <Row gutter={12} className="pb-15" type="flex">
                    <Col offset={2}>QA % Rate</Col>
                    <Col>
                      <Input style={{ width: "50px" }} />
                    </Col>
                  </Row>
                )}
                <Row className="pb-15">
                  <Checkbox>Must Agree</Checkbox>
                </Row>
                <Row className="pb-15">
                  <Checkbox>Quality Assurance</Checkbox>
                </Row>
              </Col>
              <Col xl={8}>
                <Row
                  style={{
                    backgroundColor: "rgba(233, 233, 233, 1)",
                    width: "fit-content",
                    padding: "8px 16px",
                    marginBottom: 20
                  }}
                >
                  <h3>Billing Options</h3>
                </Row>

                <Row className="pb-15">
                  <Checkbox
                    onChange={e =>
                      this.setState(
                        {
                          isPinlessDebit: e.target.checked
                        },
                        () => console.log(this.state.isQualityAssuranceEnabled)
                      )
                    }
                  >
                    Route to pinless debit
                  </Checkbox>
                </Row>
                {this.state.isPinlessDebit && (
                  <Row gutter={12} className="pb-15" type="flex">
                    <Col offset={2}>Pinless Routing Rate %</Col>
                    <Col>
                      <Input style={{ width: "50px" }} />
                    </Col>
                  </Row>
                )}
                <Row className="pb-15">
                  <Checkbox>Accept cash on delivery orders</Checkbox>
                </Row>
                <Row className="pb-15">
                  <Checkbox>Retail Orders</Checkbox>
                </Row>
              </Col>
              <Col xl={8}>
                <Row
                  style={{
                    // backgroundColor: "rgba(233, 233, 233, 1)",
                    width: "fit-content",
                    padding: "8px 16px"
                  }}
                >
                  {/* <h3>Basic Options</h3> */}
                </Row>

                <Row className="pb-15">
                  <Checkbox>Block Prepaid cards</Checkbox>
                </Row>
                <Row className="pb-15">
                  <Checkbox>Block Debit cards</Checkbox>
                </Row>
                <Row className="pb-15">
                  <Checkbox>Block Master cards</Checkbox>
                </Row>
                <Row className="pb-15">
                  <Checkbox>Disable External Payments</Checkbox>
                </Row>
              </Col>
            </Row>
            <Row style={{ paddingTop: 30 }}>
              <Col xl={8}>
                <Row
                  style={{
                    backgroundColor: "rgba(233, 233, 233, 1)",
                    width: "fit-content",
                    padding: "8px 16px",
                    marginBottom: 20
                  }}
                >
                  <h3>Shipping Options</h3>
                </Row>

                <Row className="pb-15">
                  <Checkbox>Capture to Shipment</Checkbox>
                </Row>
                <Row className="pb-15">
                  <Checkbox>Bundle Fullfillment</Checkbox>
                </Row>
              </Col>
              <Col xl={8}>
                <Row
                  style={{
                    backgroundColor: "rgba(233, 233, 233, 1)",
                    width: "fit-content",
                    padding: "8px 16px",
                    marginBottom: 20
                  }}
                >
                  <h3>Other Options</h3>
                </Row>
                <Row gutter={12} className="pb-15" type="flex">
                  <Col>Maximum Coupons</Col>
                  <Col>
                    <Input style={{ width: "50px" }} />
                  </Col>
                </Row>
                <Row className="pb-15">
                  <Checkbox>Chargeback Blacklist</Checkbox>
                </Row>
              </Col>
            </Row>
            <Row type="flex">
              <Col
                xl={24}
                style={{
                  border: "1px solid rgba(233, 233, 233, 1)",
                  padding: 20,
                  borderRadius: 10
                }}
              >
                <Tag closable style={{ padding: "3px 20px" }}>
                  {" "}
                  Canada
                </Tag>
                <Tag closable style={{ padding: "3px 20px" }}>
                  {" "}
                  India
                </Tag>
                <Tag closable style={{ padding: "3px 20px" }}>
                  {" "}
                  UK
                </Tag>
              </Col>
            </Row>
            <Row
              type="flex"
              justify="end"
              gutter={12}
              style={{ paddingTop: 20 }}
            >
              <Col>
                <Button style={{backgroundColor:"#19A688", borderColor:"#19A688"}} type="primary">Cancel</Button>
              </Col>
              <Col>
                <Button style={{backgroundColor:"#19A688", borderColor:"#19A688"}} type="primary" onClick={this.handleSubmit}>
                  Save & Continue
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

const Formsample = Form.create()(FormSample);

export default Formsample;
