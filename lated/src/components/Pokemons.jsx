import { useEffect, useState } from "react";
import usersPokemon from "./pokemonUrls";

function Pokemons({ areaUrl, onBack }) {
  const [randomPokemon, setRandomPokemon] = useState(null);
  

  useEffect(() => {
    async function fetchPokemons() {
      try {
        const response = await fetch(areaUrl);
        const areaData = await response.json();
        const encounters = areaData.pokemon_encounters;

        const fetchedPokemons = await Promise.all(encounters.map(async (encounter) => {
          const pokemonResponse = await fetch(encounter.pokemon.url);
          const pokemonData = await pokemonResponse.json();
          return {
            name: pokemonData.name,
            image: pokemonData.sprites.front_default,
            stats: pokemonData.stats.map(stat => ({
              statName: stat.stat.name,
              statValue: stat.base_stat
            }))
          };
        }));

        
        if (fetchedPokemons.length > 0) {
          const randomIndex = Math.floor(Math.random() * fetchedPokemons.length);
          setRandomPokemon(fetchedPokemons[randomIndex]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    if (areaUrl) {
      fetchPokemons();
    }
  }, [areaUrl]);

  return (
    <div className="custom-cardcontainer" style={{ background: 'url("https://cdn.wallpapersafari.com/88/72/3LOJ5F.jpg")' }}>
      <button className="backbtn" onClick={onBack}></button>
      {randomPokemon && (
        <div className="card">
          <h4>Your Enemy</h4>
          <img src={randomPokemon.image} alt={`Image of ${randomPokemon.name}`} style={{ width: '85%', height: '85%', imageRendering: 'pixelated', }} />
          <p>{randomPokemon.name.charAt(0).toUpperCase() + randomPokemon.name.slice(1)} </p>
          <div>
            {randomPokemon.stats.map((stat, index) => (
              <p key={index}>{`${stat.statName}: ${stat.statValue}`}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Pokemons;
