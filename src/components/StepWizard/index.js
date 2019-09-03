import React, { Component } from "react";
import { Modal } from "react-bootstrap";

import "./step.css";
import Campaign from "./Campaign";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

class StepWizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      steps: [
        {
          title: "Campaign",
          component: (
            <Campaign
              nextStep={() => this._nextStep()}
              prevStep={() => this._prevStep()}
            />
          )
        },
        {
          title: "Merchant",
          component: (
            <Step2
              nextStep={() => this._nextStep()}
              prevStep={() => this._prevStep()}
            />
          )
        },
        {
          title: "Products",
          component: (
            <Step3
              nextStep={() => this._nextStep()}
              prevStep={() => this._prevStep()}
            />
          )
        },
        {
          title: "Affiliates",
          component: (
            <Step4
              nextStep={() => this._nextStep()}
              prevStep={() => this._prevStep()}
            />
          )
        }
      ]
    };
  }

  _renderNumber = () => {
    const { activeIndex, steps } = this.state;
    let template = [];
    steps.map((step, i) => {
      template.push(
        <div
          className={`separate_number ${i <= activeIndex ? "active" : ""}`}
          key={i}
        >
          <div className={`number ${i <= activeIndex ? "active" : ""}`}>
            {i + 1}
          </div>
          <span style={{ position: "absolute", left: -14 }}>{step.title}</span>
        </div>
      );
    });
    return template;
  };

  _renderStep = () => {
    let template = [];
    const { activeIndex, steps } = this.state;

    template = steps.find((step, i) => i === activeIndex);
    return template.component;
  };

  _nextStep = () => {
    const { activeIndex, steps } = this.state;
    const totalSteps = steps.length;
    if (activeIndex + 1 !== totalSteps) {
      this.setState({
        activeIndex: this.state.activeIndex + 1
      });
    }
  };

  _prevStep = () => {
    const { activeIndex } = this.state;
    if (activeIndex - 1 !== -1) {
      this.setState({
        activeIndex: this.state.activeIndex - 1
      });
    }
  };

  render() {
    const { activeIndex, steps } = this.state;
    const totalSteps = steps.length;
    return (
      <Modal
        style={{ opacity: 1 }}
        show
        bsSize="lg"
        className="wizard_modal"
        aria-labelledby="contained-modal-title-vcenter"
        animation
      >
        <Modal.Body>
          <div className="main_container">
            <div className="header">
              <div className="number_area">{this._renderNumber()}</div>
            </div>
            <div className="body_container">{this._renderStep()}</div>
            <div className="footer">
              {activeIndex + 1 !== totalSteps && (
                <button
                  className="skip-button"
                  onClick={() => this._nextStep()}
                  disabled={activeIndex + 1 === totalSteps}
                >
                  Skip this step
                </button>
              )}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default StepWizard;
