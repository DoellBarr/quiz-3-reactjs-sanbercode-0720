import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import {MovieContext} from './MovieContext'

const MovieList = () => {
  const [DataMovie, setDataMovie] = useContext(MovieContext)

  useEffect(()=>{
    if (DataMovie.lists === null){
      axios.get(`http://backendexample.sanbercloud.com/api/movies`)
        .then(res => {
          setDataMovie({
            ...DataMovie,
            lists: res.data.map(el => {
              return {
                id: el.id,
                title: el.title,
                description: el.description,
                year: el.year,
                duration: el.duration,
                genre: el.genre,
                rating: el.rating
              };
            })
          })
        })
    }
  })

  return (
    <>
      <h1>Daftar Film Terbaik</h1>
      {DataMovie.lists !== null && DataMovie.lists.map((el, index)=>{
        return(
          <div key = {index} className = "content">
            <h2> {el.title} ({el.year}) </h2>
            <h5> Rating: {el.rating} </h5>
            <h5> Durasi: {el.duration} </h5>
            <h5> Genre: {el.genre} </h5>
            <h5> Deskripsi: </h5> <p>{el.description}</p>
          </div>

        )
      })}
      </>
  );
}

export default MovieList
