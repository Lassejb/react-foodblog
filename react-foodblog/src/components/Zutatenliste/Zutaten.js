import React from 'react';

const Zutaten = ({description, done}) => {

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