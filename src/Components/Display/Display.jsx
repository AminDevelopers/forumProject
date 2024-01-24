import React, { useState } from "react";
import "./Display.css";
import SideBar from "../SideBar/SideBar";
import Info from "../Info/Info";
import Plan from "../Plan/Plan";

export default function Display({ data }) {
  const [currentStep, setCurrentStep] = useState(0);

  const [form, setForm] = useState([
    {
      plan: {},
      options: [],
      billingMonth: true,
      billingYear: false,
    },
  ]);

  let displayStep;

  if (currentStep === 0) {
    displayStep = (
      <Info setCurrentStep={setCurrentStep} currentStep={currentStep} />
    );
  } else if (currentStep === 1) {
    displayStep = (
      <Plan
        form={form}
        setForm={setForm}
        setCurrentStep={setCurrentStep}
        currentStep={currentStep}
      />
    );
  }

  return (
    <div className="Display">
      <SideBar data={data} />
      {displayStep}
    </div>
  );
}
