import React, { useState } from "react";
import "./Info.css";

export default function Info() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="Info">
      <div className="top">
        <h1>Personal info</h1>
        <p>please provide your name, email address, and phone number.</p>
      </div>
      <div className="input">
        <div className="inputItem">
          <div className="inputValue">
            <p>Your name is:</p>
            <p> {inputValue} </p>
          </div>
          <input type="text" placeholder="Vingt-Six" />
        </div>
        <div className="inputItem">
          <div className="inputValue">
            <p>Your email is:</p>
            <p> {inputValue} </p>
          </div>
          <input type="email" placeholder="example@hotmail.com" />
        </div>
        <div className="inputItem">
          <div className="inputValue">
            <p>Your phone number is:</p>
            <p> {inputValue} </p>
          </div>
          <input type="tel" placeholder="+32498763258" />
        </div>
      </div>
      <div className="btn">
        <button>next step</button>
      </div>
    </div>
  );
}
