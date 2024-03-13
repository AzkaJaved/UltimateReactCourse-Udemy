import React from "react";
import { useState } from 'react';
// import '../App.css'

const messages=[
  "Learn React ⚛",
  "Apply for jobs 👱‍♀️",
  "Invest your new income 🤑"
]

const Steps = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  let handlePrevious = () => {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  };
  let handleNext = () => {
    if (step < 3) setStep((s) => s + 1);
  };
  let toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <p className="close" style={{ cursor: "pointer" }} onClick={toggleIsOpen}>
        &times;
      </p>
      {isOpen ? (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            Step:{step} : {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              onClick={handlePrevious}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              className="btn previous"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              className="btn next"
            >
              Next
            </button>
          </div>
        </div>
      ) : ("")}
    </>
  );
};

export default Steps;
