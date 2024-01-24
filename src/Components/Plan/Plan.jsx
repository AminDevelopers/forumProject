import React, { useState } from "react";
import "./Plan.css";
import arcade from "../../img/arcade.svg";
import advenced from "../../img/advenced.svg";
import pro from "../../img/pro.svg";

export default function Plan({ setCurrentStep, currentStep, form, setForm }) {
  const data = [
    {
      id: 1,
      image: arcade,
      title: "Arcade",
      priceMonth: 9,
      priceYear: 9 * 10,
    },
    {
      id: 2,
      image: advenced,
      title: "Advanced",
      priceMonth: 12,
      priceYear: 12 * 10,
    },
    {
      id: 3,
      image: pro,
      title: "Pro",
      priceMonth: 15,
      priceYear: 15 * 10,
    },
  ];

  const [billingPeriod, setBillingPeriod] = useState("monthly");

  const savePlan = (plan) => {
    const price =
      billingPeriod === "monthly" ? plan.priceMonth : plan.priceYear;

    setForm({
      ...form,
      plan: { name: plan.title, price: price },
    });
  };

  const changePlus = () => {
    setCurrentStep(currentStep + 1);
  };

  const changeMines = () => {
    setCurrentStep(currentStep - 1);
  };

  const toggleBillingPeriod = () => {
    setBillingPeriod((prevBillingPeriod) =>
      prevBillingPeriod === "monthly" ? "yearly" : "monthly"
    );
  };

  return (
    <div className="Plan">
      <div className="top">
        <h1>Select your plan</h1>
        <p>you have the option of monthlt or yearly billing.</p>
      </div>
      <div className="cards">
        {data.map((element, index) => {
          return (
            <div key={index} className="card">
              <img src={element.image} alt={element.image} />
              <div className="info">
                <h4> {element.title} </h4>
                <div className="price">
                  <p>
                    {billingPeriod === "monthly"
                      ? `$${element.priceMonth}/mo`
                      : `$${element.priceYear}/yr`}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="switch">
        <p
          onClick={() => setBillingPeriod("monthly")}
          className={billingPeriod === "monthly" ? "active" : ""}
        >
          monthly
        </p>
        <div className="switchBtn" onClick={toggleBillingPeriod}>
          <div
            className={`circle ${
              billingPeriod === "monthly" ? "monthly" : "yearly"
            }`}
          />
        </div>
        <p
          onClick={() => setBillingPeriod("yearly")}
          className={billingPeriod === "yearly" ? "active" : ""}
        >
          yearly
        </p>
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
