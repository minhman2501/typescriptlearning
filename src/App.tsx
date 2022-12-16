import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Greet, Person, PersonList } from "./component";

function App() {
  const personName = {
    first: "Man",
    last: "Pham",
  };

  const nameList = [
    {
      first: "Man",
      last: "Pham",
    },
    {
      first: "Tri",
      last: "Pham",
    },
    {
      first: "Duy",
      last: "Pham",
    },
    {
      first: "Vien",
      last: "Pham",
    },
  ];
  return (
    <div className="App">
      <Greet name={"Man"} customGreet={"Lmao rang len"} isLoggedIn={true} />
      <Person name={personName} job={"Engineer"} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
