import React, { useState } from "react";
import "./Plan.css";
import arcade from "../../img/arcade.svg";
import advenced from "../../img/advenced.svg";
import pro from "../../img/pro.svg";

export default function Plan({ setCurrentStep, currentStep, form, setForm }) {
  const savePlan = (plan) => {
    if (form.billingMonth) {
      setForm({
        ...form,
        plan: { name: plan.title, price: plan.priceMonth },
      });
    } else if (form.billingYear) {
      setForm({
        ...form,
        plan: { name: plan.title, price: plan.priceYear },
      });
    }
  };

  const changePlus = () => {
    setCurrentStep(currentStep + 1);
  };
  const changeMines = () => {
    setCurrentStep(currentStep - 1);
  };

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
                    {form.billingMonth
                      ? `$${element.priceMonth}/mo`
                      : `$${element.priceYear}/yr`}
                  </p>
                  <p></p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="switch">
        <p>monthly</p>
        <div className="switchBtn">
          <div className="circle"></div>
        </div>
        <p>yearly</p>
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
