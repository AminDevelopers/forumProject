import React, { useState } from "react";
import data from "./data.json";
import "./SideBar.css";

export default function SideBar() {
  return (
    <div className="SideBar">
      <div className="content">
        {data.map((element) => {
          return (
            <div className="flex" key={data.id}>
              <h2 className="numbers"> {element.id} </h2>
              <div className="block">
                <p> {element.step} </p>
                <h2>{element.title}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
