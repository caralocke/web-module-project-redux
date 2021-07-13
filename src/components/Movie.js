import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux'; //Import connect for use.
import { deleteMovie } from '../actions/movieActions'; //Import deleteMovie for use.
import { addFavorite } from '../actions/favoritesAction'; //Import addFavorite for use.

const Movie = (props) => {
    console.log('Movie props: ', props) //See what props are being received
    const { id } = useParams();
    const { push } = useHistory();

    const movies= props.movies  //added props here to make sure the correct data is being received
    const movie = movies.find(movie=>movie.id===Number(id));
    const displayFavorites = props.displayFavorites //define display favorites
    
    //Create the necessary event handlers to call deleteMovie on the current movie's id. 

    const useDeleteMovie = () => {
        props.deleteMovie(movie.id)
        push('/movies') //After setting the state, redirect the user using the push('/movies') command.
    }

    //Create an event handler to use addFavorite
    const useAddFavorite = () => {
        props.addFavorite({
            title: movie.title,
            id: movie.id
        })
    }

    return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{movie.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{movie.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{movie.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{movie.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{movie.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{movie.description}</strong></p>
                            </div>
                        </section>
                        
                        <section>
                            {/* It makes sense to not allow the user to favorite an item if favorites is not displayed. Add in means for the favorite button to ONLY display if displayFavorite is true. Also add the onClick to add the movie to favorites. */}
                            {displayFavorites && <span onClick={useAddFavorite} key={movie.id} className="m-2 btn btn-dark">Favorite</span>}
                            <span className="delete">
                                {/* **Find the HTML element that should trigger a deletion in the movie component.** Connect the necessary event handlers  */}
                                <input onClick={useDeleteMovie} key={movie} type="button" className="m-2 btn btn-danger" value="Delete"/></span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}
//**The Movie component needs to access our list of movies to function.** Map movies to props here as well.
const mapStateToProps = (state) => {
    console.log('Movie.js state: ', state)
    return {
        movies: state.movieReducer.movies, //Make changes necessary to get the component connected to the movie reducer working again.
        displayFavorites: state.favoritesReducer.displayFavorites //Connect the displayFavorites state to the Movie and MovieHeader component.
    }
}
//**We can delete movies within the Movie Component.** Connect the deleteMovie action through the connect method. Also connected addFavorite
export default connect(mapStateToProps, {deleteMovie, addFavorite})(Movie);