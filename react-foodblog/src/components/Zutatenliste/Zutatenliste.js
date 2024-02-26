import React from 'react';
import Zutaten from './Zutaten';
import {useState, useEffect} from "react";


const allZutaten = [
  {"description": "3 Zwiebeln", done: false},
  {"description": "500g Nudeln", done: true},
  {"description": "200g passierte Tomaten", done: false}
];


const Zutatenliste = () => {
  const [Zutaten, setZutaten] = useState(allZutaten);
  const [opencount, countOpenZutaten] = useState(0); 

  const countOpen = () => {
    const doneZutaten = Zutaten.filter((item) => {
      return !item.done
    });
    countOpenZutaten(doneZutaten.length);
  };

  useEffect(() => {
    countOpen(); 
  }, [opencount]);

  return (
    <div className ="shadow-sm hover:shadow-lg">
      <div className = "text-center bg-orange-300 text-3xl py-4 font-semibold">
        <h1>Zutatencheck:</h1>
        <h2>Noch benötigte Zutaten: {opencount}</h2>
      </div>
      {Zutaten.map((item, index) => {
        return (
          <Zutaten 
            description={item.description} 
            done={item.done}>
            key=(index)
          </Zutaten>
        )
      })}

    </div>
  )
}

export default Zutatenliste;