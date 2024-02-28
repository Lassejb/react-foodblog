import React from 'react';

function Zubereitung({ zubereitungsschritte }) {
  return (
    <div>
      <h2>Zubereitung</h2>
      <ol>
        {zubereitungsschritte.map((schritt, index) => (
          <li key={index}>{schritt}</li>
        ))}
      </ol>
    </div>
  );
}

export default Zubereitung;

