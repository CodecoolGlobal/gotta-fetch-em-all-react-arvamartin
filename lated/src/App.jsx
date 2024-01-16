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

  return (
    <div>
      {showPokemons ? (
        <Pokemons areaUrl={selectedAreaUrl} />
      ) : (
        <Main onShowPokemons={handleShowPokemons} />
      )}
    </div>
  );
}

export default App;
