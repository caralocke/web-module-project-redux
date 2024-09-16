import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}

const reducer = (state = initialState, action) => { //**In movieReducer.js, make sure that we are setting our state by default to initialState.** Otherwise your state will not have the original structure it needs to function!
    switch(action.type) {
        case DELETE_MOVIE:
            return {
                movies: state.movies.filter(item=>(action.payload !== item.id))
            }
        // Add in an ADD_MOVIE case to movieReducer.js.    
        case ADD_MOVIE:
            // Make this new case return a version of state with new movie values passed in through the payload.
            return {
                ...state,
                movies: [ ...state.movies, action.payload]
            }    
        default:
            return state;
    }
}

export default reducer;