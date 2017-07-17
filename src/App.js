import React, { Component } from 'react'
import ListBooks from './ListBooks'
import { Route, Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  constructor(props) {
    super(props)
    this.state = { books: [] }
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks
            books={this.state.books}
          />
        )} />
        <Route path="/search" component={SearchBooks} />
      </div>
    )
  }
}

export default BooksApp
