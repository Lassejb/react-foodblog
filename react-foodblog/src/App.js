import './App.css';

import Single_post from "./components/single_post/Single_post";
import Overview from "./components/overview/Overview";
import Zutatenliste from "./components/Zutatenliste/Zutatenliste";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Overview></Overview>
        <Single_post></Single_post>
      </header>
    </div>
  );
}

export default App;
