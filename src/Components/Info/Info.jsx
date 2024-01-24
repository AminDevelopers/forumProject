import React, { useState } from "react";
import "./Info.css";

export default function Info(props) {
  // input value
  const [inputValue, setInputValue] = useState("");
  const [inputValueOne, setInputValueOne] = useState("");
  const [inputValueTwo, setInputValueTwo] = useState("");

  const myInput = (e) => {
    setInputValue(e.target.value);
  };
  const myInputOne = (e) => {
    setInputValueOne(e.target.value);
  };
  const myInputTwo = (e) => {
    setInputValueTwo(e.target.value);
  };

  const change = () => {
    if (inputValue !== "" && inputValueOne !== "" && inputValueTwo !== "") {
      props.setCurrentStep(props.currentStep + 1);
    }
  };

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
            <p>{inputValue} </p>
          </div>
          <input onChange={myInput} type="text" placeholder="Vingt-Six" />
        </div>
        <div className="inputItem">
          <div className="inputValue">
            <p>Your email is:</p>
            <p> {inputValueOne} </p>
          </div>
          <input
            onChange={myInputOne}
            type="email"
            placeholder="example@hotmail.com"
          />
        </div>
        <div className="inputItem">
          <div className="inputValue">
            <p>Your phone number is:</p>
            <p> {inputValueTwo} </p>
          </div>
          <input onChange={myInputTwo} type="tel" placeholder="+32498763258" />
        </div>
      </div>
      <div className="btn">
        <button onClick={change}>next step</button>
      </div>
    </div>
  );
}
