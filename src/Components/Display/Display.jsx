import React from "react";
import "./Display.css";
import SideBar from "../SideBar/SideBar";
import Info from "../Info/Info";

export default function Display({ data }) {
  return (
    <div className="Display">
      <SideBar data={data} />
      <Info />
    </div>
  );
}
