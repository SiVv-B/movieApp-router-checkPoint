import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import MovieDescription from './MovieDescription';
import MovieTrailer from './MovieTrailer';


function MovieCard(props) {

  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <img
          className="card-img-top"
          src={props.movie.poster}
          alt="New movie"
        />
        <div className="card-body">
          <h1>{props.movie.title}</h1>
          <p className="card-text">description: {props.movie.decription}</p>
          <p className="card-text">rate: {props.movie.rate}</p>
         
        </div>
      </div>
    </div>
  )
}

export default MovieCard
