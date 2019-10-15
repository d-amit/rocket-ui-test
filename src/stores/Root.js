import { createStore, combineReducers } from 'redux';
import launchCollection from './LaunchCollectionReducer';

const rootReducer = combineReducers({
  launchCollection
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, composeEnhancer);

export default store;
