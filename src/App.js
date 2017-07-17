import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  constructor(props) {
    super(props)
    this.state = { books: [] }
  }
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks
          />
        )} />
        <Route path="/search" component={SearchBooks} />
      </div>
    )
  }
}

export default BooksApp
