import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; //Import connect for use.

const FavoriteMovieList = (props) => {
    console.log('FavoriteMovieList props: ', props) //See what props are being received
    const favorites = props.favorites; //Set favorites to props.favorites to make sure it can access the data.
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span class="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}
//Connect the favorites state to the FavoriteMovieList component and test.
const mapStateToProps = (state) => {
    console.log('FavoriteMoviesList state: ', state)
    return {
        favorites: state.favoritesReducer.favorites
    }
}

export default connect(mapStateToProps)(FavoriteMovieList);