import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import { MovieContext } from "./MovieContext"
import MovieList from "./MovieList"

const MovieForm = () => {
  const [DataMovie, setDataMovie] = useContext(MovieContext)
  const [input, setInput] = useState({
    title: "",
    description: "",
    year: 0,
    duration: 0,
    genre: "",
    rating: 0,
  })

  useEffect(() => {
    if(DataMovie.statusForm === "changeToEdit"){
      let movieData = DataMovie.lists.find(x => x.id === DataMovie.selectedId)
      setInput({
        title: movieData.title,
        description: movieData.description,
        year: movieData.year,
        duration: movieData.duration,
        genre: movieData.genre,
        rating: movieData.rating
      })
      setDataMovie({...DataMovie, statusForm: "edit"})
    }
  }, [DataMovie])

const handleChange = (event) => {
  let typeOfInput = event.target.name
  switch (typeOfInput) {
    case "title":{
      setInput({...input, title: event.target.value})
      break
    }
    case "description":{
      setInput({...input, description: event.target.value})
      break
    }
    case "year":{
      setInput({...input, year: event.target.value})
      break
    }
    case "duration":{
      setInput({...input, duration: event.target.value})
      break
    }
    case "genre":{
      setInput({...input, genre: event.target.value})
      break
    }
    case "rating":{
      setInput({...input, rating: event.target.value})
      break
    }
    default:
      {break;}
  }
}

const handleSubmit = (event) => {
  event.preventDefault()

    if (DataMovie.statusForm === "create") {
      Axios.post(`http://backendexample.sanbercloud.com/api/movies`,
      {
        title: input.title,
        description: input.description,
        year: input.year,
        duration: input.duration,
        genre: input.genre,
        rating: input.rating
      })

      .then(res=>{
        setDataMovie(
          {
            statusForm: "create", selectedId: 0, lists:[
              ...DataMovie.lists,
              {id:res.data.id,
                title: input.title,
                description: input.description,
                year: input.year,
                duration: input.duration,
                genre: input.genre,
                rating: input.rating}
            ]
          })
      })
    } else if (DataMovie.statusForm === "edit") {
      Axios.put(`http://backendexample.sanbercloud.com/api/movies/${DataMovie.selectedId}`,
      {
        title: input.title,
        description: input.description,
        year: input.year,
        duration: input.duration,
        genre: input.genre,
        rating: input.rating
      })
      .then (res => {
        console.log(res)
        let movieData = DataMovie.lists.find(el => el.id === DataMovie.selectedId)
        movieData.title = input.title
        movieData.description = input.description
        movieData.year = input.year
        movieData.duration = input.duration
        movieData.genre = input.genre
        movieData.rating = input.rating
        setDataMovie({statusForm:"create", selectedId: 0, lists: [...DataMovie.lists]})
      })
    }
    setInput({
      title: "",
      description: "",
      year: 0,
      duration: 0,
      genre: "",
      rating: 0
    })
  }


const handleDelete = (event) =>{
  event.preventDefault()
  let idDataMovie = parseInt(event.target.value)
  let newDataMovie = DataMovie.lists.filter(el => el.id != idDataMovie)
  Axios.delete(`http://backendexample.sanbercloud.com/api/movies/${idDataMovie}`)
    .then(res=>{
      console.log(res)
    })

    setDataMovie({...DataMovie, lists:[...newDataMovie]})
}

const handleEdit = (event) => {
  let idDataMovie = parseInt(event.target.value)
  setDataMovie({...DataMovie, selectedId: idDataMovie, statusForm: "changeToEdit"})
}


return (
  <>

    <h2>Form Pengeditan Film</h2>
  <div style = {{width: "50%", margin: "0 auto", display: "block"}}>
    <div style = {{border: "1px solid #aaa", padding: "20px"}}>
      <MovieList/>
      <form onSubmit={handleSubmit}>
        <label>
          Masukkan Judul Film:
        </label>
        <input type = "text" name = "title" value={input.title} onChange={handleChange}/>
        <br/>
        <br/>
        <label>
            Masukkan Tahun Terbit Film:
        </label>
        <input type = "text" name = "year" value = {input.year} onChange={handleChange}/>
        <br/>
        <br/>
        <label>
          Masukkan Rating Film:
        </label>
        <input type = "text" name = "rating" value = {input.rating} onChange={handleChange}/>
        <br/>
        <br/>
        <label>
            Masukkan Durasi Film:
        </label>
        <input type = "text" name = "duration" value = {input.duration} onChange={handleChange}/>
        <br/>
        <br/>
        <label>
            Masukkan Genre Film:
        </label>
        <input type = "text" name = "genre" value = {input.genre} onChange={handleChange}/>
        <br/>
        <br/>
        <label>
            Masukkan Deskripsi Film:
        </label>
        <input type = "textarea" name = "description" value = {input.description} onChange={handleChange}/>
        <br/>
        <br/>
        <div>
          <button>submit</button>
        </div>
      </form>
    </div>
  </div>
</>
)
}

export default MovieForm
