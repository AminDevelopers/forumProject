import React from "react";
import "./Addons.css";

export default function Addons({ currentStep, setCurrentStep }) {
  const changePlus = () => {
    setCurrentStep(currentStep + 1);
  };

  const changeMines = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="Addons">
      <div className="top">
        <h1>Pick add-ons </h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <div className="btn">
        <button id="firstBtnd" onClick={changeMines}>
          go back
        </button>
        <button id="secondBtn" onClick={changePlus}>
          go next
        </button>
      </div>
    </div>
  );
}
