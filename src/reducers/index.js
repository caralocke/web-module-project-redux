import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoritesReducer from './favoritesReducer'; //**Import your new reducer file into the ./reducers/index.js file.** 
const rootReducer = combineReducers({ movieReducer, favoritesReducer}) //**In reducers/index.js, use the combineReducers method to connect both movies and favorite movies to redux.**
export default rootReducer; //Change the export to rootReducer.