import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  Container,
  Greet,
  Heading,
  Input,
  Oscar,
  Person,
  PersonList,
  Status,
} from "./component";
import { Private } from "./component/authen/Private";
import { Profile } from "./component/authen/Profile";

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
      <Button
        handleClick={(event, id) => console.log("Lmao", event, "id", id)}
      />
      <Container styles={{ border: "1px solid black", padding: "20px 10px" }} />
      <Person name={{ first: "Man", last: "Minh" }} job="Con cac" />
      <Private isLoggedIn={true} component={Profile} />
    </div>
  );
}

export default App;
