import React, { useState, useEffect, useCallback } from 'react';
import Zutaten from './Zutaten';
import jsonData from '../../assets/text.json';

const Zutatenliste = ({ value }) => {

  const Zutaten2 = jsonData[value].Zutaten;


  const [zutaten, setZutaten] = useState([]);
  
  const countOpen = useCallback(() => {
    return zutaten.filter(item => !item.done).length;
  }, [zutaten]);

  useEffect(() => {
    const fetchZutaten = async () => {
      try {
        //const zutatenData = await fetch(htmlData);
        //const zutatenJson = await zutatenData.json();
        setZutaten(Zutaten2);
      } catch (error) {
        console.error('Fehler beim Laden der Zutaten:', error);
      }
    };

    fetchZutaten();
  }, []);

  console.log('Zutaten:', zutaten);

  return (
    <div className ="shadow-sm hover:shadow-lg">
      <div className = "text-center bg-orange-300 text-3xl py-4 font-semibold">
        <h1>Zutatencheck:</h1>
        <h2>Noch benötigte Zutaten: {countOpen()}</h2>
      </div>
      {Zutaten2.map((item, index) => {
        return (
          <Zutaten
            key={index}
            description={item.name} 
            done={item.done}
          />
        )
      })}
    </div>
  );
};

export default Zutatenliste;

