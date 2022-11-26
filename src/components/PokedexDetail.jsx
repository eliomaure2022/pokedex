import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';



const PokedexDetail = () => {

  const [pokemonId, setPokemonId] = useState({})


  const navigate = useNavigate()

  const { id } = useParams()

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => setPokemonId(res.data))
  }, [])

  console.log(pokemonId);


  return (
    <div className='modal'>


      <div className='modal-container animate-bg'>
        <div className='header-modal'>
          <h1>{pokemonId.name}</h1>
          <div className="measures">
            <button onClick={() => navigate(-1)}><i className="fa-regular fa-circle-xmark"></i></button>
            <p>Height: {pokemonId.height}</p>
            <p>Weigth: {pokemonId.weight}</p>
          </div>
        </div>

        <div className="img-container">
          <img src={pokemonId.sprites?.other.home.front_default} alt="" />
        </div>

        <div className='img-type'>
          <div className='dates'>
            <h2>Type</h2>
            <div className="type">
              <p>{pokemonId.types?.[0]?.type.name}</p>
              <p>{pokemonId.types?.[1]?.type.name}</p>

            </div>
            <div className="skills">
              <div><h2>Skills:</h2>
                <ul>
                  <li>{pokemonId.abilities?.[0]?.ability.name}</li>
                  <li>{pokemonId.abilities?.[1]?.ability.name}</li>
                </ul>
              </div>
            </div>
          </div>
          <ul className='moves' key={pokemonId.moves?.url} >
            {
              pokemonId.moves?.map(move => (
                <li key={move.move.name}>{move.move.name}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};
export default PokedexDetail;















