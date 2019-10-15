import { createStore, combineReducers } from 'redux';
import launchCollection from './LaunchCollectionReducer';
import rocketReducer from './RocketReducer';

const rootReducer = combineReducers({
  launchCollection,
  rocketReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, composeEnhancer);

export default store;
