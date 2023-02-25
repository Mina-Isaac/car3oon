import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { BackendResponse, Person } from "./types";
import { isTemplateExpression } from "typescript";

function App() {
  const [personArray, setPersonArray] = useState<Person[]>([]);
  const [hoveredItem, setHoveredItem] = useState<Person>();
  const [card, setCard] = useState<any>();

  useEffect(() => {
    axios
      .get<BackendResponse>("https://randomuser.me/api/?results=10")
      .then((res) => setPersonArray(res.data.results));
  }, []);

  const dateOfBirths = personArray
    .filter((item) => item.dob.age > 30)
    .map((item) => item);

  const images = dateOfBirths.map((item) => {
    return (
      <div
        style={{ borderRadius: "50%", padding: "20px", position: "relative" }}
        onClick={() => setCard(item.name)}
        onMouseEnter={() => {
          setHoveredItem(item);
        }}
        onMouseLeave={() => setHoveredItem(undefined)}
      >
        {card === item.name && <div>{item.name.first}</div>}
        <img src={item.picture.large} alt="صورة روح امه" />
        {hoveredItem === item && (
          <div className="name-container">{item.name.first}</div>
        )}
      </div>
    );
  });
  return <div className="App">{images}</div>;
}

export default App;
