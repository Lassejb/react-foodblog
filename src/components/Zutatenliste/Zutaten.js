

import React/*, { useState, useEffect }*/ from 'react';
import 'C:/Users/lenas/Documents/LENA/Uni/Semester 3/BSI 1/Ordner/react-foodblog/src/assets/text.json'

const Zutaten = ({ description, done }) => {

  /*const [zutat, setZutaten] = useState([]);
  
   useEffect(() => {
      setZutaten(zutat);
    }, []);*/

    const changeZutat = () => {
      console.log("hallo");
    };

  return (
    <div>
      <div 
        className={
          done 
            ? "flex justify-between items-center p-2 bg-green-500"
            : "flex justify-between items-center p-2 bg-red-500"
        }
      >
        <h1 className = "text-lg cursor-pointer" onClick={changeZutat}>
          {description}
        </h1>
      </div>
    </div>     
  );
};

export default Zutaten; 
