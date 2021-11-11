import React from 'react'
import MovieCard from './MovieCard'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import MovieDescription from './MovieDescription'

function MovieList(props) {
  console.log(props.movieList,'hello from movieList')
  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignContent: 'center',
          marginRight: '20%',
          flexWrap: 'wrap',
          width: '80%',
          height: '50%',
        }}
      >
        {/*         {props.movieList.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))} */}

        {props.movieList.map((movie) => (
          <div>
            <Link to={`/MovieDescription/${movie.id}`}
            style={{textDecoration:'none', color:'black'}}>
            <MovieCard key={movie.id} movie={movie} />
           </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieList
