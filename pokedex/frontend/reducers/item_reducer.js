import { RECEIVE_POKEMON } from '../actions/pokemon_actions';

const itemReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POKEMON:
      debugger
      return action.entities.items;
    default:
      return state;
  }
}

export default itemReducer;