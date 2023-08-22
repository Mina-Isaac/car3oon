import React, { useEffect, useState } from "react";
import "./App.css";
import { Person } from "./types";
import { getData, selectPerson } from "./Redux/PersonSlice";
import { useAppDispatch, useAppSelector } from "./Redux/Hooks";



function App() {
 
  
  const [hoveredItem, setHoveredItem] = useState<Person>();
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(
    undefined
  );
  
  const dispatch=useAppDispatch();
  useEffect(() => {
        dispatch(getData())    
  }, []);

  // let selectedIndex: number | undefined = undefined;

  const personArray = useAppSelector(selectPerson);

  const images = personArray.list.map((item, index) => {
    return (
      <div

        onClick={() => setSelectedIndex(index)}
        onMouseEnter={() => {
          setHoveredItem(item)
        }}
        onMouseLeave={() => setHoveredItem(undefined)}
      >
        <div className="parent">
          <div className="child1">
            <img src={item.picture.large} />
          </div>
          <div className="child2">
            <h2>{item.name.title}: {item.name.first} {item.name.last}</h2>
            <p>Tel: {item.phone}</p>
          </div>
        </div>

      </div>




    );
  });
  return (
    <div className="App">
      {selectedIndex !== undefined && (


        <div className="afterEffect">
          <h1>
            {personArray.list[selectedIndex].name.first}
          </h1>
          <p>
            {personArray.list[selectedIndex].phone}
          </p>

        </div>

      )}
      {images}
    </div>
  );
}

export default App;
function newFunction(): any {
  return getData();
}

