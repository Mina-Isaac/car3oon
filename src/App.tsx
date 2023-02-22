import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { BackendResponse, Person } from "./types";

function App() {
  const [personArray, setPersonArray] = useState<Person[]>([]);
  useEffect(() => {
    axios
      .get<BackendResponse>("https://randomuser.me/api/?results=10")
      .then((res) => setPersonArray(res.data.results));
  }, []);

  const dateOfBirths = personArray
    .filter((item) => item.dob.age > 30)
    .map((item) => item.picture);
  const images = dateOfBirths.map((item) => {
    return (
      <div style={{ borderRadius: "50%", padding: "20px" }}>
        <img src={item.large} alt="صورة روح امه" />
      </div>
    );
  });
  return <div className="App">{images}</div>;
}

export default App;
