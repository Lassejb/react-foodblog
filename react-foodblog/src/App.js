import './App.css';
import Zutatenliste from "./components/Zutatenliste/Zutatenliste";

import Single_post from "./components/single_post/Single_post";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Single_post></Single_post>
      </header>
      <h1 className ="max-w-xl m-auto bg-organge-100 mt-20">
        <Zutatenliste />
      </h1>
    </div>
  );
}

export default App;
