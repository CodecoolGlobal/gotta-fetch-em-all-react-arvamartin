import { useState } from 'react';
import Main from './components/Main';
import Pokemons from './components/Pokemons';
import './App.css';

function App() {
  const [showPokemons, setShowPokemons] = useState(false);
  const [selectedAreaUrl, setSelectedAreaUrl] = useState(null);

  function handleShowPokemons(areaUrl) {
    setSelectedAreaUrl(areaUrl);
    setShowPokemons(true);
  }
  

  const handleReset = () => {
    setShowPokemons(false);
  };

  return (
    <div>
      {showPokemons ? (
        <Pokemons areaUrl={selectedAreaUrl} onBack={handleReset} />
      ) : (
        <Main onShowPokemons={handleShowPokemons} />
      )}
    </div>
  );
}

export default App;
