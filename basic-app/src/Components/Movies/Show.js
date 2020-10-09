import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';

const Show = () => {
    let { id } = useParams();
    const[pokemon, setPokemon]=useState({
        name:'',
        sprites:{
            front_default:''
        }
    })

  async function fetchPokemon(){
      const result = await axios('https://pokeapi.co/api/v2/pokemon/'+id)
      setPokemon(result.data);
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <>
      <h1>Show pokemon</h1>
      <table>
          <tbody>
              <tr>
                  <th>
                      Name
                  </th>
                  <td>
                      {pokemon.name}
                  </td>
              </tr>
              <tr>
                  <th>
                      Sprite
                  </th>
                  <td>
                      <img src={pokemon.sprites.front_default} alt="pokemon"/>
                  </td>
              </tr>
          </tbody>
      </table>
    </>
  )
}

export default Show;