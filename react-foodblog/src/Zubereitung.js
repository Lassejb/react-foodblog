import React from 'react';
import ReactDOM from '.App/Zubereitung';
import './index.css';
import App from './Zubereitungschritte';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
function App() {
  return (
    <div className='Zubereitung'>
      <header className='Zubereitung'>
        <h1>schnelle vegane Knoblauchbrötchen</h1>
      </header>
      <Zubereitung />
    </div>
  );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
