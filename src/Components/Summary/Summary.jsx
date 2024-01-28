import React from "react";
import "./Summary.css";

export default function Summary({ form, currentStep, setCurrentStep }) {
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
      <div className="summaryDetails">
        <div className="plan">
          <p>{form.plan.name} </p>
          <p>
            ({form.billingMonth ? "monthly" : form.billingYear ? "yearly" : ""})
          </p>
          <p className="totalP">${form.plan.price}</p>
        </div>
        <div className="addons"></div>
        <p className="change" onClick={changeMines}>
          change
        </p>
        <hr />
        <div className="total">
          <p>Total:</p>
          <p className="totalP">${form.plan.price}</p>
        </div>
      </div>
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
