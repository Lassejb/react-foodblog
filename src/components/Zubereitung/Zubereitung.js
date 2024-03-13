import React from 'react';
import jsonData from "../../assets/text.json";

function Zubereitungschritte({ value }) {
  const Schritte = jsonData[value].Zubereitung;
  return (
    <div id="Zubereitungschritte">
      <h2>Zubereitung</h2>
      <ol>
        {Schritte.map((schritt, index) => (
          <li key={index}>{schritt}</li>
        ))}
      </ol>
    </div>
  );
}

export default Zubereitungschritte;

