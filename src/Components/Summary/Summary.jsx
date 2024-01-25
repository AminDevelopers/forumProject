import React from "react";
import "./Summary.css";

export default function Summary({ currentStep, setCurrentStep }) {
  const changePlus = () => {
    setCurrentStep(currentStep + 1);
  };

  const changeMines = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="Summary">
      <div className="topSummary">
        <h1>Finishing up </h1>
        <p>Double check everything looks OK before confirming.</p>
      </div>
      <div className="finish"></div>
      <div className="btn">
        <button id="firstBtnd" onClick={changeMines}>
          go back
        </button>
        <button id="secondBtnSummary" onClick={changePlus}>
          confirm
        </button>
      </div>
    </div>
  );
}
