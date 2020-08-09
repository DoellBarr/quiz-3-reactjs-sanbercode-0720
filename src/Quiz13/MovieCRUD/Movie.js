import React from 'react';
import {MovieProvider} from '../MovieCRUD/MovieContext'
import MovieForm from './MovieForm'
// import MovieList from './MovieList'
// import './MovieStyle.css'

const Movie = () => {
  return(
    <>
      <MovieProvider>
        <MovieForm />
      </MovieProvider>
    </>
  )
}

export default Movie
