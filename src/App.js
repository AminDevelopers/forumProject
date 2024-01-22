import React from "react";
import "./App.css";
import Display from "./Components/Display/Display.jsx";
import SideBar from "./Components/SideBar/SideBar.jsx";

function App() {
  return (
    <div className="App">
      <Display>
        <SideBar />
      </Display>
    </div>
  );
}

export default App;
