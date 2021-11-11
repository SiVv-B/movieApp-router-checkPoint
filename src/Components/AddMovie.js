import React, { useState } from 'react'
import Filter from './Filter'
import MovieList from './MovieList'
import MovieDescription from './MovieDescription'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function AddMovie(props) {
  const [movie, setMovie] = useState({
    title: '',
    poster: '',
    description: '',
    rate: '',
  })

  const [movies, setMovies] = useState(props.movieList)

  const handelChange = (event) => {
    setMovie({ ...movie, [event.target.id]: event.target.value })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setMovies([...movies, movie])
    props.add(movies) //ici fnction lie child and parent to add new movie

    setMovies({
      title: '',
      poster: '',
      description: '',
      rate: '',
    })
  }
  console.log(movies.title, 'addMovie')

  return (
    <div>
      <div className="Add movies">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title of the new movie</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter title"
              id="title"
              value={movie.title}
              onChange={handelChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="poster">Paste link of the movie's poster</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter URL's picture"
              id="poster"
              value={movie.poster}
              onChange={handelChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">description:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter description"
              id="description"
              value={movie.description}
              onChange={handelChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">rate the movie:</label>
            <input
              type="number"
              className="form-control"
              placeholder="rate the movie"
              id="rate"
              value={movie.rate}
              onChange={handelChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add new movie
          </button>
        </form>
      </div>
      <div></div>
    </div>
  )
}

export default AddMovie
