import React, { useState } from 'react'
import Filter from './Filter'
import MovieList from './MovieList'
import MovieDescription from './MovieDescription'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function HomePage(props) {
  return (
    <div>
      <h1>This is the home Page</h1>
    </div>
  )
}

export default HomePage
