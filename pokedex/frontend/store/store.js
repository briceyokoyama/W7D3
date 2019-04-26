import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import { logger } from 'redux-logger';
import thunk from '../middleware/thunkin_donuts';

export default () => createStore(rootReducer, applyMiddleware(thunk, logger));

