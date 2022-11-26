import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ({ url }) => {

  const [pokemons, setPokemons] = useState({})

  useEffect(() => {
    axios.get(url)
      .then(res => setPokemons(res.data))
  }, [])

  console.log(pokemons);

  return (
    <Link to={`/pokedex/${pokemons.id}`} className='link'>
      <div className={`${pokemons.types?.[0].type?.name}`}>
        <h1>{pokemons.name}</h1>
        <img src={pokemons.sprites?.other.dream_world.front_default} alt="" />
        <div className='card-stats'>
          <div>
            <p>{pokemons.stats?.[0].stat.name}:  {pokemons.stats?.[0].base_stat}</p>
            <p>{pokemons.stats?.[1].stat.name}:  {pokemons.stats?.[1].base_stat}</p>
            <p>{pokemons.stats?.[2].stat.name}:  {pokemons.stats?.[2].base_stat}</p>

          </div>
          <div>
            <p>{pokemons.stats?.[3].stat.name}:  {pokemons.stats?.[3].base_stat}</p>
            <p>{pokemons.stats?.[4].stat.name}:  {pokemons.stats?.[4].base_stat}</p>
            <p>{pokemons.stats?.[5].stat.name}:  {pokemons.stats?.[5].base_stat}</p>
          </div>

        </div>

      </div>
    </Link>
  );
};

export default PokemonCard;

//className={`${pokemons.types[0].type?.name}`}}