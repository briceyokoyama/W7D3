import { createStore } from "redux";
import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON"

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
})

export const receiveSinglePokemon = (entities) => ({
  type: RECEIVE_POKEMON,
  entities
})

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

export const requestSinglePokemon =(id) => dispatch => {
  return (
  APIUtil.fetchPokemon(id)
    .then(entities => dispatch(receiveSinglePokemon(entities)))
)}