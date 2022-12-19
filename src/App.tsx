import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Greet, Heading, Oscar, Person, PersonList, Status } from "./component";

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
      <Greet name="Man" isLoggedIn={true}></Greet>
      <Status status={"success"} />
      <Oscar>
        <Heading>And the Awards goes to Minh Man</Heading>
      </Oscar>
    </div>
  );
}

export default App;
