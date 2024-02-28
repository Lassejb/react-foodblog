import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Overview from './components/overview/Overview';
import Single_post from './components/single_post/Single_post';
import AboutUs from './components/aboutus/AboutUs';
import Recipes from './components/recipes/Recipes';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/recipes/single_post" element={<Single_post />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
