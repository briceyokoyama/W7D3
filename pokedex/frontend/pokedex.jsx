import React from 'react';
import ReactDOM from 'react-dom';

import * as APIUtil from './util/api_util';
import {receiveAllPokemon} from './actions/pokemon_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');

  //FOR TESTING
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = APIUtil.fetchAllPokemon;

  ReactDOM.render(<h1>Howdy!</h1>, root);
});