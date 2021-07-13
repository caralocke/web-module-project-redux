import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux'; //Import connect for use.
const Movie = (props) => {
    console.log('Movie props: ', props) //See what props are being received
    const { id } = useParams();
    const { push } = useHistory();

    const movies = [];
    const movie = props.movies.find(movie=>movie.id===Number(id)); //added props here to make sure the data is being received
    
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
                            <span className="m-2 btn btn-dark">Favorite</span>
                            <span className="delete"><input type="button" className="m-2 btn btn-danger" value="Delete"/></span>
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
        movies: state.movies
    }
}
export default connect(mapStateToProps)(Movie);