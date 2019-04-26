import React from 'react';
import ReactDOM from 'react-dom';

import * as APIUtil from './util/api_util';
import {receiveAllPokemon, fetchAllPokemon, requestAllPokemon} from './actions/pokemon_actions';
import configureStore from './store/store';
// import selectAllPokemon from './reducers/selectors';
import Root from './components/root'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();
  //FOR TESTING
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // window.selectAllPokemon = selectAllPokemon;
  window.requestAllPokemon = requestAllPokemon;

  ReactDOM.render(<Root store={store}/>, root);
});