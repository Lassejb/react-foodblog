import React from 'react';
import Zutaten from './Zutaten';
import jsonData from '../../assets/text.json';

const Zutatenliste = ({ value }) => {

  const Zutaten2 = jsonData[value].Zutaten;
  

  const durchstreichen = (event) => {
    const element = event.target;
    if (element.style.textDecoration === "line-through") {
      element.style.textDecoration = "none";
    } else {
      element.style.textDecoration = "line-through";
    }
  };

  console.log('Zutaten:', Zutaten2);

  return (
    <div>
      <div>
        <h1>Zutatencheck:</h1>
      </div>
      <small>
      {Zutaten2.map((item, index) => {
        return (
          <Zutaten
            key={index}
            description={item.name} 
            durchstreichen={durchstreichen}
          />
        )
      })}
      </small>
    </div>
  );
};

export default Zutatenliste;

