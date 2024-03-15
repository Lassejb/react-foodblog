import React, { useState /*useEffect*/ } from 'react';
import '../../assets/text.json'

const Zutaten = ({ description, done, durchstreichen }) => {

  const [isDone, setIsDone] = useState(done);

  const toggleDone = () => {
    setIsDone(!isDone);
  };

  return (
    
    <div>
      <div 
          onClick={toggleDone} 
          style={{ cursor: "pointer" }} 
      >
        <h1 className="text-lg cursor-pointer" onClick={durchstreichen}>
          {description}
        </h1>
      </div>
    </div>     
  );
};

export default Zutaten; 
