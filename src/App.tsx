import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { BackendResponse, Person } from "./types";
import { isTemplateExpression } from "typescript";
import fetching from "./Refactory";
import { NewFunctionCards } from "./NewFunctionCards";


function App() {
  const [personArray, setPersonArray] = useState<Person[]>([]);
  const [hoveredItem, setHoveredItem] = useState<Person>();
  const [card, setCard] = useState<any>();
  const [clicedCard, setClickedCard] = useState<any>()
  

  useEffect(fetching);

  const dateOfBirths = personArray
    .filter((item) => item.dob.age > 30)
    .map((item) => item);

  const images = dateOfBirths.map((item) => {
    return ();
  });
  return <div className="App">{images}</div>;
}

export default App;

