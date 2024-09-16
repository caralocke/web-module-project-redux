import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux'; //Connect was already imported 

import MovieList from './components/MovieList';
import Movie from './components/Movie';

import MovieHeader from './components/MovieHeader';

import AddMovieForm from './components/AddMovieForm';
import FavoriteMovieList from './components/FavoriteMovieList';

const App = props => {
  console.log('App.js props: ', props)
  const displayFavorites = props.displayFavorites; //Changed this from the hard coded 'true' to be the value of whatever props.displayFavorites is.

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand" ><img width="40px" alt="" src="./Lambda-Logo-Red.png"/>Redux Module Project</span>
      </nav>

      <div className="container">
        <MovieHeader/>
        <div className="row ">
          {displayFavorites && <FavoriteMovieList/>}
        
          <Switch>
            <Route exact path="/movies/add">
              <AddMovieForm />
            </Route>

            <Route path="/movies/:id">
              <Movie />
            </Route>

            <Route path="/movies">
              <MovieList/>
            </Route>

            <Route path="/">
              <Redirect to="/movies"/>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};
//Connect displayFavorites so we can hide the FavoriteMovieList component if displayFavorites is false
const mapStateToProps = (state) => {
  console.log('App.js state: ', state)
  return {
    displayFavorites: state.favoritesReducer.displayFavorites
  }
}
export default connect(mapStateToProps)(App);