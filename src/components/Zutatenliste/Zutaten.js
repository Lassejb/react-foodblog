

import React/*, { useState, useEffect }*/ from 'react';
import '../../assets/text.json'

const Zutaten = ({ description, done }) => {

  /*const [zutat, setZutaten] = useState([]);
  
   useEffect(() => {
      setZutaten(zutat);
    }, []);*/

    const changeZutat = () => {
      
      <div 
        className={done 
          ? "flex justify-between items-center p-2 bg-green-500"
          : "flex justify-between items-center p-2 bg-red-500"
        }
      ></div>
    };
    console.log(description)
    console.log(done)

  return (
    
    <div>
      <div 
        className={done 
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
