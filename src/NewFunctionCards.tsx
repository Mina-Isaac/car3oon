import React from "react";
import { Person } from "./types";

export function NewFunctionCards(setCard: React.Dispatch<any>, item: Person, setHoveredItem: React.Dispatch<React.SetStateAction<Person | undefined>>, card: any, setClickedCard: React.Dispatch<any>, clicedCard: any, hoveredItem: Person | undefined): JSX.Element {
  return <div
    style={{ borderRadius: "50%", padding: "20px", position: "relative" }}
    onClick={() => setCard(item.name)}
    onDoubleClick={() => { setCard(undefined); }}

    onMouseEnter={() => {
      setHoveredItem(item);
    }}
    onMouseLeave={() => setHoveredItem(undefined)}
  >
    {card === item.name && <div
      className="card"
      onClick={() => { setClickedCard(card); }}
    >
      {item.name.first}
      {clicedCard === card && <div className="phone"> {item.phone} </div>}
    </div>}
    <img src={item.picture.large} alt="صورة روح امه" />
    {hoveredItem === item && (
      <div className="name-container">{item.name.first}</div>
    )}
  </div>;
}
