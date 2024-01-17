import { useEffect, useState } from "react";
import usersPokemon from "./pokemonUrls";

function Pokemons({ areaUrl, onBack }) {
  const [randomPokemon, setRandomPokemon] = useState(null);
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function fetchPokemon(url) {
      const response = await fetch(url);
      const data = await response.json();
      return {
        name: data.name,
        image: data.sprites.front_default,
        stats: data.stats.map(stat => ({
          statName: stat.stat.name,
          statValue: stat.base_stat
        }))
      };
    }

    async function fetchPokemons() {
      try {
        // Fetching user's pok
        const userPokemons = await Promise.all(usersPokemon.map(url => fetchPokemon(url)));
        setPokemonList(userPokemons);

        //fetch random pok
        if (areaUrl) {
          const areaResponse = await fetch(areaUrl);
          const areaData = await areaResponse.json();
          const encounters = areaData.pokemon_encounters;
          if (encounters.length > 0) {
            const randomIndex = Math.floor(Math.random() * encounters.length);
            const randomEncounter = encounters[randomIndex];
            const randomAreaPokemon = await fetchPokemon(randomEncounter.pokemon.url);
            setRandomPokemon(randomAreaPokemon);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchPokemons();
  }, [areaUrl]);

  return (
    <div>
      <div className="enemy-container" style={{ background: 'url("https://cdn.wallpapersafari.com/88/72/3LOJ5F.jpg")' }}>
        <button className="backbtn" onClick={onBack}></button>
        {randomPokemon && (
          <div className="enemycard">
            <h4>Random Enemy</h4>
            <img src={randomPokemon.image} alt={`Image of ${randomPokemon.name}`} style={{ width: '85%', height: '85%', imageRendering: 'pixelated' }} />
            <p>{randomPokemon.name.charAt(0).toUpperCase() + randomPokemon.name.slice(1)}</p>
            <div>
              {randomPokemon.stats.map((stat, index) => (
                <p key={index}>{`${stat.statName}: ${stat.statValue}`}</p>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="friend-container">
        {pokemonList.map((pokemon, index) => (
          <div className="friendcard" key={index}>
            <h4>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h4>
            <img src={pokemon.image} alt={`Image of ${pokemon.name}`} style={{ width: '85%', height: '85%', imageRendering: 'pixelated' }} />
            <div>
              {pokemon.stats.map((stat, statIndex) => (
                <p key={statIndex}>{`${stat.statName}: ${stat.statValue}`}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pokemons;
