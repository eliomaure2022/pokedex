import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import PokemonCard from './PokemonCard'
import pokemon from '../assets/images/pokemon.png'

const Pokedex = () => {
  const userName = useSelector((state) => state.name)
  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(1)
  const pokemonsPerPage = 16
  const lastIndex = page * pokemonsPerPage
  const firsIndex = lastIndex - pokemonsPerPage
  const pokemonPaginated = pokemons.slice(firsIndex, lastIndex)
  const totalPages = Math.ceil(pokemons.length / pokemonsPerPage)
  const navigate = useNavigate()
  const [pokemonName, setPokemonName] = useState('')
  const [locations, setLocations] = useState([])

  const numbers = []
  for (let i = 1; i <= totalPages; i++) {
    numbers.push(i)
  }

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154`)
      .then((res) => setPokemons(res.data.results))

    axios
      .get(`https://pokeapi.co/api/v2/type/`)
      .then((res) => setLocations(res.data.results))
  }, [])

  const searchPokemon = () => {
    navigate(`/pokedex/${pokemonName}`)
  }

  const filterType = (e) => {
    const url = e.target.value
    axios.get(url).then((res) => setPokemons(res.data.pokemon))
  }

  return (
    <div className="pokedex">
      <div className="title">
        <img src={pokemon} alt="poke" />
      </div>
      <div className="welcome">
        <h1>welcome!! {userName}</h1>
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="search pokemon"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
        />
        <button onClick={searchPokemon}>search</button>
        <select name="" id="" onChange={filterType}>
          {locations.map((location) => (
            <option value={location.url} key={location.name}>
              {location.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <ul className="card-container">
          {pokemonPaginated.map((pokemon) => (
            <li
              key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
              className="card"
            >
              <PokemonCard
                url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
              />
            </li>
          ))}
        </ul>
        <div>
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            prev
          </button>
          {/* {
              numbers.map(number=>(
                <button onClick={()=>setPage(number)} >{number}</button>
              ))
            } */}
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
          >
            next
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pokedex
