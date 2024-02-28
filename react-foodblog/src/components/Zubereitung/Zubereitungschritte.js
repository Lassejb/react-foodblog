import React from 'react';
import Zubereitung from './Zubereitung';
import {useState, useEffect} from "react";

function Zubereitungschritte() {
  return (
    <div id="Zubereitungschritte">
      <h2>"Zubereitung"</h2>
        <Single_post></Single_post>
      <ol>
        <li>Den Backofen auf 180 Grad vorheizen</li>
        <li>Die Knoblauchbutter vorbereiten, indem Sie die weiche Butter, behackten Knoblauch, Petersilie und Salz vermischen</li>
        <li>Die Brötchen halbieren und die Knoblauchbutter großzügig auf beiden Seiten verteilen</li>  
        <li>Die Brötchen für etwa 10 Minuten im vorgeheizten Backofen backen, bis sie goldbraun sind</li> 
      <li>Herausnehmen und servieren</li>  
       </ol>
    </div>
  );
}

export default App;
