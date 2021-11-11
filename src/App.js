import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HomePage from './Components/HomePage'
import MovieDescription from './Components/MovieDescription'
import MovieTrailer from './Components/MovieTrailer'
import MovieList from './Components/MovieList'
import Filter from './Components/Filter'
import AddMovie from './Components/AddMovie'
function App() {
  const [movieList, setMovieList] = useState([
    {
      id: '1',
      title: 'The Conjuring',
      poster: 'https://m.media-amazon.com/images/I/81yAfVk+7UL._AC_SY606_.jpg',
      decription:
        'Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.',
      rate: '2',
      details:
        'The Conjuring is a 2002 American supernatural horror film; The Ring is a 2002 American supernatural horror film',
      trailer: 'https://www.youtube.com/watch?v=hpb2-ZOzc_o',
    },
    {
      id: '2',
      title: 'The Grudge',
      poster:
        'https://aws-cf.imdoc.fr/prod/photos/8/6/1/11904861/29176577/big-29176577abb.jpg?v=2',
      decription: 'The Ring is a 2002 American supernatural horror film',
      rate: '3',
      details:
        'The Grudge is a 2002 American supernatural horror film; The Ring is a 2002 American supernatural horror film',
      trailer: 'https://www.youtube.com/watch?v=hpb2-ZOzc_o',
    },
    {
      id: '3',
      title: 'The Ring',
      poster: 'https://m.media-amazon.com/images/I/41CGtdWTDvL._AC_.jpg',
      decription: 'The Ring is a 2002 American supernatural horror film',
      rate: '1',
      details:
        'The Ring is a 2002 American supernatural horror film; The Ring is a 2002 American supernatural horror film',
      trailer: 'https://www.youtube.com/watch?v=hpb2-ZOzc_o',
    },
    {
      id: '4',
      title: 'The Shawshank Redemption',
      poster: 'https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg',
      decription: 'The Ring is a 2002 American supernatural horror film',
      rate: '3',
      details:
        'The Shawshank is a 2002 American supernatural horror film; The Ring is a 2002 American supernatural horror film',
      trailer: 'https://www.youtube.com/watch?v=hpb2-ZOzc_o',
    },
    {
      id: '5',
      title: 'The Godfather',
      poster:
        'https://ih1.redbubble.net/image.1275475865.6561/pp,504x498-pad,600x600,f8f8f8.jpg',
      decription: 'The Ring is a 2002 American supernatural horror film',
      rate: '3',
      details:
        'The Godfather is a 2002 American supernatural horror film; The Ring is a 2002 American supernatural horror film',
      trailer: 'https://www.youtube.com/watch?v=hpb2-ZOzc_o',
    },
    {
      id: '6',
      title: 'The Godfather: Part II',
      poster:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0hYUlSTUgCxfY-8ACz_E3CQWDKShEYEvGFw&usqp=CAU',
      decription: 'The Ring is a 2002 American supernatural horror film',
      rate: '3',
      details:
        'The Godfather II is a 2002 American supernatural horror film; The Ring is a 2002 American supernatural horror film',
      trailer: 'https://www.youtube.com/watch?v=hpb2-ZOzc_o',
    },
    {
      id: '7',
      title: 'The Dark Knight',
      poster: 'https://m.media-amazon.com/images/I/51CbCQNMyiL._AC_.jpg',
      decription: 'The Ring is a 2002 American supernatural horror film',
      rate: '2',
      details:
        'The Dark Knight is a 2002 American supernatural horror film; The Ring is a 2002 American supernatural horror film',
      trailer: 'https://www.youtube.com/watch?v=hpb2-ZOzc_o',
    },
    {
      id: '8',
      title: '12 Angry Men',
      poster: 'https://m.media-amazon.com/images/I/81zZhjymV7L._AC_SL1500_.jpg',
      decription: 'The Ring is a 2002 American supernatural horror film',
      rate: '3',
      details:
        'Angry Men is a 2002 American supernatural horror film; The Ring is a 2002 American supernatural horror film',
      trailer: 'https://www.youtube.com/watch?v=hpb2-ZOzc_o',
    },
  ])

  function add(film) {
    setMovieList([...movieList, film])
  }

  return (
    <Router>
      <div className="App">
        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '50%',
            padding: '1%',
            marginLeft: '25%',
            marginBottom: '5%',
            marginTop: '2%',
            borderStyle: 'solid',
            borderColor: 'gray',
          }}
        >
          <Link to={`/Home`}> Home Page</Link>
          <Link to={'/MovieList'}> List of Movies </Link>
          <Link to={`/Filter`}> Find Movies</Link>
          <Link to={`/AddMovie`}> Add amovie </Link>
        </nav>

        <Switch>
          <Route exact path="/Home" component={HomePage} />
          <Route
            exact
            path="/AddMovie"
            render={(props) => (
              <AddMovie
                {...props}
                movieList={movieList}

                /*             add={add} //ici fnction links the child and the parent to AddMovie compo
                 */
              />
            )}
          />
          <Route
            exact
            path="/Filter"
            render={(props) => <Filter {...props} movieList={movieList} />}
          />
          <Route
            exact
            path="/MovieList"
            render={(props) => <MovieList {...props} movieList={movieList} />}
          />
          <Route
            exact
            path="/MovieDescription/:id"
            render={(props) => (
              <MovieDescription {...props} movieList={movieList} />
            )}
          />
          <Route
            exact
            path="/MovieDescription/:trailer"
            render={(props) => (
              <MovieDescription {...props} movieList={movieList} />
            )}
          />{' '}
        </Switch>
      </div>
    </Router>
  )
}

export default App
