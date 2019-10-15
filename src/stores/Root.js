import { createStore, combineReducers } from 'redux';
import launchCollection from './LaunchCollectionReducer';
import rocketDetails from './RocketReducer';

const rootReducer = combineReducers({
  launchCollection,
  rocketDetails
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, composeEnhancer);

export default store;
