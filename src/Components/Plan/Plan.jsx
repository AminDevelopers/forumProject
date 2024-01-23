import React from "react";
import "./Plan.css";
import arcade from "../../img/arcade.svg";
import advenced from "../../img/advenced.svg";
import pro from "../../img/pro.svg";

export default function Plan({ setMiniCard, miniCard }) {
  const data = [
    {
      id: 1,
      image: arcade,
      title: "Arcade",
      price: 9,
    },
    {
      id: 2,
      image: advenced,
      title: "Advanced",
      price: 12,
    },
    {
      id: 3,
      image: pro,
      title: "Pro",
      price: 15,
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
            <div
              key={index}
              className={`card ${
                miniCard === element.title ? "effetCard" : ""
              }`}
              onClick={() => setMiniCard(element.title)}
            >
              <img src={element.image} alt={element.image} />
              <div className="info">
                <h4> {element.title} </h4>
                <div className="price">
                  <p>${element.price}</p>
                  <p></p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="switch"></div>
    </div>
  );
}
