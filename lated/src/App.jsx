import  { useState } from 'react';
import Main from './components/Main';
import Pokemons from './components/Pokemons';
import './App.css';

function App() {
  const [showPokemons, setShowPokemons] = useState(false);

  // A gomb kattintásának kezelése az állapot változtatásával
  function handleShowPokemons() {
    setShowPokemons(true);
  }

  return (
    <div>
      {showPokemons ? (
        <Pokemons />
      ) : (
        <Main onShowPokemons={handleShowPokemons} />
      )}
    </div>
  );
}

export default App;
