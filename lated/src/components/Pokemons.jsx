import { useEffect, useState } from "react";

function Pokemons({ areaUrl }) {
  const [pokemons, setPokemons] = useState([]);

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

        setPokemons(fetchedPokemons);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    if (areaUrl) {
      fetchPokemons();
    }
  }, [areaUrl]);

  return (
    <div className="custom-container" style={{ background: 'url("https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/others_3/SI_Pokemon_image1280w.jpg")' }}>
      {pokemons.map((pokemon, index) => (
        <div key={index}>
          <img src={pokemon.image} alt={`Image of ${pokemon.name}`} />
          <p>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
          <div>
            {pokemon.stats.map((stat, statIndex) => (
              <p key={statIndex}>{`${stat.statName}: ${stat.statValue}`}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Pokemons;
