import React, { useState, useEffect, useCallback } from 'react';
import Zutaten from './Zutaten';
<<<<<<< HEAD
import jsonData from 'C:/Users/lenas/Documents/LENA/Uni/Semester 3/BSI 1/Ordner/react-foodblog/src/assets/text.json';
=======
import textData from '../../assets/text.json';
>>>>>>> be1b9192f9513b4226600a7c194af76ee15c2c0a

const Zutatenliste = () => {
  const [zutaten, setZutaten] = useState([]);
  
  const countOpen = useCallback(() => {
    return zutaten.filter(item => !item.done).length;
  }, [zutaten]);

  useEffect(() => {
    const fetchZutaten = async () => {
      try {
        //const zutatenData = await fetch(htmlData);
        //const zutatenJson = await zutatenData.json();
        setZutaten(jsonData);
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
      

      {zutaten.map((item, index) => {
        return (
          <Zutaten
            key={index}
            description={item.description} 
            done={item.done}
          />
        )
      })}
    </div>
  );
};

export default Zutatenliste;

