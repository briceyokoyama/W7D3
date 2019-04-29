import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions'
import { merge } from 'lodash'

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon
    case RECEIVE_POKEMON:
      debugger;
      newState = Object.assign({}, state);
      newState[action.entities.pokemon.id] = action.entities.pokemon;
      return newState;
    default:
      return state;
  }
}

export default pokemonReducer;