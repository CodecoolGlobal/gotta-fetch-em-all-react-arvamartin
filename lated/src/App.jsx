import  { useState } from 'react';
import Main from './components/Main';
import Pokemons from './components/Pokemons';
import Battle from './components/Battle';
import './App.css';

function App() {
  const [showPokemons, setShowPokemons] = useState(false);
  const [selectedAreaUrl, setSelectedAreaUrl] = useState(null);
  const [inBattle, setInBattle] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [randomPokemon, setRandomPokemon] = useState(null);

  const handleShowPokemons = (areaUrl) => {
    setSelectedAreaUrl(areaUrl);
    setShowPokemons(true);
    setInBattle(false);
  };

  const handleBattleStart = (pokemon) => {
    setSelectedPokemon(pokemon);
    setInBattle(true);
  };

  const handleBattleEnd = (isVictory) => {
    setInBattle(false);
    setShowPokemons(false);
    // Additional logic for victory or defeat
  };

  return (
    <div>
      {inBattle ? (
        <Battle 
          userPokemon={selectedPokemon} 
          randomPokemon={randomPokemon} 
          onBattleEnd={handleBattleEnd} 
        />
      ) : showPokemons ? (
        <Pokemons 
          areaUrl={selectedAreaUrl} 
          onBack={() => setShowPokemons(false)} 
          onBattle={handleBattleStart} 
          setRandomPokemon={setRandomPokemon} 
        />
      ) : (
        <Main onShowPokemons={handleShowPokemons} />
      )}
    </div>
  );
}

export default App;
