import React, { useState } from "react";
import "./Addons.css";

export default function Addons({ currentStep, setCurrentStep, setForm, form }) {
  const [selectedAddons, setSelectedAddons] = useState([]);

  const changePlus = () => {
    const addonsTotalPrice = selectedAddons.reduce(
      (total, addon) => total + addon.price,
      0
    );

    setSelectedAddons((updatedAddons) => {
      setForm((prevForm) => ({
        ...prevForm,
        addons: updatedAddons,
        addonsTotalPrice: addonsTotalPrice,
      }));

      setCurrentStep(currentStep + 1);
      return updatedAddons;
    });
  };

  const changeMines = () => {
    setCurrentStep(currentStep - 1);
  };

  const data = [
    {
      title: "Online service",
      subtitle: "Acces to multiplayer games",
      price: 1,
    },
    {
      title: "Larger storage",
      subtitle: "Extra 1TB of cloud save",
      price: 2,
    },
    {
      title: "Customizable Profile",
      subtitle: "Custom theme on your profile",
      price: 3,
    },
  ];

  const handleAddonChange = (addon) => {
    setSelectedAddons((prevAddons) => {
      const newAddons = prevAddons.some(
        (selectedAddon) => selectedAddon.title === addon.title
      )
        ? prevAddons.filter(
            (selectedAddon) => selectedAddon.title !== addon.title
          )
        : [...prevAddons, addon];

      return newAddons;
    });
  };

  return (
    <div className="Addons">
      <div className="topAddons">
        <h1>Pick add-ons </h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <div className="adds">
        {data.map((element, index) => {
          return (
            <div key={index} className="item">
              <input
                type="checkbox"
                className="check"
                checked={selectedAddons.some(
                  (addon) => addon.title === element.title
                )}
                onChange={() => handleAddonChange(element)}
              />
              <div className="block">
                <h3> {element.title} </h3>
                <p> {element.subtitle}</p>
              </div>
              <div className="addPrice">
                <p>${element.price}</p>
              </div>
            </div>
          );
        })}
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
