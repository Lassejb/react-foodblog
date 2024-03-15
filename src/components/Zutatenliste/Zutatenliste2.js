import React, { useState, useEffect, useCallback } from 'react';
import jsonData from '../../assets/text.json';




function Zutatenliste({ value }) {
  const Zutaten2 = jsonData[value].Zutaten;
  return (
    <div id="Zubereitungschritte">
      <h2>Zubereitung</h2>
      <ol>
        {Zutaten2.map((zutaten, index) => (
          <li key={index}>{zutaten.name}</li>
        ))}
      </ol>
    </div>
  );
}




export default Zutatenliste;

