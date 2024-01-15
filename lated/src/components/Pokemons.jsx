import { useEffect, useState } from "react";

function Pokemons() {
  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);
  

  useEffect(() => {
    async function fetchPokemons() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
      const data = await response.json();
      setData(data.results);

      const imageResponses = await Promise.all(
        data.results.map(async (pokemon) => {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${pokemon.url.split('/').slice(-2, -1)[0]}/`);
          return response.json();
        })
      );
      const pokemonImages = imageResponses.map((imageData) => imageData.sprites.front_default);
      setImages(pokemonImages);
    }


    fetchPokemons();
  }, []);

  return (
    <div className="custom-container" style={{ background: 'url("https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/others_3/SI_Pokemon_image1280w.jpg")' }}>
      {data.map((pokemon, index) => (
        <p key={index}>
          {images[index] && (
            <div>
              <img src={images[index]} alt={`Image of ${pokemon.name}`} />
              
            </div>
          )}
          <br />
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          <br />

        </p>
      ))}
    </div>
  );
}

export default Pokemons;


