import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Greet } from "./component/Greet";

function App() {
  return (
    <div className="App">
      <Greet name={"Lmao"} customGreet={"Lmao rang len bro"} />
    </div>
  );
}

export default App;
