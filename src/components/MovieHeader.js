import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; //Import connect for use.

const MovieHeader = (props) => {
    console.log('MovieHeader props: ', props) //See what props are being received.
    const appTitle = "";
    const displayFavorites = true;
    
    return(<div className="table-title">
        <div className="row">
        <div className="col-sm-6">
            <h2>{props.appTitle}</h2> {/*Added props here to make sure it was receiving the correct data. */}
        </div>
        <div className="col-sm-6 headerBar">
            <div className="btn btn-sm btn-primary"><span>{ displayFavorites ? "Hide" : "Show"} Favorites</span></div>
            <Link to="/movies" className="btn btn-sm btn-primary">View All Movies</Link>
            <Link to="/movies/add" className="btn btn-sm btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Movie</span></Link>
        </div>
        </div>
    </div>);
}
//**Finally, MovieHeader uses appTitle to display the title text.** Connect this component to appTitle and test appTitle is correctly displayed in your app.
const mapStateToProps = (state) => {
    console.log('MovieHeader state: ', state)
    return {
        appTitle: state.appTitle
    }
}
export default connect(mapStateToProps)(MovieHeader);