import React, { useState } from "react";
import { Modal } from "react-bootstrap";

import "./step.css";
import Campaign from "./Campaign";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const config = [
  {
    title: "Campaign",
    component: Campaign
  },
  {
    title: "Merchant",
    component: Step2
  },
  {
    title: "Products",
    component: Step3
  },
  {
    title: "Affiliates",
    component: Step4
  }
];

function StepWizard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSteps = config.length;

  const _renderNumber = () => {
    return config.map((step, i) => (
      <div
        className={`separate_number ${i <= activeIndex ? "active" : ""}`}
        key={i}
      >
        <div className={`number ${i <= activeIndex ? "active" : ""}`}>
          {i + 1}
        </div>
        <span style={{ position: "absolute", left: -14 }}>{step.title}</span>
      </div>
    ));
  };

  const _renderStep = () => {
    const StepComponent = config[activeIndex].component;
    return <StepComponent moveStep={type => _moveStep(type)} />;
  };
  
  const _moveStep = type => {
    if (type === "NEXT") {
      if (activeIndex + 1 !== config.length) {
        setActiveIndex(activeIndex + 1);
      }
    } else {
      if (activeIndex - 1 !== -1) {
        setActiveIndex(activeIndex - 1);
      }
    }
  };

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
            <div className="number_area">{_renderNumber()}</div>
          </div>
          <div className="body_container">{_renderStep()}</div>
          <div className="footer">
            {activeIndex + 1 !== totalSteps && (
              <button
                className="skip-button"
                onClick={() => _moveStep("NEXT")}
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

export default StepWizard;
