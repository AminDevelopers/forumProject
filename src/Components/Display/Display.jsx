import React, { useState } from "react";
import "./Display.css";
import SideBar from "../SideBar/SideBar";
import Info from "../Info/Info";
import Plan from "../Plan/Plan";

export default function Display({ data }) {
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [time, setTime] = useState("monthly");
  const [miniCard, setMiniCard] = useState("");

  return (
    <div className="Display">
      <SideBar data={data} />
      {step1 ? <Info setStep1={setStep1} setStep2={setStep2} /> : null}
      {step2 ? (
        <Plan
          setTime={setTime}
          time={time}
          miniCard={miniCard}
          setMiniCard={setMiniCard}
          setStep2={setStep2}
        />
      ) : null}
    </div>
  );
}
