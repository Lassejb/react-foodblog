import React, { useState, useEffect, useCallback } from 'react';
import Zutaten from './Zutaten';
import textData from '../../assets/text.json';

const Zutatenliste = () => {
  const [zutaten, setZutaten] = useState([]);
  
  const countOpen = useCallback(() => {
    return zutaten.filter(item => !item.done).length;
  }, [zutaten]);

  useEffect(() => {
    const fetchZutaten = async () => {
      try {
        const zutatenData = await fetch(textData);
        const zutatenJson = await zutatenData.json();
        setZutaten(zutatenJson);
      } catch (error) {
        console.error('Fehler beim Laden der Zutaten:', error);
      }
    };

    fetchZutaten();
  }, []);

  return (
    <div className ="shadow-sm hover:shadow-lg">
      <div className = "text-center bg-orange-300 text-3xl py-4 font-semibold">
        <h1>Zutatencheck:</h1>
        <h2>Noch benötigte Zutaten: {countOpen()}</h2>
      </div>
      {zutaten.map((item, index) => {
        return (
          <Zutaten
            key={index}
            description={item.description} 
            done={item.done}>
          </Zutaten>
        )
      })}

    </div>
  )
}

export default Zutatenliste;

