import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = (props) => (
  <li>
    <Link to={`/pokemon/${props.pokemon.id}`}>
      {props.pokemon.name}
      <br/>
      <img src={props.pokemon.image_url}/>
    </Link>
  </li>
)

export default PokemonIndexItem