import React from 'react';

const zubereitungsschritte = [
  "Den Backofen auf 180 Grad vorheizen",
  "Die Knoblauchbutter vorbereiten, indem Sie die weiche Butter, behackten Knoblauch, Petersilie und Salz vermischen",
  "Die Brötchen halbieren und die Knoblauchbutter großzügig auf beiden Seiten verteilen",
  "Die Brötchen für etwa 10 Minuten im vorgeheizten Backofen backen, bis sie goldbraun sind",
  "Herausnehmen und servieren"
];

function zubereitungsschritte() {
  return 
    <div>
      <h2>Zubereitung</h2>
      <ol>
        {zubereitungsschritte.map((schritt, index) => (
          <li key={index}>{schritt}</li>
        ))}
      </ol>
    </div>
  ;
}

function Zubereitungschritte() {
  return (
    <div id="Zubereitungschritte">
      <h2>Zubereitung</h2>
      <Zubereitung zubereitungsschritte={zubereitungsschritte} />
    </div>
  );
}

export default Zubereitungschritte;

