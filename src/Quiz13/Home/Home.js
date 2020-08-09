import React, { Component } from 'react';
import MovieList from '../MovieCRUD/MovieList'
import {MovieProvider} from '../MovieCRUD/MovieContext'

class Home extends Component {
  render() {
    return (
      <MovieProvider>
        <MovieList/>
      </MovieProvider>
    );
  }

}

export default Home;
