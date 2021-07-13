import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/favoritesAction' //Import the actions for use
// Create a reducer file for handling business logic for favorites. Include the following state values in your initialState setup:
//   -  favorites: an array of movie objects
//   -  displayFavorites: a boolean that holds if favorite elements should be displayed in app
const initialState = {
    favorites: [],
    displayFavorites: true
}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        //Add in a case for TOGGLE_FAVORITES
        case TOGGLE_FAVORITES:
            return {
                ...state, 
                displayFavorites: !state.displayFavorites
            }
        //Add in a case for ADD_FAVORITE    
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }  
        //Add in a case for REMOVE_FAVORITE     
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(item =>{
                    return item.id !== action.payload
                })
            }    
        // As a start, only add a default case to the switch statement.
        default:
            return state
    }
}

export default favoritesReducer