import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/api_util';
import {requestSinglePokemon, receiveSinglePokemon} from './actions/pokemon_actions';
import configureStore from './store/store';
import selectAllPokemon from './reducers/selectors';
import Root from './components/root'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();
  //FOR TESTING
  window.receiveSinglePokemon = receiveSinglePokemon;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.selectAllPokemon = selectAllPokemon;
  window.requestSinglePokemon = requestSinglePokemon;

  ReactDOM.render(<Root store={store}/>, root);
});