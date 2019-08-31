import React, { Component } from "react";

import "./step.css";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";

class StepWizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      steps: [
        {
          component: (
            <Step1
              nextStep={() => this._nextStep()}
              prevStep={() => this._prevStep()}
            />
          )
        },
        {
          component: (
            <Step2
              nextStep={() => this._nextStep()}
              prevStep={() => this._prevStep()}
            />
          )
        },
        {
          component: (
            <Step3
              nextStep={() => this._nextStep()}
              prevStep={() => this._prevStep()}
            />
          )
        },
        {
          component: (
            <Step4
              nextStep={() => this._nextStep()}
              prevStep={() => this._prevStep()}
            />
          )
        },
        {
          component: (
            <Step5
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
    const totalSteps = steps.length;
    let template = [];
    for (let i = 0; i < totalSteps; i++) {
      template.push(
        <div className="separate_number" key={i}>
          <div className={`number ${i <= activeIndex ? "active" : ""}`}>
            {i + 1}
          </div>
        </div>
      );
    }
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
      <div className="main_container">
        <div className="header">
          <div className="number_area">{this._renderNumber()}</div>
        </div>
        <div className="body_container">{this._renderStep()}</div>
        <div className="footer">
          {activeIndex + 1 !== totalSteps && (
            <button
              className="skip"
              onClick={() => this._nextStep()}
              disabled={activeIndex + 1 === totalSteps}
            >
              Skip this step
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default StepWizard;
