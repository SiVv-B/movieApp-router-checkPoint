import React, { useEffect, useState } from 'react'
import MovieTrailer from './MovieTrailer'
import { Link } from 'react-router-dom'

function MovieDescription(props) {
  const [movieDetail, setMovieDetail] = useState({
    title: '',
    poster: '',
    description: '',
    rate: '',
    details: '',
    trailer: '',
  })

  useEffect(() => {
    setMovieDetail(
      props.movieList.find(
        (element) => element.id.toString() == props.match.params.id,
      ),
    )
  }, [])

  console.log(movieDetail)
  return (
    <div>
      <h1>hello from movie description</h1>

      <h1>{movieDetail.title}</h1>
      <img
        src={movieDetail.poster}
        style={{ padding: '30%', marginTop: '-25%', marginBottom: '-25%' }}
      />
      <p>{movieDetail.details}</p>

      <Link to={`/MovieTrailer//* ${movieDetail.trailer} */`}>
        <MovieTrailer movieDetail={movieDetail} />
      </Link>
    </div>
  )
}

export default MovieDescription
