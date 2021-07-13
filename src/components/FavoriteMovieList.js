import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; //Import connect for use.
import { removeFavorite } from '../actions/favoritesAction'; //Import the action for use

const FavoriteMovieList = (props) => {
    console.log('FavoriteMovieList props: ', props) //See what props are being received
    const favorites = props.favorites; //Set favorites to props.favorites to make sure it can access the data.
    const removeFavorite = props.removeFavorite //Set removeFavorite to props.removeFavorite so it can access the correct data.

    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        {/* Find the component that is used to remove a favorite and add the onClick */}
                        <span><span onClick={()=>{removeFavorite(movie.id)}} className="material-icons">remove_circle</span></span>
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

export default connect(mapStateToProps, {removeFavorite})(FavoriteMovieList); //Connect the action