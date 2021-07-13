// Create a reducer file for handling business logic for favorites. Include the following state values in your initialState setup:
//   -  favorites: an array of movie objects
//   -  displayFavorites: a boolean that holds if favorite elements should be displayed in app
const initialState = {
    favorites: [],
    displayFavorites: true
}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        // As a start, only add a default case to the switch statement.
        default:
            return state
    }
}

export default favoritesReducer