import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Index = () => {

  const [pokemons, setPokemons] = useState([
    { name: 'Pokemon 1' },
    { name: 'Pokemon 2' }
  ]);

  useEffect(() => {
    axios("https://pokeapi.co/api/v2/pokemon/?limit=50")
      .then((result) => {
        console.log(result);
        setPokemons(result.data.results);
      })
      .catch((error) => {
        console.log('There was an error: ', error);
      });
  }, []);

  return (
    <>
      <h1>Pokemon index</h1>
      <ul>
        {pokemons.map((pokemon, i) => {
          return (<li key={i}>{pokemon.name}</li>)
        })}
      </ul>
    </>
  )
}

export default Index;