import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Filter(props) {
  const [singleMovie, setSignleMovie] = useState({
    id: '',
    title: '',
    poster: '',
    decription: '',
    rate: '',
    details: '',
    trailer: '',
  })

  const [caracter, setCaracter] = useState('')

  const searchHandeler = (event) => {
    setCaracter(event.target.value)
  }

  //on fair la recherche dans props.movieList==> le resultat va etre un seul film qui va etre mis dans le setSingleMovie
  //donc

  //table.find((element)=>element.title) --> ça permet de chercher un element dans un simple tableau

  const onSubmit = (event) => {
    event.preventDefault()
    var searchedElement = props.movieList.find((elementMovie) =>
      elementMovie.title.toLowerCase().includes(caracter.toLowerCase()),
    )

    setSignleMovie({ ...singleMovie, searchedElement })
  }

  console.log(singleMovie.searchedElement, 'searchedElement hello')

  return (
    <div style={{ display: 'flex', margin: '3%' }}>
      <form onSubmit={onSubmit}>
        <div className="input-group">
          <div className="form-outline">
            <input
              type="text"
              id="searchBar"
              className="form-control"
              placeholder="seaech for title or rate"
              value={caracter}
              onChange={searchHandeler}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            {' '}
            Search for movie
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>
      {/* le div suivant permet de trouver une solution pour le one flow.. pske le DOM va d'abord tomber
sur le tableau vide de singleMovie et donc va croire que ce dernier est un objet vide et donc va dire undifined donc veut dire non initialisé  */}
      <div>
        {singleMovie.searchedElement ? (
          <div>
            <h1>{singleMovie.searchedElement.title}</h1>
            <h1>{singleMovie.searchedElement.rate}</h1>
          </div>
        ) : (
          ' '
        )}
      </div>
    </div>
  )
}

export default Filter
