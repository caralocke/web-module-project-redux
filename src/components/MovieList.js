import React from 'react';

import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';

import { connect } from 'react-redux'; //Import connect for use

const MovieList = (props)=> {
    console.log('MovieList props: ', props) //see what props are being received
    const movies = props.movies; //made sure movies was referencing the correct data.
    return (
        <div className="col">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Director</th>
                    <th>Genre</th>
                    <th>Metascore</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                    {
                        movies.map(movie=><MovieListItem key={movie.id} movie={movie}/>)
                    }
                </tbody>
            </table>
            
            <MovieFooter totalMovies={movies.length}/>
        </div>
    );
}
// **The MovieList component prints all of our movies to the screen.** Use the connect method here to map the movies state value into props. Replace our static movie variable with that prop.
const mapStateToProps = (state) => {
    console.log('MovieList.js state: ', state)
    return {
        movies: state.movieReducer.movies //Make changes necessary to get the component connected to the movie reducer working again.
    }
}
export default connect(mapStateToProps)(MovieList);