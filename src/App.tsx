import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { BackendResponse, Person } from "./types";
import ts, { isTemplateExpression } from "typescript";
import { UserCards } from "./Refactory";




function App() {
  const [personArray, setPersonArray] = useState<Person[]>([]);
  const [hoveredItem, setHoveredItem] = useState<Person>();
  const [card, setCard] = useState<any>();
  const [clicedCard, setClickedCard] = useState<any>()
  

  useEffect(() => {
    axios
    .get<BackendResponse>("https://randomuser.me/api/?results=10")
      .then((res) => setPersonArray(res.data.results));
  }, []);

  const dateOfBirths = personArray
    .filter((item) => item.dob.age > 30)
    .map((item) => item);
   //@ts-ignore
  const images = dateOfBirths.map(<UserCards
  //@ts-ignore
    setCard={setCard}
    setHoveredItem={setHoveredItem} 
    card= {card}
    setClickedCard={setClickedCard}
    clicedCard={clicedCard}
    hoveredItem={hoveredItem}/>);
    //@ts-ignore
  return <div className="App">{images}</div>;
}

export default App;


