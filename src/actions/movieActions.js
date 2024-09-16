export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = 'ADD_MOVIE' //Create an action string

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}
// Create an action creator for addMovie in movieActions.js.
export const addMovie = (movie) => {
    return({type: ADD_MOVIE, payload:movie})
}